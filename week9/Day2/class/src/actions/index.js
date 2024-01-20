// src/actions/index.js
const forward = weekday => {
    return {
        type: "FORWARD_DAY",
        day: weekday
    }
}

const backward = weekday => {
    return {
        type: "BACKWARD_DAY",
        day: weekday
    }
}

export {
    forward,
    backward,
}
