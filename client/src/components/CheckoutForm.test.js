import React from "react";
import { render } from "@testing-library/react";
import CheckoutForm from "./CheckoutForm";

// Write up the two tests here and make sure they are testing what the title shows

test("form header renders", () => {
    const { getByLabelText, findAllByText } = render(<CheckoutForm />)

    const firstNameInput = getByLabelText(/First Name:/i);
    // const lastNameInput = getByLabelText(/Last Name:/i);
    // const addressInput = getByLabelText(/Address:/i);
    // const cityInput = getByLabelText(/City:/i);
    // const stateInput = getByLabelText(/State:/i);
    // const zipInput = getByLabelText(/Zip:/i);

    fireEvent.change(firstNameInput, {target: {value: 'Eddkjkl'}});
    // fireEvent.change(lastNameInput, {target: {value: 'burke'}});
    // fireEvent.change(addressInput, {target: {value: '123 street'}});
    // fireEvent.change(cityInput, {target: {value: 'New York'}});
    // fireEvent.change(stateInput, {target: {value: 'New York'}});
    // fireEvent.change(zipInput, {target: {value: '59422'}});

    // const submitButton = getByText(/Checkout/i);

    // act(() => {
    //     fireEvent.click(submitButton);
    // })

    // findAllByText(/edd/i);


});

test("form shows success message on submit with form details", () => {});
