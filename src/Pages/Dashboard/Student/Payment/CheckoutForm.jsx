import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
// import useSelectedClass from "../../../../hook/useSelectedClass";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
// import Swal from "sweetalert2";
import './CheckoutForm.css'
import Swal from "sweetalert2";

const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements()
    const [error, setError] = useState('')
    // const [selectClass] = useSelectedClass()
    // const total = selectClass.reduce((sum, item) => item.price + sum, 0)
    // const price = parseFloat(total.toFixed(2))
    const [axiosSecure] = useAxiosSecure()
    const [clientSecret, setClientSecret] = useState('')
    const { user, pricePay, payName, payId, payClassId, paySeat, payBooking } = useContext(AuthContext)
    const [processing, setProcessing] = useState(false)
    const [transactionId, setTransactionId] = useState('')
    const price = pricePay;

    useEffect(() => {
        console.log(price, payName, payId, payClassId, paySeat, payBooking)
        if (price > 0) {
            axiosSecure.post('/create-payment', { price })
                .then(res => {
                    console.log(res.data.clientSecret)
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosSecure, price, payClassId, payId, payBooking, paySeat, payName])





    const handleSubmit = async (event) => {
        event.preventDefault()

        if (!event || !elements) {
            return
        }

        const card = elements.getElement(CardElement);

        if (card === null) {
            return
        }

        const { error } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })
        console.log(card)

        if (error) {
            console.log('error', error)
            setError(error.message)
        }

        setProcessing(true)
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: user?.displayName || 'anonymous',
                        email: user?.email || 'unknown'
                    },
                },
            },
        );

        if (confirmError) {
            setError(confirmError.message)
            console.log(confirmError)
        }
        else {
            setError('')
            console.log('paymentIntent', paymentIntent)
        }

        setProcessing(false)
        if (paymentIntent.status === 'succeeded') {
            setTransactionId(paymentIntent.id)
             const seat = paySeat - 1;
            const book = payBooking + 1;

            console.log(paySeat, book, seat)

            axiosSecure.patch(`/services/booking/${payClassId}`, {seat, book})
                .then(res => {
                    console.log(res.data)
                })
            

            // const payment = {
            //     email: user?.email,
            //     transactionId: paymentIntent.id,
            //     price,
            //     date: new Date(),
            //     className: payName,
            //     selectItem: payId,
            //     classItem: payClassId
            // }

            axiosSecure.post('/payments', {
                email: user?.email,
                transactionId: paymentIntent.id,
                price,
                date: new Date(),
                className: payName,
                selectItem: payId,
                classItem: payClassId
            })
                .then(res => {
                    if (res.data.paymentResult.insertedId) {

                        Swal.fire({
                            title: 'Success!',
                            text: 'Payment successful',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="btn btn-outline text-white bg-rose-600 hover:bg-rose-400 border-0 px-10 text-lg mt-6" type="submit" disabled={!stripe || !clientSecret || processing}>
                Pay
            </button>
            <p className="text-red-600 mt-3">{error && `Error : ${error}`}</p>
            <p className="text-green-600 mt-3">{transactionId && 'Transaction complete'}</p>
        </form>
    );
};

export default CheckoutForm;