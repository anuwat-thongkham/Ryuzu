

import { Link } from 'react-router-dom';
//import css
import '../style/global/global.css'
import '../style/component/SidebarStyle.css'


interface SidebarProps {
    buttonIndex: number;
}
const Sidebar: React.FC<SidebarProps> = ({ buttonIndex }) => {
    let button = ['', '', '', '', ''];
    button[buttonIndex] = 'sidebar-button-focus';
    return (
        <div className="sidebar">
            {/* <Link to={'/'} className='material-symbols-rounded material-symbols-rounded-not-fill'>arrow_back</Link> */}
            <div className="sidebar-button-section">
                <Link className={`sidebar-button-container ${button[0]}`} to="/dashboard-01">
                    <span className="material-symbols-rounded material-symbols-rounded-not-fill sidebar-button">space_dashboard</span>
                    <p>Dashboard</p>
                </Link>
                <Link className={`sidebar-button-container ${button[1]}`} to="/dashboard-02">
                    <span className="material-symbols-rounded material-symbols-rounded-not-fill sidebar-button">widgets</span>
                    <p>Product</p>
                </Link>
                <Link className={`sidebar-button-container ${button[2]}`} to="/dashboard-03">
                    <span className="material-symbols-rounded material-symbols-rounded-not-fill sidebar-button">format_list_bulleted</span>
                    <p>Order</p>
                </Link>
                <Link className={`sidebar-button-container ${button[3]}`} to="/dashboard-04">
                    <span className="material-symbols-rounded material-symbols-rounded-not-fill sidebar-button">bar_chart</span>
                    <p>Analytics</p>
                </Link>
                <Link className={`sidebar-button-container ${button[4]}`} to="/">
                    <span className="material-symbols-rounded material-symbols-rounded-not-fill sidebar-button">arrow_back</span>
                    <p>Exit</p>
                </Link>
            </div>
        </div>
    );
};

export default Sidebar;