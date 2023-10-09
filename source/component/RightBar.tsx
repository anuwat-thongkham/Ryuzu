


//import css
import '../style/global/global.css'
import '../style/component/RightBarStyle.css'

export default function RightBar () {
    
    return (
        <div className="right_bar-section">
            <div className="right_bar-content">
                <div className="img"></div>
                <div className="right_bar-logo"></div>
                <p className="right_bar-header">จำนวนรายการการสั่งซื้อ</p>
                <p className="right_bar-number">0</p>
                <p className="right_bar-header">รายได้</p>
                <p className="right_bar-number">฿0</p>
            </div>
        </div>
    );
};
