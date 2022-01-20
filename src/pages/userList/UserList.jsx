import './UserList.css';
import { Fragment, useState } from 'react';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import { userRows } from '../../dummyData';
import { DataGrid } from '@mui/x-data-grid';
import { Link } from 'react-router-dom';

const UserList = () => {
	const [ data, setData ] = useState(userRows);

	const handleDelete = (id) => {
		setData(
			data.filter((item) => {
				return item.id !== id;
			})
		);
	};

	const columns = [
		{ field: 'id', headerName: 'ID', width: 90 },
		{
			field: 'user',
			headerName: 'Username',
			width: 200,
			renderCell: (params) => {
				return (
					<div className="userListUser">
						<img className="userListImg" src={params.row.avatar} alt="" /> {params.row.username}
					</div>
				);
			},
		},
		{ field: 'email', headerName: 'Email', width: 200 },
		{
			field: 'status',
			headerName: 'Status',
			width: 120,
		},
		{
			field: 'transaction',
			headerName: 'Transaction Volume',
			width: 160,
		},
		{
			field: 'action',
			headerName: 'Action',
			width: 150,
			renderCell: (params) => {
				return (
					<Fragment>
						<Link to={'/users/' + params.row.id}>
							<button className="userListEdit">Edit</button>
						</Link>
						<DeleteOutlineIcon className="userListDelete" onClick={() => handleDelete(params.row.id)} />
					</Fragment>
				);
			},
		},
	];

	return (
		<div className="userList">
			<DataGrid
				rows={data}
				columns={columns}
				pageSize={8}
				rowsPerPageOptions={[ 5 ]}
				checkboxSelection
				disableSelectionOnClick
			/>
		</div>
	);
};

export default UserList;
