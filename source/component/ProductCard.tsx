

interface productCardProps{
    id:string;
    isWish:boolean;
    name:string;
    price:number;
    star:number;
}
const ProductCard: React.FC<productCardProps> = ({ productList }) =>{
    return(
        <div className="productCardContainer">
            <img src="" alt="ProductImage" className="productImage" />
        </div>
    );
};

export default ProductCard;