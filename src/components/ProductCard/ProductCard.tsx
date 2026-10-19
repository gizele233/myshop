import { FiShoppingCart } from "react-icons/fi";
import { AiFillStar , AiOutlineStar } from "react-icons/ai";
import * as S from "./styles";
import type { Product } from "../../data/products";
import { useDispatch, useSelector } from "react-redux";
import type { RootReducer } from "../../redux/root-redux";
import { addProcuct, removeProduct } from "../../redux/Cart/cart-slice";

interface ProductCardProps {
  product: Product;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)
  const dispatch = useDispatch();

  const isProductOnCart = cart.find(productOnCart => product.id === productOnCart.id) !== undefined;

  function handleAddProductToCart(){
    dispatch(addProcuct(product));
  }

  function handleRemoveProductFromCart(){
    dispatch(removeProduct(product));
  }

  return (
    <S.Card>
      <S.ProductImage src={product.image} alt={product.title} />
      <S.ProductTitle>{product.title}</S.ProductTitle>
      <S.ReviewPriceContainer>
        <S.Review>
            { Array.from({ length: 5 }).map((_, index) => index < Math.round(product.rating.rate) ? <AiFillStar color="gold" /> : <AiOutlineStar color="gold" />) }
           ({` ${product.rating.rate}`})
        </S.Review>
        <S.Price>${product.price.toFixed(2)}</S.Price>
      </S.ReviewPriceContainer>
      <S.AddToCartButtonWrapper>
        { isProductOnCart ?(  
          <S.RemoveFromCartButton onClick={handleRemoveProductFromCart}>
          Remover do carrinho
          <FiShoppingCart />
          </S.RemoveFromCartButton>
        ) : (
          <S.AddToCartButton onClick={handleAddProductToCart}>
          Adicionar ao carrinho
          <FiShoppingCart />
          </S.AddToCartButton>
        )}
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};