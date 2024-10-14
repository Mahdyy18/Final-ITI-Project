import "./Homepage.css"
import Featuredinfo from "../../Featuredinfo/Featureinfo"
import Chart from "../../Chart/Chart"
import { userData } from "../../../dummyData"
import WidgetSm from "../../widgetSm/WidgetSm"
import WidgetLg from "../../widgetLg/WidgetLg"
function Homepage() {
    return (
        <div className="Home">
                <Featuredinfo/>
                <Chart data={userData} title="User Analytics" grid dataKey="Active User"/>
                <div className="homeWidgets">
                    <WidgetSm/>
                    <WidgetLg/>
                </div>
            </div>
    )
}

export default Homepage
