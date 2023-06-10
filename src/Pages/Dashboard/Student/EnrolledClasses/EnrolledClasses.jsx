import useClasses from "../../../../hook/useClasses";
import usePaymentClass from "../../../../hook/usePaymentClass";
// import ShowEnrolledClass from "../../../../Map/ShowEnrolledClass/ShowEnrolledClass";


const EnrolledClasses = () => {
    const [classes] = useClasses()
    const [paymentClass] = usePaymentClass()


    return (
        <div className="px-8 pt-8 pb-14 bg-cyan-800">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-">
                {
                    paymentClass.map(payment => <div
                        key={payment._id}
                    >
                        <div>
                            {
                                classes.map(item => <div key={item._id}>{
                                    ((payment.classItem).map(enroll => <div key={enroll._id}> {enroll === item._id && <div className="card  h-full bg-slate-800 shadow-xl mb-8 md:me-8">
                                        <figure><img src={item.image} className="h-56 w-full" alt="Shoes" /></figure>
                                        <div className="card-body items-center text-center text-white">
                                            <h2 className="text-3xl font-bold">{item.name}</h2>
                                            <p><span className="text-lg font-semibold">Instructor Name :</span> {item.instructor_name}</p>
                                        </div>
                                    </div>}</div>))

                                }</div>)
                            }
                        </div>

                    </div>)
                }
            </div>
        </div>
    );
};

export default EnrolledClasses;