import { Helmet } from "react-helmet-async";
import useClasses from "../../../../hook/useClasses";
import usePaymentClass from "../../../../hook/usePaymentClass";
// import ShowEnrolledClass from "../../../../Map/ShowEnrolledClass/ShowEnrolledClass";


const EnrolledClasses = () => {
    const [classes] = useClasses()
    const [paymentClass] = usePaymentClass()


    return (
        <div className="my-16">
            <Helmet>
                <title>Martialverse || Dashboard || Enrolled Class</title>
            </Helmet>
            <div className="bg-sky-50 px-6 py-12">
                <div className="mt-9">
                    <div className="overflow-x-auto w-ful   ">
                        <table className="table w-ful">
                            {/* head */}
                            <thead>
                                <td className="flex justify-between">
                                    <th className="font-bold text-base">IMAGE</th>
                                    <th className="font-bold text-base">CLASS NAME</th>
                                    <th className="font-bold text-base">INSTRUCTOR NAME</th>
                                    <th className="font-bold text-base">PRICE</th>
                                </td>
                            </thead>
                            <tbody>
                                {
                                    paymentClass.map(payment => <div key={payment._id}>
                                        <div>
                                            {
                                                classes.map(item => <div key={item._id}>{
                                                    payment.classItem === item._id && <tr className="flex justify-between items-center">
                                                        <td>
                                                            <div className="flex items-center space-x-3">
                                                                <div className="avatar">
                                                                    <div className="mask mask-squircle w-12 h-12">
                                                                        <img src={item.image} alt="Avatar Tailwind CSS Component" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </td>
                                                        <td>
                                                            {item.name}
                                                        </td>
                                                        <td>
                                                            {item.instructor_name}
                                                        </td>
                                                        <td><span className='text-orange-500'>${item.price}</span></td>
                                                    </tr>

                                                }</div>)
                                            }
                                        </div>

                                    </div>)
                                }
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default EnrolledClasses;