const generateAvailableTimes = () => {
    var times = []

    for (let i = 17; i <= 23; i++) {
        if (Math.random() < 0.5) times.push(i + ":00")
        if (Math.random() < 0.5) times.push(i + ":30")
    }

    return times
}

const submitForm = (formData) => {
    Object.entries(formData).map(([key, value]) => console.log(key + ": " + value))
    return true
}

export { generateAvailableTimes, submitForm }