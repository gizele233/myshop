import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2); //obtendo os 2 primeiros produtos do array

const mockDispatch = jest.fn();
jest.mock("react-redux", () => {
    return {
        useDispatch: () => {
            return mockDispatch;
        }
    }
});

describe("Cart > Unit tests", () => {
    it("should render an empty cart correctly", () => {
        render(<Cart showCart={true} cart={[]}/>);
        const titleElement = screen.getByRole("heading");
        const totalElement = screen.getByTestId("total");
        const cartListElement = screen.getByRole("list");

        expect(titleElement).toHaveTextContent("Carrinho");
        expect(totalElement).toHaveTextContent("$0");
        expect(cartListElement).toBeEmptyDOMElement();
    });

    it("should render a cart with two products", () => {
        render(<Cart showCart={true} cart={cart}/>);
        const productsItemElements = screen.getAllByRole("listitem");
        const firstProductTitleElement = screen.getByText(products[0].title);
        const secondProductTitleElement = screen.getByText(products[1].title);
        
        expect(productsItemElements.length).toBe(2);
        expect(firstProductTitleElement).toBeInTheDocument();
        expect(secondProductTitleElement).toBeInTheDocument();
    });

    it("should remove product when remove button is clicked", async () => {
        const user = userEvent.setup();

        render(<Cart showCart={true} cart={[products[0]]} />);

        const removeProductButton = screen.getByRole("button", {
            name: "Remover",
        });

        await user.click(removeProductButton);

        expect(mockDispatch).toHaveBeenCalledTimes(1);
        expect(mockDispatch).toHaveBeenCalledWith(
            removeProduct(products[0])
        );
    });
})