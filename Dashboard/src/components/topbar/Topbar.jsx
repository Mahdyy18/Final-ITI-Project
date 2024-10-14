import React from 'react';
import './Topbar.css';
import logo from '../../Assets/footer-logo.png';
import NotificationsNoneIcon from '@material-ui/icons/NotificationsNone';
import SettingsIcon from '@material-ui/icons/Settings';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';

function Topbar() {
    return (
        <div className='topbar'>
            <div className='topbarWrapper'>
                <div className="topleft">
                    <a href="https://fluffy-meringue-cebb83.netlify.app/">
                        <img className="header-logo" src={logo} alt="logo" />  
                    </a>
                </div>
                <div className="topright">
                    <div className="topbar-icons">
                        <NotificationsNoneIcon/>
                        <span className="topbar-icon-badge">3</span>
                    </div>
                    <div className="topbar-icons">
                        <SettingsIcon/>
                        <span className="topbar-icon-badge">1</span>
                    </div>
                    <div className="topbar-icons">
                        <ExitToAppIcon/>
                    </div>
                    <img className='TopAvatar' src="https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg?t=st=1728143942~exp=1728147542~hmac=66c87625b7f2ec47098ddcbc0e231f4fd19cc342b88b62cc25b2d3e8a1bd201d&w=740" alt="topavatar" />
                </div>
            </div>        
        </div>
    );
}

export default Topbar;
