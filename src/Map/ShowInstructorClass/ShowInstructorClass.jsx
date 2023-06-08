import { useContext } from "react";
import { AuthContext } from "../../Providers/AuthProvider/AuthProvider";


const ShowInstructorClass = ({ service }) => {
    const { user } = useContext(AuthContext)

    return (
        <div>
            {
                service.instructor_name === user.displayName &&
                <>
                    <div className="card h-full bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10">
                            <img src={service.image} alt="Shoes"  className="rounded-xl h-64 w-full" />
                        </figure>
                        <div className="card-body items-center text-center">
                            <h2 className="text-2xl font-bold">{service.name}</h2>
                            <p><span className="text-xl font-semibold">Price : </span><span className="font-bold text-orange-400">${service.price}</span></p>
                        </div>
                    </div>
                </>
            }
        </div>
    );
};

export default ShowInstructorClass;