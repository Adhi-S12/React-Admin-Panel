import './WidgetSm.css';

import React from 'react';
import VisibilityIcon from '@mui/icons-material/Visibility';

const WidgetSm = () => {
	return (
		<div className="widgetSm">
			<span className="widgetSmTitle">New Join Members</span>
			<ul className="widgetSmList">
				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUserName">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" /> Display
					</button>
				</li>

				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" /> Display
					</button>
				</li>

				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" /> Display
					</button>
				</li>

				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" /> Display
					</button>
				</li>

				<li className="widgetSmListItem">
					<img
						src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?cs=srgb&dl=pexels-andrea-piacquadio-774909.jpg&fm=jpg"
						alt=""
						className="widgetSmImg"
					/>
					<div className="widgetSmUser">
						<span className="widgetSmUsername">Anna Keller</span>
						<span className="widgetSmUserTitle">Software Engineer</span>
					</div>
					<button className="widgetSmButton">
						<VisibilityIcon className="widgetSmIcon" /> Display
					</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;
