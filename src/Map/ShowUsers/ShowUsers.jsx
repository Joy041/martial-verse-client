import { Fade } from "react-awesome-reveal";



const ShowUsers = ({ user, handleMakeAdmin, handleMakeInstructor }) => {

    const { name, image, email, role } = user

    return (
        <Fade delay={1e3} cascade damping={1e-1}>
            <div className="card h-full bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image} alt="Shoes" className="rounded-xl h-56 w-72 " />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{email}</p>
                    <p>{role === 'admin' && 'admin' || role === 'instructor' && 'instructor' || 'student' }</p>
                    <div className="card-actions">
                        {
                            role === 'admin' ? <button disabled className="btn btn-outline block border-rose-600 text-rose-600">Admin</button> : <button onClick={() => handleMakeAdmin(user)} className="btn btn-outline block border-rose-600 text-rose-600">Admin</button>
                        }
                        {
                            role === 'instructor' ? <button className="btn btn-outline block border-rose-600 text-rose-600" disabled>Instructor</button> : <button onClick={() => handleMakeInstructor(user)} className="btn btn-outline block border-rose-600 text-rose-600">Instructor</button>
                        }
                    </div>
                </div>
            </div>
        </Fade>
    );
};

export default ShowUsers;