import "./Featureinfo.css"
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

function Featureinfo() {
    return (
        <div className="featured">
            <div className="featuredItem">
                <span className="featuredTitle">Revenue</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$12,345</span>
                    <span className="featuredPercentage">-12% 
                        <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Sales</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$3,345</span>
                    <span className="featuredPercentage">-4% 
                        <ArrowDownwardIcon className="featuredIcon negative" />
                    </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
            <div className="featuredItem">
                <span className="featuredTitle">Costs</span>
                <div className="featuredMoneyContainer">
                    <span className="featuredMoney">$8</span>
                    <span className="featuredPercentage">10% 
                        <ArrowUpwardIcon className="featuredIcon " />
                    </span>
                </div>
                <span className="featuredSub">Compared to Last month</span>
            </div>
        </div>
    )
}

export default Featureinfo
