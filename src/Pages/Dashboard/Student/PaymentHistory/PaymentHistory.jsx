import ShowPaymentHistory from "../../../../Map/ShowPaymentHistory/ShowPaymentHistory";
import usePaymentClass from "../../../../hook/usePaymentClass";


const PaymentHistory = () => {
    const [paymentClass] = usePaymentClass()

    return (
        <div>
            <h1>{paymentClass.length}</h1>
            <div className="my-16">
                <div className="bg-sky-50 px-6 py-12">
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