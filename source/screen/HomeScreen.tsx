
import { useEffect, useState } from 'react'
import axios from 'axios'

/* Import Styles */
import '../style/global/global.css'
import '../style/screen/HomeScreenStyle.css'


/* Import Components */
import Footer from '../component/Footer'
import HomeSuggestMenu from '../component/HomeSuggestMenu'
import HomeIconButton from '../component/HomeIconButton'
import ProductCard from '../component/ProductCard'
interface Product {
    id: string;
    isWish: boolean;
    name: string;
    price: number;
    discount: number;
    star: number;
    image: string; // ปรับเป็นชนิดข้อมูลที่ถูกต้องสำหรับรูปภาพ
}


export default function Home() {
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        // ทำการดึงข้อมูลสินค้าจาก API และเซ็ตใน state โดยใช้ Axios
        axios.get("http://localhost:3000/products").then((response) => {
            setProducts(response.data);
        });
    }, []);
    return (
        <div className='homeScreenContainer'>
            <div className='heroText'>Pre-Order Imported<br />Product, Easy to Buys</div>
            <div className='subHeroText'>🔍 Let’s explore your best items</div>
            <HomeIconButton></HomeIconButton>
            <div className='card-header'>Explain</div>
            <HomeSuggestMenu></HomeSuggestMenu>
            <div className="productContainer">
                {products.map((product) => (
                    <ProductCard
                        key={product.id}
                        isWish={product.isWish}
                        name={product.name}
                        image={`data:image/jpeg;base64, ${product.image}`}
                        price={product.price}
                        discount={product.discount}
                        star={product.star}
                    ></ProductCard>
                ))}
            </div>
            <Footer></Footer>
        </div>
    )
}