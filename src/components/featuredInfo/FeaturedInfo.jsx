import './FeaturedInfo.css';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';

const FeaturedInfo = () => {
	return (
		<div className="featured">
			<div className="featured-item">
				<span className="featured-title">Revenue</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,145</span>
					<span className="featuredMoneyRate">
						-11.4 <ArrowDownwardIcon className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Sales</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$4,445</span>
					<span className="featuredMoneyRate">
						-1.4 <ArrowDownwardIcon className="featuredIcon negative" />
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>

			<div className="featured-item">
				<span className="featured-title">Cost</span>
				<div className="featuredMoneyContainer">
					<span className="featuredMoney">$2,245</span>
					<span className="featuredMoneyRate">
						+2.4 <ArrowUpwardIcon className="featuredIcon " />
					</span>
				</div>
				<span className="featuredSub">Compared to last month</span>
			</div>
		</div>
	);
};

export default FeaturedInfo;
