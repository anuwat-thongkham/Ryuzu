import { useEffect, useState } from "react";

import '../style/component/ProductCardStyle.css'

// import testImage from '../asset/image/vector.png'

interface productCardProps {
    isWish: boolean;
    name: string;
    image:string;
    price: number;
    discount: number;
    star: number;
}
const ProductCard: React.FC<productCardProps> = ({ isWish, name, image, price, star }) => {
    const [isLike, setIsLike] = useState<boolean>(isWish);

    const handleClick= ()=>{
        if(isLike === false){
            setIsLike(true);
        }else{
            setIsLike(false);
        }
    }
    return (
        <div className="productCardContainer">
            <div className="wishButton">
                <span onClick={handleClick} className={`wishButtonIcon material-symbols-rounded ${isLike ? 'material-symbols-rounded-fill likeFill' : 'material-symbols-rounded-not-fill'}`}>favorite</span>
            </div>
            <img src={image} alt="ProductImage" className="productImage" />
            <div className="productCardName">{name}</div>
            <div className="productCardStarContainer">
                <span className="productCardStarSymbol material-symbols-rounded material-symbols-rounded-fill">star_rate</span>
                <div className="productCardStar">{star}</div>
            </div>
            <div className="productCardPrice">{price}</div>
        </div>
    );
};

export default ProductCard;