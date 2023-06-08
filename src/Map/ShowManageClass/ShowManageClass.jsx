

const ShowManageClass = ({service, handleDeniedClasses, handleApprovedClasses}) => {

    const {image, name, instructor_name, seats, price, status} = service

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
                        status === 'denied' ? <button disabled className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Denied</button> : <button onClick={() => handleDeniedClasses(service)} className="btn bg-rose-600 hover:bg-rose-400 mt-3 border-0 text-white font-bold px-8">Denied</button>
                    }
                </div>
            </div>
        </div>
    );
};

export default ShowManageClass;