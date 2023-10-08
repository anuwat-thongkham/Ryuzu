import { useState } from "react";


interface productCardProps {
    id: string;
    isWish: boolean;
    name: string;
    price: number;
    discount: number;
    star: number;
}
const ProductCard: React.FC<productCardProps> = ({ id, isWish, name, price, star }) => {
    const [productName, setProductName] = useState<string>('iPhone 13 ความจุ 128GB รุ่น (PRODUCT)iPhone 13 ความจุ 128GB รุ่น');
    const [productPrice, setProductPrice] = useState<string>('฿999,999');
    const [productStar, setProductStar] = useState<string>('5.0');
    return (
        <div className="productCardContainer">
            <img src="" alt="ProductImage" className="productImage" />
            <div className="productCardName">{productName}</div>
            <div className="productCardStarContainer">
                <span className="productCardStarSymbol material-symbols-rounded material-symbols-rounded-fill "></span>
                <div className="productCardStar">{productStar}</div>
            </div>
            <div className="productCardPrice">{productPrice}</div>
        </div>
    );
};

export default ProductCard;