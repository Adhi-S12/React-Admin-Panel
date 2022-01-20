import './User.css';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import EventNoteIcon from '@mui/icons-material/EventNote';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import HomeIcon from '@mui/icons-material/Home';
import PublishIcon from '@mui/icons-material/Publish';
import { Link } from 'react-router-dom';

const User = () => {
	return (
		<div className="user">
			<div className="userTitleContainer">
				<h1 className="userTitle">Edit User</h1>
				<Link to="/newUser">
					<button className="userAddButton">Create</button>
				</Link>
			</div>
			<div className="userContainer">
				<div className="userShow">
					<div className="userShowTop">
						<img
							src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
							alt=""
							className="userShowImg"
						/>
						<div className="userShowTopTitle">
							<span className="userShowUserName">Anna Becker</span>
							<span className="userShowUserTitle">Software Engineer</span>
						</div>
					</div>
					<div className="userShowBottom">
						<span className="userShowTitle">Account Details</span>
						<div className="userShowInfo">
							<PermIdentityIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck99</span>
						</div>
						<div className="userShowInfo">
							<EventNoteIcon className="userShowIcon" />
							<span className="userShowInfoTitle">10.12.1999</span>
						</div>
						<span className="userShowTitle">Contact Details</span>

						<div className="userShowInfo">
							<LocalPhoneIcon className="userShowIcon" />
							<span className="userShowInfoTitle">+1 123 45 678</span>
						</div>
						<div className="userShowInfo">
							<EmailIcon className="userShowIcon" />
							<span className="userShowInfoTitle">annabeck@gmail.com</span>
						</div>
						<div className="userShowInfo">
							<HomeIcon className="userShowIcon" />
							<span className="userShowInfoTitle">NewYork | USA</span>
						</div>
					</div>
				</div>
				<div className="userUpdate">
					<span className="userUpdateTitle">Edit</span>
					<form className="userUpdateForm">
						<div className="userUpdateLeft">
							<div className="userUpdateItem">
								<label>Username</label>
								<input type="text" placeholder="annabeck99" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Full name</label>
								<input type="text" placeholder="Anna Becker" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Email</label>
								<input type="text" placeholder="annabeck@gmail.com" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Phone</label>
								<input type="text" placeholder="+1 123 45 678" className="userUpdateInput" />
							</div>
							<div className="userUpdateItem">
								<label>Address</label>
								<input type="text" placeholder="NewYork | USA
" className="userUpdateInput" />
							</div>
						</div>
						<div className="userUpdateRight">
							<div className="userUpdateUpload">
								<img
									className="userUpdateImg"
									src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
									alt=""
								/>
								<label htmlFor="file">
									<PublishIcon className="userUpdateIcon" />
								</label>
								<input type="file" id="file" style={{ display: 'none' }} />
							</div>
							<button className="userUpdateButton">Update</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	);
};

export default User;
