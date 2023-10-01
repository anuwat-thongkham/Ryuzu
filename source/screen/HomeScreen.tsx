
import { Link } from 'react-router-dom'

/* Import Styles */
import '../style/global/global.css'
import '../style/screen/HomeScreenStyle.css'


/* Import Components */
import Footer from '../component/Footer'
export default function Home() {
    return (
        <div className="homeContainer">
            <div className="heroText">Pre-Order Imported<br />Product, Easy to Buys</div>
            <div className="subHeroText">🔍 Let’s explore your best items</div>
            <div className="iconButtonContainer">
                <Link to='/'>
                    <div className='iconButton-icon material-symbols-rounded'>sell</div>
                    <div className='iconButton-title'>Brochures</div>
                </Link>
                <Link to='/'>
                    <div className='iconButton-icon material-symbols-rounded'>celebration</div>
                    <div className='iconButton-title'>Hot Sale</div>
                </Link>
                <Link to='/'>
                    <div className='iconButton-icon material-symbols-rounded'>storefront</div>
                    <div className='iconButton-title'>Brands</div>
                </Link>
                <Link to='/'>
                    <div className='iconButton-icon material-symbols-rounded'>alarm</div>
                    <div className='iconButton-title'>New</div>
                </Link>
                <Link to=''>
                    <div className='iconButton-icon material-symbols-rounded'>apps</div>
                    <div className='iconButton-title'>Catalog</div>
                </Link>
            </div>
            <div className="card-header">Explain</div>
            <ul className="section-3">
                <li className='section-3-1'>
                    <p className="section-3-subheader">แนะนำ</p>
                    <p className='section-3-header'>วิธีการสร้างบัญชี</p>
                    <p className="section-3-explain">แนะนำวิธีการสร้างบัญชีเพื่อเริ่มต้นใช้งานครั้งแรกโดยง่าย</p>
                    <hr />
                    <p className="section-3-detial-title">ดูรายละเอียด</p>
                    <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
                </li>
                <li className='section-3-2'>

                    <p className="section-3-subheader">แนะนำ</p>
                    <p className='section-3-header'>วิธีการสั่งซื้อสินค้า</p>
                    <p className="section-3-explain">แนะนำวิธีการสั่งซื้อสินค้า การเลือกวิธีชำระเงิน การเลือกที่อยู่อยู่ในการจัดส่ง</p>
                    <hr />
                    <p className="section-3-detial-title">ดูรายละเอียด</p>
                    <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
                </li>
                <li className='section-3-3'>
                    <p className="section-3-subheader">แนะนำ</p>
                    <p className='section-3-header'>วิธีการคืนสินค้า</p>
                    <p className="section-3-explain">แนะนำวิธีการคืนสินค้า นโยบายในการคืนสินค้า รวมทั้งการยกเลิกการสั่งสินค้า</p>
                    <hr />
                    <p className="section-3-detial-title">ดูรายละเอียด</p>
                    <Link to='/' className='material-symbols-rounded'>arrow_forward</Link>
                </li>
                <li className='section-3-4'>

                    <p className="section-3-subheader">แนะนำ</p>
                    <p className='section-3-header'>แนะนำทีมงาน</p>
                    <p className="section-3-explain">แนะนำทีมงานที่สร้างโปรเจ็คนี้ขึ้นมา และที่มา จุดประสงค์ และประโยชน์</p>
                    <hr />
                    <p className="section-3-detial-title">ดูรายละเอียด</p>
                    <Link to='/About' className='material-symbols-rounded'>arrow_forward</Link>
                </li>
            </ul>
            <Footer></Footer>
        </div>
    )
}