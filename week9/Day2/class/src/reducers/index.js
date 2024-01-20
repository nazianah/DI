// src/reducers/index.js
const reducer = (state, action) => {
    let week = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    let currentDay = week.indexOf(action.day)
    let chosenDay;

    switch (action.type) {
        case "FORWARD_DAY":
            if (currentDay === week.length - 1) {
                chosenDay = week[0];
            } else {
                chosenDay = week[currentDay + 1];
            }

            return {
                ...state,
                weekday: chosenDay,
            };

        case "BACKWARD_DAY":
            if (currentDay === 0) {
                chosenDay = week[week.length - 1];
            } else {
                chosenDay = week[currentDay - 1];
            }

            return {
                ...state,
                weekday: chosenDay,
            };

        default:
            return state;
    }
}

export { reducer };
