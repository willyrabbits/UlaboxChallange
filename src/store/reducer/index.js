/**
 * THIS IS JUST A BASIC EXAMPLE OF HOW TO USE REDUX
 * storing the unit used to show the temperature is 
 * has been the best way to introduce redux in the project.
 */
export const weatherReducer = function (state = 'C', action) {
    switch (action.type) {
        case "SET_CELSIUS":
            return 'C';
        case "SET_FAHRENHEIT":
            return 'F';
        default:
            return state;
    }
};
