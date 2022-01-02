import {
    CREATE_FISH,
    DELETE_FISH,
    RETRIEVE_FISHIES,
    UPDATE_FISH,
} from './actionTypes';
const initialState = [];

function fishReducer(fishies = initialState, action) {
    const { type, payload } = action;
    switch (type) {
        case CREATE_FISH:
            return [...fishies, payload];
        case RETRIEVE_FISHIES:
            return payload;
        case UPDATE_FISH:
            return fishies.map(fish => {
                if (fish.id === payload.id) {
                    return {
                        ...fish,
                        ...payload,
                    }
                } else {
                    return fish;
                }
            });
        case DELETE_FISH:
            return fishies.filter(fish => fish.id !== payload.id);
        default:
            return fishies;
    }
}

export default fishReducer;