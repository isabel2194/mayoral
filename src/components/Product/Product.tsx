import Image from "next/image";
import Button from "@mui/material/Button";
import style from "./Product.module.css";
import { Product as ProductType } from "@types";
import EmptyImage from "../EmptyImage/EmptyImage";

const Product = ({ name, price, currency, offer_percentage, image, variants }: ProductType) => {

  const calculateOfferedPrice = (): number => {
    const offeredPrice = price - (price * offer_percentage / 100);
    return parseFloat(offeredPrice.toFixed(2));
  };

  const showPrice = (quantity: number): string => quantity + currency;

  return (
    <div className={style.container} data-testid="product">
      {image ?
        <Image src={image} alt={name} height={358} width={256} data-testid="product-image"/>:
        <EmptyImage />
      }
      <h2 className={style.product_name} data-testid="product-name">{name}</h2>
      <div className={style.product_price}>
        <span className={`${style.price} ${(offer_percentage > 0 && style.original_price)}`} data-testid="product-price">
          {showPrice(price)}
        </span>
        {offer_percentage &&
          <span className={`${style.price} ${style.offered_price}`} data-testid="product-offered-price">
            {showPrice(calculateOfferedPrice())} (-{offer_percentage}%)
          </span>
        }
      </div>
      <div className={style.product_footer}>
        {variants?.length > 0 && <p className={style.more_info} data-testid="product-variants">más colores</p>}
        <Button variant="contained" className={style.add_button} data-testid="product-add">Añadir</Button>
      </div>
    </div>
  )
}

export default Product;
