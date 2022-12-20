import './featured.css'
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

export const FeaturedInfo = () => {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$46,785</span>
                    <span className="featuredRate">-11.4 <ArrowUpwardIcon className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$46,785</span>
                    <span className="featuredRate">-11.4 <ArrowUpwardIcon className="featuredIcon negative" /></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredContainer">
                    <span className="featuredMoney">$46,785</span>
                    <span className="featuredRate">+11.4 <ArrowDownwardIcon className="featuredIcon positive" /></span>
                </div>
                <span className="featuredSub">Compared to last Month</span>
            </div>
        </div>
    )
}
