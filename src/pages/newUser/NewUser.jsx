import './NewUser.css';

const NewUser = () => {
	return (
		<div className="newUser">
			<h1 className="newUserTitle">New User</h1>
			<form className="newUserForm">
				<div className="newUserFormItem">
					<label>Username</label>
					<input type="text" placeholder="John" />
				</div>
				<div className="newUserFormItem">
					<label>Full Name</label>
					<input type="text" placeholder="John Smith" />
				</div>
				<div className="newUserFormItem">
					<label>Email</label>
					<input type="email" placeholder="John@gmail.com" />
				</div>
				<div className="newUserFormItem">
					<label>Password</label>
					<input type="password" />
				</div>
				<div className="newUserFormItem">
					<label>Phone</label>
					<input type="text" placeholder="+1 235 568 24" />
				</div>
				<div className="newUserFormItem">
					<label>Address</label>
					<input type="text" placeholder="New York | USA" />
				</div>
				<div className="newUserFormItem">
					<label>Gender</label>
					<div className="newUserGender">
						<input type="radio" name="gender" id="male" value="male" />
						<label htmlFor="female">Male</label>
						<input type="radio" name="gender" id="female" value="female" />
						<label htmlFor="female">Female</label>
						<input type="radio" name="gender" id="others" value="others" />
						<label htmlFor="others">Others</label>
					</div>
				</div>
				<div className="newUserFormItem">
					<label>Active</label>
					<select name="active" id="active" className="newUserSelect">
						<option value="Yes">Yes</option>
						<option value="No">No</option>
					</select>
				</div>
				<button className="newUserButton">Create</button>
			</form>
		</div>
	);
};

export default NewUser;
