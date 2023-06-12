import { useContext } from 'react';
import { RiDeleteBin6Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProvider/AuthProvider';


const ShowSelectClass = ({ item, index, handleDelete }) => {

    const { _id, image, name, instructor_name, price, classId, seats, booking} = item

    const {setPricePay, setPayName, setPayId, setPayClassId, setPaySeat, setPayBooking} = useContext(AuthContext)

    const handleSendData = () => {
        setPricePay(price)
        setPayName(name)
        setPayId(_id)
        setPayClassId(classId)
        setPaySeat(seats)
        setPayBooking(booking)
    }

    return (
        <>
            <tr>
                <th> {index + 1} </th>
                <td>
                    <div className="flex items-center space-x-3">
                        <div className="avatar">
                            <div className="mask mask-squircle w-12 h-12">
                                <img src={image} alt="Avatar Tailwind CSS Component" />
                            </div>
                        </div>
                    </div>
                </td>
                <td>
                    {name}
                </td>
                <td>
                    {instructor_name}
                </td>
                <td><span className='text-orange-500'>${price}</span></td>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn btn-error text-white text-lg"><RiDeleteBin6Fill></RiDeleteBin6Fill></button>
                </th>
                <th>
                    <Link onClick={handleSendData} to={'/dashboard/payment'}><button className="btn bg-[#D1A054] border-0 btn-sm">Pay</button></Link>
                </th>
            </tr>
        </>
    );
};

export default ShowSelectClass;