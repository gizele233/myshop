import { Counter } from "./Counter";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit tests", () => {
    it("should render counter component correctly", ()=>{
        render(<Counter />)
        const counterValueElement = screen.getByRole("heading", {level: 1});
        const increaseButtonElement = screen.getByRole("button", {name: "Aumentar"});
        const descreaseButtonElement = screen.getByRole("button", {name: "Diminuir"});

        expect(counterValueElement).toHaveTextContent("0");
        expect(increaseButtonElement).toBeInTheDocument();
        expect(descreaseButtonElement).toBeInTheDocument();
    });

    it("should decrease counter value when increase button is  clicked", async () => {
        render(<Counter />)

        const counterValueElement = screen.getByRole("heading", {level: 1});
        const decreaseButton = screen.getByRole("button", {name: "Diminuir"});

        await userEvent.click(decreaseButton);
        expect(counterValueElement).toHaveTextContent("1");
    });

    it("should increase counter value when increase button is  clicked", async () => {
        render(<Counter />)
        const increaseButton = screen.getByRole("button", {name: "Aumentar"});
        await userEvent.click(increaseButton);
        const counterValueElement = screen.getByText("1", {exact: true});

        expect(counterValueElement).toBeInTheDocument();
    });
})
