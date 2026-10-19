import { FiLogIn, FiLogOut, FiShoppingCart } from "react-icons/fi";
import { useState } from "react";
import { Cart } from "../Cart/Cart";
import * as S from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "../../redux/User/user-slice";
import type { RootReducer } from "../../redux/root-redux";

export const Header: React.FC = () => {
  const { user } = useSelector((rootReducer: RootReducer) => rootReducer.userReducer);
  const { cart } = useSelector((rootReducer: RootReducer) => rootReducer.cartReducer)

  const dispatch = useDispatch();
  const [showCart, setShowCart] = useState(false);
  const isLogged = user !== null;

  function handleUserAuth(){
    if(user === null){
      dispatch(login({
        name: "Gizele Rodrigues",
        email: "gizele233@gmail.com"
      }))
    } else {
      dispatch(logout({}));
    }
  }

  return (
    <S.StyledHeader>
      <S.Wrapper>
          <S.HeaderTitle>My shop.</S.HeaderTitle>
            <S.ButtonWrapper>
              <S.AuthButton isLogged={isLogged} onClick={handleUserAuth}>
                {isLogged? "Logout": "Login"}
                {isLogged? <FiLogOut /> : <FiLogIn />}
              </S.AuthButton>
              <S.CartButton onClick={() => setShowCart(!showCart)}>
                Carrinho
                <FiShoppingCart/>
              </S.CartButton>
          </S.ButtonWrapper>
      </S.Wrapper>
      <Cart showCart={showCart} cart={cart}/>
    </S.StyledHeader>
  );
}