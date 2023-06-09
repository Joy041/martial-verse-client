import { Link } from "react-router-dom";
import useSelectedClass from "../../../../hook/useSelectedClass";
import { Helmet } from "react-helmet-async";
import ShowSelectClass from "../../../../Map/ShowSelectClass/ShowSelectClass";


const SelectClass = () => {
    const [selectClass] = useSelectedClass()
    const total = selectClass.reduce((sum, item) => item.price + sum, 0)
    const totalPrice = total.toFixed(2)

    const handleDelete = id => {
        console.log(id)
    }

    return (
        <div>
            <div className=" max-w-screen-xl mx-auto">
                <Helmet>
                    <title>MARTIALverse || Dashboard || My Cart</title>
                </Helmet>
                <div className="my-16">
                    <div className="bg-sky-50 px-6 py-12">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Total Order: {selectClass?.length} </h1>
                            <h1 className="text-2xl font-bold">Total Price: ${totalPrice} </h1>
                            <Link to={'/dashboard/payment'}><button className="btn bg-[#D1A054] border-0 btn-sm">Pay</button></Link>
                        </div>
                        <div className="mt-9">
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    {/* head */}
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>CLASS IMAGE</th>
                                            <th>CLASS NAME</th>
                                            <th>INSTRUCTOR NAME</th>
                                            <th>PRICE</th>
                                            <th>ACTION</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            selectClass.map((item, index) => <ShowSelectClass
                                                key={item._id}
                                                item={item}
                                                index={index}
                                                handleDelete={handleDelete}
                                            ></ShowSelectClass>)
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SelectClass;