import {
    CREATE_FISH,
    DELETE_FISH,
    RETRIEVE_FISHIES,
    UPDATE_FISH
} from "./actionTypes";

import FishService from "./fishService";

export const createFish = (name, type, age, sex,) => async (dispatch) => {
    try {
        const res = await FishService.create({
            name,
            type,
            age,
            sex,
        });

        dispatch({
            type: CREATE_FISH,
            payload: res.data,
        });
    } catch (err) {
        return Promise.reject(err)
    }
};

export const retrieveFishies = () => async (dispatch) => {
    try {
        const res = await FishService.getAll();

        dispatch({
            type: RETRIEVE_FISHIES,
            payload: res.data,
        });
    } catch(err) {
        console.log(err);
    }
};

export const updateFish = (id, data) => async (dispatch) => {
    try {
        const res = await FishService.update(id, data);

        dispatch({
            type: UPDATE_FISH,
            payload: data,
        });
        return Promise.resolve(res.data);
    
    } catch(err) {
        return Promise.reject(err);
    }
}

export const deleteFish = (id) => async (dispatch) => {
    try {
        await FishService.delete(id);
        dispatch({
            type: DELETE_FISH,
            payload: { id },
        });

    } catch(err) {
        console.log(err);
    }
};