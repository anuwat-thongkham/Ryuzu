import { Link } from "react-router-dom";

/* Import Styles */
import '../style/global/global.css'
import '../style/component/footerStyle.css'
export default function Footer() {

    return (
        <div className="footerContainer">
            <div className="footerWrapper">
                <Link to='/' className="footer-logo"></Link>
                <div className="linkContainer">
                    <Link to='/'>เข้าสู่ระบบ</Link><Link to='/'>สร้างบัญชี</Link><Link to='/'>เกี่ยวกับเรา</Link>
                </div>
                <div className="copyright-container">©2023 Ryuzu Inc.</div>
            </div>
        </div>
    )
}