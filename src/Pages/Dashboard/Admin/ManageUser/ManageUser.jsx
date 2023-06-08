import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import ShowUsers from "../../../../Map/ShowUsers/ShowUsers";
import Swal from "sweetalert2";


const ManageUser = () => {
    const [axiosSecure] = useAxiosSecure()

    const { data: users = [], refetch } = useQuery({
        queryKey: ['users'],
        queryFn: async () => {
            const res = await axiosSecure.get('/users')
            return res.data
        }
    })

    const handleMakeAdmin = user => {
        console.log(user)
        axiosSecure.patch(`/users/admin/${user._id}`)
            .then(res => {
                console.log(res.data.modifiedCount)
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${user.name} is an admin now`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    const handleMakeInstructor = user => {
        axiosSecure.patch(`/users/instructor/${user._id}`)
            .then(res => {
                if (res.data.modifiedCount) {
                    refetch()
                    Swal.fire({
                        title: 'Success!',
                        text: `${user.name} is an instructor now`,
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    users.map(user => <ShowUsers
                        key={user._id}
                        user={user}
                        handleMakeAdmin={handleMakeAdmin}
                        handleMakeInstructor={handleMakeInstructor}
                    ></ShowUsers>)
                }
            </div>
        </div>
    );
};

export default ManageUser;