import React from 'react';
import './Topbar.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import LanguageIcon from '@mui/icons-material/Language';
import SettingsIcon from '@mui/icons-material/Settings';

const Topbar = () => {
	return (
		<div className="topbar">
			<div className="topbarWrapper">
				<div className="topLeft">
					<span className="logo">React Admin</span>
				</div>
				<div className="topRight">
					<div className="topbarIconContainer">
						<NotificationsNoneIcon />
						<span className="topIconBadge">2</span>
					</div>
					<div className="topbarIconContainer">
						<LanguageIcon />
					</div>
					<div className="topbarIconContainer">
						<SettingsIcon />
					</div>
					<img
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?cs=srgb&dl=pexels-pixabay-220453.jpg&fm=jpg"
						alt=""
						className="topAvatar"
					/>
				</div>
			</div>
		</div>
	);
};

export default Topbar;
