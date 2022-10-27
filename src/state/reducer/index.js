import { combineReducers } from "redux";
import amountReduser from "./amountReduser";

const redusers = combineReducers({
    amount: amountReduser
})

export default redusers;