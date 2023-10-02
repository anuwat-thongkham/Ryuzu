

/* Import Styles */
import '../style/global/global.css'
import '../style/screen/HomeScreenStyle.css'


/* Import Components */
import Footer from '../component/Footer'
import HomeSuggestMenu from '../component/HomeSuggestMenu'
import HomeIconButton from '../component/HomeIconButton'
export default function Home() {
    return (
        <div className='homeScreenContainer'>
            <div className='heroText'>Pre-Order Imported<br />Product, Easy to Buys</div>
            <div className='subHeroText'>🔍 Let’s explore your best items</div>
            <HomeIconButton></HomeIconButton>
            <div className='card-header'>Explain</div>
            <HomeSuggestMenu></HomeSuggestMenu>
            <Footer></Footer>
        </div>
    )
}