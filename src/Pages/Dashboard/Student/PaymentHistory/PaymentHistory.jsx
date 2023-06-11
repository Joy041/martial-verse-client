import { Helmet } from "react-helmet-async";
import ShowPaymentHistory from "../../../../Map/ShowPaymentHistory/ShowPaymentHistory";
import usePaymentClass from "../../../../hook/usePaymentClass";


const PaymentHistory = () => {
    const [paymentClass] = usePaymentClass()

    return (
        <div>
            <Helmet>
                <title>Martialverse || Dashboard || Payment History</title>
            </Helmet>
            <div className="my-4">
                <div className="bg-sky-50 px-6 pt-4 pb-12">
                    <div className="mt-9">
                        <div className="overflow-x-auto w-full">
                            <table className="table w-full">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>TRANSACTIONId</th>
                                        <th>CLASS NAME</th>
                                        <th>DATE</th>
                                        <th>PRICE</th>
                                        <th>QUANTITY</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        paymentClass.map((item, index) => <ShowPaymentHistory
                                            key={item._id}
                                            item={item}
                                            index={index}
                                        ></ShowPaymentHistory>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentHistory;