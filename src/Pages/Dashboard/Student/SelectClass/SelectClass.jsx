import useSelectedClass from "../../../../hook/useSelectedClass";
import { Helmet } from "react-helmet-async";
import ShowSelectClass from "../../../../Map/ShowSelectClass/ShowSelectClass";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../../hook/useAxiosSecure";


const SelectClass = () => {
    const [selectClass, refetch] = useSelectedClass()
    const total = selectClass.reduce((sum, item) => item.price + sum, 0)
    const totalPrice = total.toFixed(2)
    const [axiosSecure] = useAxiosSecure()

    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/selected/${id}`)
                    .then(res => {
                        refetch()
                        if (res.data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your selected class has been deleted.',
                                'success'
                            )
                        }
                    })
            }
        })
    }

    return (
        <div>
            <div className=" max-w-screen-xl mx-auto">
                <Helmet>
                    <title>MARTIALverse || Dashboard || Select Class</title>
                </Helmet>
                <div className="my-16">
                    <div className="bg-sky-50 px-6 py-12">
                        <div className="flex justify-between">
                            <h1 className="text-2xl font-bold">Total Selected Class: {selectClass?.length} </h1>
                            <h1 className="text-2xl font-bold">Total Price: ${totalPrice} </h1>
                        </div>
                        <div className="mt-9">
                            <div className="overflow-x-auto w-full">
                                <table className="table w-full">
                                    <thead>
                                        <tr>
                                            <th>#</th>
                                            <th>IMAGE</th>
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