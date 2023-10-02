import { Link } from "react-router-dom";

/* Import Styles */
import '../style/global/global.css'
import '../style/component/HomeIconButtonStyle.css'

export default function HomeIconButton() {
    return (
        <div className='iconButtonContainer'>
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
    )
}