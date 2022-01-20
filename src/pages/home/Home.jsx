import './Home.css';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import Chart from '../../components/chart/Chart';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import WidgetLg from '../../components/widgetLg/WidgetLg';

//Chart Data
import { userData } from '../../dummyData';

const Home = () => {
	return (
		<div className="home">
			<FeaturedInfo />
			<Chart data={userData} title="User Analytics" grid={true} dataKey="Active User" />
			<div className="homeWidgets">
				<WidgetSm />
				<WidgetLg />
			</div>
		</div>
	);
};

export default Home;
