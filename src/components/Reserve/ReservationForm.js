import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '../Button'

const ReservationForm = ({
    availableTimes,
    setAvailableTimes,
    submitForm
}) => {

    // navigation
    const navigate = useNavigate()

    // today's date
    const today = new Date().toISOString().split('T')[0]

    // occasions
    const occasions = [
        "Birthday",
        "Anniversary",
        "Other"
    ]

    // form data
    const [formData, setFormData] = useState({
        "name": "",
        "email": "",
        "date": today,
        "time": availableTimes[0],
        "guests": 1,
        "occasion": "",
        "instructions": ""
    })

    // error messages
    const [errors, setErrors] = useState({
        "name": "",
        "email": "",
        "date": "",
        "time": "",
        "occasion": ""
    })

    // event handlers
    const handleChange = (e) => {
        const { name, value } = e.target
        setFormData({ ...formData, [e.target.name]: e.target.value })

        // Perform validation for the changed field
        const validationErrors = { ...errors };

        if (name === "name") {
            if (value.trim() === "") {
                validationErrors.name = "Please enter your name";
            } else {
                validationErrors.name = "";
            }
        }

        if (name === "email") {
            if (value.trim() === "") {
                validationErrors.email = "Please enter your email";
            } else if (
                name === "email" &&
                !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
            ) {
                validationErrors.email = "Invalid email address";
            } else {
                validationErrors.email = "";
            }
        }

        if (name === "date") {
            if (value.trim() === "") {
                validationErrors.date = "Please choose a valid date";
            } else {
                validationErrors.date = "";
            }
        }

        if (name === "time") {
            if (value.trim() === "") {
                validationErrors.time = "Please choose a valid time";
            } else {
                validationErrors.time = "";
            }
        }

        if (name === "occasion") {
            if (value.trim() === "") {
                validationErrors.occasion = "Please choose an occasion";
            } else {
                validationErrors.occasion = "";
            }
        }

        setErrors(validationErrors)
    }

    const handleDateChange = (e) => {

        let data = { ...formData, [e.target.name]: e.target.value }
        setAvailableTimes('Changing times')
        data = { ...data, time: availableTimes[0] }
        setFormData({ ...formData, ...data })
    }

    const submitData = (e) => {
        e.preventDefault()
        submitForm(formData)
        navigate('/confirm-reservation', { state: formData })
    }


    return (
        <section className='w-full px-10 2xl:px-64 py-16'>
            <form className='flex flex-col gap-4' onSubmit={submitData}>
                <Field
                    label="Name"
                    htmlFor="name"
                    errorMsg={errors.name}
                >
                    <input
                        type="text"
                        id="name"
                        name='name'
                        value={formData.name}
                        required={true}
                        onChange={handleChange}
                        className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1'
                    />
                </Field>
                <Field
                    label="Email"
                    htmlFor="email"
                    errorMsg={errors.email}
                >
                    <input
                        type="email"
                        id="email"
                        name='email'
                        value={formData.email}
                        required={true}
                        onChange={handleChange}
                        className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1'
                    />
                </Field>
                <div className='grid md:grid-cols-2 gap-4'>
                    <Field
                        label="Date"
                        htmlFor='date'
                        errorMsg={errors.date}
                    >
                        <input
                            type="date"
                            id="date"
                            name='date'
                            min={today}
                            value={formData.date}
                            required={true}
                            onChange={handleDateChange}
                            className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1'
                        />
                    </Field>
                    <Field
                        label="Time"
                        htmlFor='time'
                        errorMsg={errors.time}
                    >
                        <select
                            id="time"
                            name='time'
                            value={formData.time}
                            required={true}
                            onChange={handleChange}
                            className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1 h-full'
                        >
                            {availableTimes.map((time, index) =>
                                <option key={index} value={time}>{time}</option>
                            )}
                        </select>

                    </Field>
                </div>
                <div className='grid md:grid-cols-2 gap-4'>
                    <Field
                        label="Number of guests"
                        htmlFor='guests'
                        errorMsg={errors.guests}
                    >
                        <input
                            type="number"
                            placeholder="1"
                            min={1}
                            max={10}
                            id="guests"
                            name='guests'
                            value={formData.guests}
                            onChange={handleChange}
                            className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1'
                        />
                    </Field>
                    <Field
                        label="Occasion"
                        htmlFor='occasion'
                        errorMsg={errors.occasion}
                    >
                        <select
                            id="occasion"
                            name='occasion'
                            defaultValue=""
                            value={formData.occasion}
                            required={true}
                            onChange={handleChange}
                            className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-1 h-full'
                        >
                            <option value="">Choose an occasion</option>
                            {occasions.map((occasion, index) => (
                                <option key={index} value={occasion}>{occasion}</option>
                            ))}
                        </select>
                    </Field>
                </div>

                <Field
                    label="Special instructions"
                    htmlFor="instructions"
                    errorMsg={""}
                >
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={formData.instructions}
                        onChange={handleChange}
                        className='text-[#495E57] text-[20px] border-black bg-[#EDEFEE] rounded-[8px] p-2'
                    />
                </Field>
                <Button>
                    <input type="submit" value="Make Your reservation" />
                </Button>

            </form>
        </section>
    )
}

const Field = ({ children, label, htmlFor, errorMsg }) => {
    return (
        <div className='flex flex-col gap-2 grow'>
            <label htmlFor={htmlFor} className='text-[24px] font-bold'>{label}</label>
            {children}
            {errorMsg && (
                <p className="text-red-500 text-sm mt-1 text-[18px]">{errorMsg}</p>
            )}
        </div>
    )
}

export default ReservationForm