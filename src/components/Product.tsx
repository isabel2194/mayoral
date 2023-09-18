import Image from "next/image";
import Button from "@mui/material/Button";
import style from "./Product.module.css";


const Product = ({name, price, currency, offer_percentage, image, variants}) => {

  const calculateOfferedPrice = () => { 
    const priceNumber = parseFloat(price);
    const offerPercentageNumber = parseFloat(offer_percentage);
    const offeredPrice = priceNumber - (priceNumber * offerPercentageNumber / 100);
    return offeredPrice.toFixed(2);
  };

  const showPrice = (quantity) => quantity+currency;

  return (
    <div className={style.container}>
      <Image src={image} alt={name} height={358} width={256}/>
      <h2 className={style.name}>{name}</h2>
      <div className={style.product_price}>
        <span className={`${style.price} ${(offer_percentage > 0 && style.original_price)}`}>
          {showPrice(price)}
        </span>
        {offer_percentage && 
          <span className={`${style.price} ${style.offered_price}`}>
            {showPrice(calculateOfferedPrice())} (-{offer_percentage}%)
          </span>
        }
      </div>
      <div className={style.product_footer}>
        {variants.length > 0 && <p className={style.more_info}>más colores</p>}
        <Button variant="contained" className={style.add_button}>Añadir</Button>
      </div>
    </div>
  )
}

export default Product;
