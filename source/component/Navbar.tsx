
import '../style/component/NavbarStyle.css'

interface NavbarProps {
    userName: string;
    onClick: () => void;
}

const Navabar: React.FC<NavbarProps> = ({ userName, onClick }) => {


    return (
        <div className="navbarContainer">
            <div className="navbarWrapper">
                <div className="navbarLogo"></div>
                <button className="material-symbols-rounded material-symbols-rounded-not-fill navbarSearch" title='ค้นหา'>search</button>
                <button className='navbarUser'  onClick={onClick}>{userName}</button>
            </div>
        </div>
    );
}

export default Navabar;