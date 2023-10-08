import { useEffect, useState } from 'react';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import '../style/global/global.css';
import '../style/screen/HomeScreenStyle.css';
import Footer from '../component/Footer';
import HomeSuggestMenu from '../component/HomeSuggestMenu';
import HomeIconButton from '../component/HomeIconButton';
import ProductCard from '../component/ProductCard';
import Navbar from '../component/Navbar';

interface Product {
    id: string;
    isWish: boolean;
    name: string;
    price: number;
    discount: number;
    star: number;
    image: string;
}

interface UserData {
    user_name: string;
}

export default function Home() {
    const [thisToken, setThisToken] = useState<string>('');
    const [products, setProducts] = useState<Product[]>([]);
    const [userData, setUserData] = useState<UserData | null>(null);
    const [userName, setUserName] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            // Fetch the token and set it in state
            try {
                const token = await AsyncStorage.getItem('token');
                if (token) {
                    setThisToken(token);
                }
            } catch (error) {
                console.log('Error retrieving token:', error);
            }

            // Fetch user data using the token
            if (thisToken) {
                axios.get(`http://localhost:3000/api/user/${thisToken}`)
                    .then((response) => {
                        if (response.data.length > 0) {
                            const res = response.data[0].user_name;
                            setUserName(res);
                        } else {
                            // Handle the case where there is no user data in the response
                        }
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                    });
            }

            // Fetch products
            axios.get("http://localhost:3000/products")
                .then((response) => {
                    setProducts(response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
        };

        fetchData(); // Call the fetchData function

    }, [thisToken]); // Include thisToken in the dependency array

    const handleLogOut = ()=>{
        alert('666');
        // if(thisToken != ''){
        //     localStorage.setItem('token', '');
        //     alert('ออกจากระบบสำเร็จ');
        // }else{
        //     alert('ยังไม่ได้เข้าสู่ระบบ');
        // }
    }
    return (
        <div className='homeScreenContainer'>
            <Navbar userName={userName} onClick={handleLogOut}></Navbar>

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
