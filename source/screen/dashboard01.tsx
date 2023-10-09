
//import css
import '../style/global/global.css'
import '../style/component/DashboardStyle.css'
import '../style/component/Dashboard01Style.css'


import Sidebar from '../component/Sidebar'
import RightBar from '../component/RightBar'

export default function dashboard01() {

    return (
        <div className='cover-dashboard'>
            <Sidebar buttonIndex={0}></Sidebar>
            
            <div className="main-section">
                <div className="main-content">
                    <p className="main-header">Dashboard</p>
                </div>
            </div>
            <RightBar></RightBar>
        </div>
    )
}
