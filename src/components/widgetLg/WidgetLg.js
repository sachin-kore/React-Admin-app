import './widgetlg.css'

export const WidgetLg = () => {

    const Button = ({ type }) => {
        return <button className={'widgetlgButton ' + type}>{type}</button>
    }
    return (
        <div className='widgetlg'>
            <h3 className='widgetlgTitle'>Latest Transaction</h3>
            <table className='widgetlgTable'>
                <tr className='widgetlgTr'>
                    <th className='widgetlgTh'>Customer</th>
                    <th className='widgetlgTh'>Date</th>
                    <th className='widgetlgTh'>Amount</th>
                    <th className='widgetlgTh'>Status</th>
                </tr>
                <tr className='widgetlgTr'>
                    <td className='widgetlgUser'>
                        <img className='widgetlgImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' alt='' />
                        <span className='widgetlgName'>Susan Carol</span>
                    </td>
                    <td className='widgetlgDate'>2 Jun 2021</td>
                    <td className='widgetlgAmount'>$122.00</td>
                    <td className='widgetlgStatus'>
                        <Button type='Approved'></Button>
                    </td>
                </tr>
                <tr className='widgetlgTr'>
                    <td className='widgetlgUser'>
                        <img className='widgetlgImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' alt='' />
                        <span className='widgetlgName'>Susan Carol</span>
                    </td>
                    <td className='widgetlgDate'>2 Jun 2021</td>
                    <td className='widgetlgAmount'>$122.00</td>
                    <td className='widgetlgStatus'>
                        <Button type='Declined'></Button>
                    </td>
                </tr>
                <tr className='widgetlgTr'>
                    <td className='widgetlgUser'>
                        <img className='widgetlgImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' alt='' />
                        <span className='widgetlgName'>Susan Carol</span>
                    </td>
                    <td className='widgetlgDate'>2 Jun 2021</td>
                    <td className='widgetlgAmount'>$122.00</td>
                    <td className='widgetlgStatus'>
                        <Button type='Pending'></Button>
                    </td>
                </tr>
                <tr className='widgetlgTr'>
                    <td className='widgetlgUser'>
                        <img className='widgetlgImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' alt='' />
                        <span className='widgetlgName'>Susan Carol</span>
                    </td>
                    <td className='widgetlgDate'>2 Jun 2021</td>
                    <td className='widgetlgAmount'>$122.00</td>
                    <td className='widgetlgStatus'>
                        <Button type='Approved'></Button>
                    </td>
                </tr>
            </table>
        </div>
    )
}
