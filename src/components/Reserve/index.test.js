import { fireEvent, render, screen } from "@testing-library/react";
import Reserve from ".";
import { MemoryRouter } from "react-router-dom";

describe("Reserve page", () => {
    const timeFormat = /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/;

    test('should have time options in the correct format', async () => {
        render(
            <MemoryRouter>
                <Reserve />
            </MemoryRouter>
        )

        // get the field for available times using the label
        const availableTimeField = await screen.getByLabelText('Time');

        // get the options for available times
        const availableTimes = await availableTimeField.querySelectorAll('option');

        // should have more than one option
        expect(availableTimes.length).toBeGreaterThan(1);

        // loop through the options and check if they are in the correct format
        availableTimes.forEach(option => {
            expect(option.value).toMatch(timeFormat);
        })
    })

    test('should update the available times when a new date is selected', async () => {
        render(
            <MemoryRouter>
                <Reserve />
            </MemoryRouter>
        )

        // get the date field using the label
        const dateField = await screen.getByLabelText('Date');

        // get the available times field
        const availableTimeField = await screen.getByLabelText('Time');

        // get the initial available times
        const initialTimes = await availableTimeField.querySelectorAll('option');

        // get new times two days from now
        const newDate = new Date(new Date().getTime() + (2 * 24 * 60 * 60 * 1000)).toISOString().split('T')[0];
        fireEvent.change(dateField, { target: { value: newDate } });
        const updatedTimes = await availableTimeField.querySelectorAll('option');

        // the new date should to be selected
        expect(dateField).toHaveValue(newDate);

        // check the initial times are not the same as the updated times
        initialTimes.forEach(option => {
            expect(option.value).toMatch(timeFormat);
        })
        updatedTimes.forEach(option => {
            expect(option.value).toMatch(timeFormat);
        })
        expect(initialTimes).not.toEqual(updatedTimes);
    })

})