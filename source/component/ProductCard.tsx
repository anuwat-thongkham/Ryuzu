import { useState } from "react";

import '../style/component/ProductCardStyle.css'

import testImage from '../asset/image/vector.png'

interface productCardProps {
    id: string;
    isWish: boolean;
    name: string;
    price: number;
    discount: number;
    star: number;
}
const ProductCard: React.FC<productCardProps> = ({ id, isWish, name, price, star }) => {
    const [productName, setProductName] = useState<string>('iPhone 13 ความจุ 128GB รุ่น (PRODUCT)iPhone 13 ความจุ 128GB รุ่น iPhone 13 ความจุ 128GB รุ่น (PRODUCT)iPhone 13 ความจุ 128GB รุ่น');
    const [productPrice, setProductPrice] = useState<string>('฿999,999');
    const [productStar, setProductStar] = useState<string>('5.0');
    return (
        <div className="productCardContainer">
            <div className="wishButton">
                <span className="material-symbols-rounded material-symbols-rounded-fill">heart</span>
            </div>
            <img src={testImage} alt="ProductImage" className="productImage" />
            <div className="productCardName">{productName}</div>
            <div className="productCardStarContainer">
                <span className="productCardStarSymbol material-symbols-rounded material-symbols-rounded-fill">star_rate</span>
                <div className="productCardStar">{productStar}</div>
            </div>
            <div className="productCardPrice">{productPrice}</div>
        </div>
    );
};

export default ProductCard;