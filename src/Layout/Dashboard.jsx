import { FaUsers } from "react-icons/fa";
import { HiHome } from "react-icons/hi";
import { MdClass } from "react-icons/md";
import { BiSelectMultiple } from "react-icons/bi";
import { AiFillPlusCircle } from "react-icons/ai";
import { GiTeacher } from "react-icons/gi";
import { NavLink, Outlet } from "react-router-dom";
import useAdmin from "../hook/useAdmin";
import useInstructor from "../hook/useInstructor";


const Dashboard = () => {
    const [isAdmin] = useAdmin()
    const [isInstructor] = useInstructor()

    return (
        <div className="drawer lg:drawer-open">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col "> 
                <Outlet></Outlet>

                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
                    <p className="text-4xl text-center font-bold mb-10 mt-4">MARTIAL<span className="text-lime-500">verse</span></p>
                    {
                        isAdmin &&
                        <>
                            <li><NavLink to={'/dashboard/manageclass'} className="text-slate-500 text-lg font-semibold uppercase"><MdClass></MdClass>Manage Classes</NavLink></li>
                            <li><NavLink to={'/dashboard/users'} className="text-slate-500 text-lg font-semibold uppercase"><FaUsers></FaUsers>Manage User</NavLink></li>
                        </>
                        ||

                        isInstructor &&
                        <>
                            <li><NavLink to={'/'} className="text-slate-500 text-lg font-semibold uppercase"><AiFillPlusCircle></AiFillPlusCircle>Add a class</NavLink></li>
                            <li><NavLink to={'/dashboard/myclass'} className="text-slate-500 text-lg font-semibold uppercase"><GiTeacher></GiTeacher>My class</NavLink></li>
                        </>
                        ||

                        <>
                            <li><NavLink to={'/dashboard/selectclass'} className="text-slate-500 text-lg font-semibold uppercase"><BiSelectMultiple></BiSelectMultiple>My selected classes</NavLink></li>
                            <li><NavLink to={'/dashboard/enrolled'} className="text-slate-500 text-lg font-semibold uppercase"><MdClass></MdClass>My enrolled classes</NavLink></li>
                        </>
                    }

                    <div className="divider"></div>

                    <li><NavLink to={'/'} className="text-lg font-semibold text-slate-500"><HiHome></HiHome>HOME</NavLink></li>

                </ul>

            </div>
        </div>
    );
};

export default Dashboard;