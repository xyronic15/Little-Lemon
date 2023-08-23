import { fireEvent, render, screen } from "@testing-library/react";
import ReservationForm from ".";
import { MemoryRouter } from "react-router-dom";

describe("Reservation Form", () => {
    const setup = () => {
        render(
            <MemoryRouter>
                <ReservationForm />
            </MemoryRouter>
        )
    }

    test("verify name validation", async () => {
        setup()

        // get the name field using the label
        const nameField = await screen.getByLabelText('Name');

        // set the name to contain something
        fireEvent.change(nameField, { target: { value: 'John Doe' } });
        expect(screen.queryByText('Please enter your name')).toBeNull();

        // set name to be empty
        fireEvent.change(nameField, { target: { value: '' } });
        expect(screen.getByText('Please enter your name')).toBeInTheDocument();
    })

    test('verify email validation', async () => {
        setup()

        // get the email field using the label
        const emailField = await screen.getByLabelText('Email');

        // set the email to contain a valid email
        fireEvent.change(emailField, { target: { value: 'abc@abc.com' } });
        expect(screen.queryByText('Please enter your email')).toBeNull();
        expect(screen.queryByText('Invalid email address')).toBeNull();

        // set the email to contain an invalid email
        fireEvent.change(emailField, { target: { value: 'abc' } });
        expect(screen.getByText('Invalid email address')).toBeInTheDocument();

        // set the email to be empty
        fireEvent.change(emailField, { target: { value: '' } });
        expect(screen.getByText('Please enter your email')).toBeInTheDocument();
    })
})