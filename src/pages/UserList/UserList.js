import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { Userrows } from '../../dummyData';


const columns = [
    { field: 'id', headerName: 'ID', width: 120 },
    {
        field: 'user', headerName: 'User', width: 150, renderCell: (params) => {
            return (
                <div className='userListUser'>
                    <img className='userListUserImg' src='https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg' alt='' />
                    <span>John snow</span>
                    {/* <img src={params.rows.avatar} alt='' />
                    {params.rows.username} */}
                </div>
            )
        }
    },
    { field: 'email', headerName: 'Email', with: 150 },
    { field: 'status', headerName: 'Status', with: 150 },
    { field: 'transaction', headerName: 'Transaction', with: 200 },
    {
        field: "action", headerName: "Action", with: 200, renderCell: (params) => {
            return (
                <>
                    <button className='userListEditbtn'>Edit</button>
                    <DeleteOutlineIcon className='userListDeleteIcon' />
                </>
            )
        }
    }
]

export const UserList = () => {
    return (
        <div style={{ height: '100%', width: '100%' }} className='userList '>
            <DataGrid
                rows={Userrows}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    )
}
