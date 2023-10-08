import { Link } from "react-router-dom";

/* Import Styles */
import '../style/global/global.css'
import '../style/component/HomeSuggestMenu.css'

export default function HomeSuggestMenu(){
return(
    <div className='suggestMenuContainer'>
        <div className='suggestMenu suggestMenu-1'>
            <div className='suggestMenuHook'>แนะนำ</div>
            <div className='suggestMenuTitle'>วิธีการสมัครบัญชี</div>
            <div className='suggestMenuContent'>แนะนำวิธีการสร้างบัญชีเพื่อเริ่มต้นใช้งานครั้งแรกโดยง่าย</div>
            <div className='suggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='suggestMenuButton suggestMenuButton-1 material-symbols-rounded material-symbols-rounded-not-fill '>arrow_forward</Link>
        </div>
        <div className='suggestMenu suggestMenu-2'>
            <div className='suggestMenuHook'>แนะนำ</div>
            <div className='suggestMenuTitle'>วิธีการสั่งซื้อสินค้า</div>
            <div className='suggestMenuContent'>แนะนำวิธีการสั่งซื้อสินค้า การเลือกวิธีชำระเงิน การเลือกที่อยู่อยู่ในการจัดส่ง</div>
            <div className='suggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='suggestMenuButton suggestMenuButton-2 material-symbols-rounded material-symbols-rounded-not-fill '>arrow_forward</Link>
        </div>
        <div className='suggestMenu suggestMenu-3'>
            <div className='suggestMenuHook'>แนะนำ</div>
            <div className='suggestMenuTitle'>วิธีการคืนสินค้า</div>
            <div className='suggestMenuContent'>แนะนำวิธีการคืนสินค้า นโยบายในการคืนสินค้า รวมทั้งการยกเลิกการสั่งสินค้า</div>
            <div className='suggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='suggestMenuButton suggestMenuButton-3 material-symbols-rounded material-symbols-rounded-not-fill '>arrow_forward</Link>
        </div>
        <div className='suggestMenu suggestMenu-4'>
            <div className='suggestMenuHook'>แนะนำ</div>
            <div className='suggestMenuTitle'>แนะนำทีมงาน</div>
            <div className='suggestMenuContent'>แนะนำทีมงานที่สร้างโปรเจ็คนี้ขึ้นมา และที่มา จุดประสงค์ และประโยชน์</div>
            <div className='suggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/aboutus' className='suggestMenuButton suggestMenuButton-4 material-symbols-rounded material-symbols-rounded-not-fill '>arrow_forward</Link>
        </div>
    </div>
)
}