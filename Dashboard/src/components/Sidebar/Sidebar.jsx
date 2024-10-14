import "./Sidebar.css";
import HomeWorkIcon from '@material-ui/icons/HomeWork';
import AssessmentIcon from '@material-ui/icons/Assessment';
import AttachMoneyIcon from '@material-ui/icons/AttachMoney';
import PersonIcon from '@material-ui/icons/Person';
import FeaturedPlayListIcon from '@material-ui/icons/FeaturedPlayList';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
import MultilineChartIcon from '@material-ui/icons/MultilineChart';
import MailIcon from '@material-ui/icons/Mail';
import DynamicFeedIcon from '@material-ui/icons/DynamicFeed';
import MessageIcon from '@material-ui/icons/Message';
import WorkIcon from '@material-ui/icons/Work';
import ReportIcon from '@material-ui/icons/Report';
import { Link } from "react-router-dom";

function Sidebar() {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Dashboard</h3>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <HomeWorkIcon className="sidebarIcon"/>
                            Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AssessmentIcon className="sidebarIcon"/>
                            Analytics
                        </li>
                        <li className="sidebarListItem">
                            <AttachMoneyIcon className="sidebarIcon"/>
                            Sales
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Quick Menu</h3>
                    <ul className="sidebarList">
                    <Link to="/users" className="link">
                        <li className="sidebarListItem ">
                            <PersonIcon className="sidebarIcon"/>
                            Users
                        </li>
                        </Link>
                        <Link to="/products" className="link">
                        <li className="sidebarListItem">
                            <FeaturedPlayListIcon className="sidebarIcon"/>
                            Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <MonetizationOnIcon className="sidebarIcon"/>
                            Transactions
                        </li>
                        <li className="sidebarListItem">
                            <MultilineChartIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Notifications</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <MailIcon className="sidebarIcon"/>
                            Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeedIcon className="sidebarIcon"/>
                            Feedback
                        </li>
                        <li className="sidebarListItem">
                            <MessageIcon className="sidebarIcon"/>
                            Messages
                        </li>
                    </ul>
                </div>
                <div className="sidebarMenu">
                    <h3 className="sidebarTitle">Staff</h3>
                    <ul className="sidebarList">
                        <li className="sidebarListItem ">
                            <WorkIcon className="sidebarIcon"/>
                            Manage
                        </li>
                        <li className="sidebarListItem">
                            <ReportIcon className="sidebarIcon"/>
                            Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;
