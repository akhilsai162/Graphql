import { createStore } from "redux";
import { getContinents } from ".";

const store = createStore(getContinents)

export default store