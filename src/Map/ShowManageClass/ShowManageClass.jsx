import Swal from "sweetalert2";
import useAxiosSecure from "../../hook/useAxiosSecure";


const ShowManageClass = ({ service, handleDeniedClasses, handleApprovedClasses }) => {
    const [axiosSecure] = useAxiosSecure()

    const { _id, image, name, instructor_name, seats, price, status, feedback } = service

    const handleFeedbackForm = event => {
        event.preventDefault()
        const form = event.target
        const feedback = form.feedback.value;
        console.log(feedback)

        axiosSecure.patch(`/services/feedback/${_id}`, { feedback })
            .then(res => {
                if (res.data.modifiedCount) {
                    form.reset()
                    Swal.fire({
                        title: 'Success!',
                        text: 'Feedback added successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
                }

            })

    }

    return (
        <div className="card  h-full bg-slate-800 shadow-xl">
            <figure><img src={image} className="h-56 w-full" alt="Shoes" /></figure>
            <div className="card-body items-center text-center text-white">
                <h2 className="text-3xl font-bold">{name}</h2>
                <p><span className="text-lg font-semibold">Instructor Name :</span> {instructor_name}</p>
                <p><span className="text-lg font-semibold">Available Seats :</span> {seats}</p>
                <p><span className="text-lg font-semibold">Price :</span> <span className="text-orange-600 font-bold">${price}</span></p>
                <p>{status}</p>
                <div className="card-actions">
                    {
                        status === 'approved' ? <button disabled className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8 ">Approved</button> : <button onClick={() => handleApprovedClasses(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8 ">Approved</button>
                    }
                    {
                        status === 'denied' ? <>
                            <button disabled className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Denied</button>
                            {
                                feedback ? '' : <div>
                                    <form onSubmit={handleFeedbackForm}>
                                        <input className="w-72" name="feedback" type="text" placeholder="Feedback" />
                                        <input type="submit" className="btn bg-rose-600 hover:bg-rose-400 w-24" />
                                    </form>
                                </div>
                            }
                        </> : <button onClick={() => handleDeniedClasses(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Denied</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowManageClass;