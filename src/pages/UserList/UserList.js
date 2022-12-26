import './userList.css'
import { DataGrid } from '@mui/x-data-grid';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';


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

const rows = [
    {
        id: 1,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 2,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 3,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 4,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 5,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 6,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 7,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 8,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 9,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    },
    {
        id: 10,
        username: "John snow",
        avatar: "https://vinusimages.co/wp-content/uploads/2018/10/EG7A2390.jpgA_.jpg",
        email: "john@gmail.com",
        status: "active",
        transaction: "$120.00"
    }

]

export const UserList = () => {
    return (
        <div style={{ height: '100%', width: '100%' }} className='userList '>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={8}
                disableSelectionOnClick
                checkboxSelection
            />
        </div>
    )
}
