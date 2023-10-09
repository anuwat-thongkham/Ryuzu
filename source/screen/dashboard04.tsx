
//import css
import '../style/global/global.css'
import '../style/component/DashboardStyle.css'

import Sidebar from '../component/Sidebar';
import MainSection from '../component/MainSection';
import RightBar from '../component/RightBar';

export default function dashboard04() {

    return (
        <div className='cover-dashboard'>
            <Sidebar buttonIndex={3}></Sidebar>
            <MainSection></MainSection>
            <RightBar></RightBar>
        </div>
    )
}
