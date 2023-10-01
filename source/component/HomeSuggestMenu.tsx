import { Link } from "react-router-dom";


export default function HomeSuggestMenu(){
return(
    <div className='SuggestMenuContainer'>
        <div className='SuggestMenu'>
            <div className='SuggestMenuHook'>แนะนำ</div>
            <div className='SuggestMenuTitle'>วิธีการสมัครบัญชี</div>
            <div className='SuggestMenuContent'></div>
            <div className='SuggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='SuggestMenuButton material-symbols-rounded'>arrow_forward</Link>
        </div>
        <div className='SuggestMenu'>
            <div className='SuggestMenuHook'>แนะนำ</div>
            <div className='SuggestMenuTitle'>วิธีการสั่งซื้อสินค้า</div>
            <div className='SuggestMenuContent'>แนะนำวิธีการสั่งซื้อสินค้า การเลือกวิธีชำระเงิน การเลือกที่อยู่อยู่ในการจัดส่ง</div>
            <div className='SuggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='SuggestMenuButton material-symbols-rounded'>arrow_forward</Link>
        </div>
        <div className='SuggestMenu'>
            <div className='SuggestMenuHook'>แนะนำ</div>
            <div className='SuggestMenuTitle'>วิธีการคืนสินค้า</div>
            <div className='SuggestMenuContent'>แนะนำวิธีการคืนสินค้า นโยบายในการคืนสินค้า รวมทั้งการยกเลิกการสั่งสินค้า</div>
            <div className='SuggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='SuggestMenuButton material-symbols-rounded'>arrow_forward</Link>
        </div>
        <div className='SuggestMenu'>
            <div className='SuggestMenuHook'>แนะนำ</div>
            <div className='SuggestMenuTitle'>แนะนำทีมงาน</div>
            <div className='SuggestMenuContent'>แนะนำทีมงานที่สร้างโปรเจ็คนี้ขึ้นมา และที่มา จุดประสงค์ และประโยชน์</div>
            <div className='SuggestMenuDetail'>ดูรายละเอียด</div>
            <Link to='/' className='SuggestMenuButton material-symbols-rounded'>arrow_forward</Link>
        </div>
    </div>
)
}