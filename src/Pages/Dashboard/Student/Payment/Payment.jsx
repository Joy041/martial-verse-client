import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import { loadStripe } from "@stripe/stripe-js";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK_TOKEN)
const Payment = () => {

    return (
        <div className="bg-sky-50 py-20 h-full">
            <h1 className="text-center font-bold text-5xl mb-14">Payment</h1>
            <div className="max-w-screen-lg mx-auto mt-">
                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>
    );
};

export default Payment;