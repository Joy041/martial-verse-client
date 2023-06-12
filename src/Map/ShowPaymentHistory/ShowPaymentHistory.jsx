

const ShowPaymentHistory = ({ item, index }) => {

    const {transactionId, price, date, className} = item

    return (
        <tr>
            <th> {index + 1} </th>
            <td className="gap-2">
                {transactionId}
            </td>
            <td>
                {className}
            </td>
            <td>
                {date}
            </td>
            <td><span className='text-orange-500'>${price}</span></td>
        </tr>
    );
};

export default ShowPaymentHistory;