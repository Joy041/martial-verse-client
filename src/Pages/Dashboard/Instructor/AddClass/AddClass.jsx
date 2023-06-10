import { useContext } from "react";
import { useForm } from "react-hook-form";
import { AuthContext } from "../../../../Providers/AuthProvider/AuthProvider";
import useAxiosSecure from "../../../../hook/useAxiosSecure";
import Swal from "sweetalert2";

const image_token = import.meta.env.VITE_IMAGE_SECRET_TOKEN;
const AddClass = () => {
    const {user} = useContext(AuthContext)
    const { register, handleSubmit, reset } = useForm();
    const [axiosSecure] = useAxiosSecure()
    const img_url = `https://api.imgbb.com/1/upload?key=${image_token}`

    const onSubmit = data => {
        const { name, instructor, seats, price, email } = data
        console.log(name, instructor, seats, price, email, data)

        const formData = new FormData();
        formData.append('image', data.image[0])

        fetch(img_url, {
            method: 'POST',
            body: formData
        })
        .then(res => res.json())
        .then(imgRes => {
            console.log(imgRes)
            if(imgRes.success){
                const imgUrl = imgRes.data.display_url;
                const {name, instructor, seats, price, email} = data;
                const addItem = {name, price: parseFloat(price), instructor_name: instructor, seats: parseFloat(seats), email, image: imgUrl, status: 'pending'}
                axiosSecure.post('/services', addItem)
                .then(data => {
                    console.log('after posting new menu item', data.data)
                    if(data.data.insertedId){
                        reset()
                        Swal.fire({
                            title: 'Success!',
                            text: 'Class added successfully',
                            icon: 'success',
                            confirmButtonText: 'Cool'
                        })
                    }
                })
            }
        })

    }
  console.log(image_token)
    return (
        <div>
            <form className="max-w-screen-xl mx-auto bg-sky-50 p-14 my-16" onSubmit={handleSubmit(onSubmit)}>
                <div className="md:flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Class name</span>
                        </label>
                        <input type="text"  {...register("name", { required: true })} placeholder="Class Name" className="input input-bordered w-full mb-5 me-4 " />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Instructor name</span>
                        </label>
                        <input type="text"  {...register("instructor", { required: true })} value={user?.displayName} placeholder="Instructor Name" className="input input-bordered w-full mb-5 " />
                    </div>
                </div>
                <div className="md:flex gap-5">
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Available Seats</span>
                        </label>
                        <input type="number"  {...register("seats", { required: true })} placeholder="Available Seats" className="input input-bordered w-full mb-5" />
                    </div>
                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="text-xl">Price</span>
                        </label>
                        <input type="number" {...register("price", { required: true })} placeholder="Price" className="input input-bordered w-full " />
                    </div>
                </div>
                <div className="form-control w-full ">
                    <label className="label">
                        <span className="text-xl">email</span>
                    </label>
                    <input type="email" {...register("email", { required: true })} value={user?.email} placeholder="Email" className="input input-bordered w-full " />
                </div>
                <div className="form-control w-full my-4">
                    <label className="label">
                        <span className="text-xl">Class Image</span>
                    </label>
                    <input type="file" {...register("image", { required: true })} className="w-full max-w-xs" />
                </div>
                <input className="btn bg-[#D1A054] border-0 mt-2" type="submit" value={'Add Item'} />
            </form>
        </div>
    );
};

export default AddClass;