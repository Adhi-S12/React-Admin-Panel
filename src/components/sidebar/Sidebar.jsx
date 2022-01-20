import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
import LineStyleIcon from '@mui/icons-material/LineStyle';
import TimelineIcon from '@mui/icons-material/Timeline';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PersonIcon from '@mui/icons-material/Person';
import StoreIcon from '@mui/icons-material/Store';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import MailIcon from '@mui/icons-material/Mail';
import RateReviewIcon from '@mui/icons-material/RateReview';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import WorkIcon from '@mui/icons-material/Work';
import ErrorIcon from '@mui/icons-material/Error';

const Sidebar = () => {
	return (
		<div className="sidebar">
			<div className="sidebarWrapper">
				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Dashboard</h3>
					<ul className="sidebarList">
						<Link to="/" className="link">
							<li className="sidebarListItem active">
								<LineStyleIcon className="sidebarIcon" /> Home
							</li>
						</Link>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon" /> Analytics
						</li>
						<li className="sidebarListItem">
							<TrendingUpIcon className="sidebarIcon" /> Sales
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Quick Menu</h3>
					<ul className="sidebarList">
						<Link to="/users" className="link">
							<li className="sidebarListItem ">
								<PersonIcon className="sidebarIcon" /> Users
							</li>
						</Link>
						<Link to="/products" className="link">
							<li className="sidebarListItem">
								<StoreIcon className="sidebarIcon" /> Products
							</li>
						</Link>
						<li className="sidebarListItem">
							<AttachMoneyIcon className="sidebarIcon" /> Transactions
						</li>
						<li className="sidebarListItem">
							<EqualizerIcon className="sidebarIcon" /> Reports
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Notifications</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<MailIcon className="sidebarIcon" /> Mail
						</li>
						<li className="sidebarListItem">
							<RateReviewIcon className="sidebarIcon" /> Feedback
						</li>
						<li className="sidebarListItem">
							<ChatBubbleIcon className="sidebarIcon" /> Messages
						</li>
					</ul>
				</div>

				<div className="sidebarMenu">
					<h3 className="sidebarTitle">Staff</h3>
					<ul className="sidebarList">
						<li className="sidebarListItem ">
							<WorkIcon className="sidebarIcon" /> Manage
						</li>
						<li className="sidebarListItem">
							<TimelineIcon className="sidebarIcon" /> Analytics
						</li>
						<li className="sidebarListItem">
							<ErrorIcon className="sidebarIcon" /> Reports
						</li>
					</ul>
				</div>
			</div>
		</div>
	);
};

export default Sidebar;
