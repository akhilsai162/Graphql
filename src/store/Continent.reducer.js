const initialState = {
    continentsData: [],
    isLoaded: false
}

const getContinents = (state = initialState.continentsData, {type, payload}) => {
    switch(type){
        case "GET_CONTINENTS": return {
            ...state,
            continentsData: payload,
            isLoaded: true
        };
        default: return state
    }
}

export default getContinents