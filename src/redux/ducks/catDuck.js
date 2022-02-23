import {createAction} from "../../helper/utils";

const SET_CAT_CATEGORIES = "catDuck/SET_CAT_CATEGORIES";
const SET_CATS = "catDuck/SET_CATS";
const ADD_CATS = "catDuck/ADD_CATS";

export const setCatCategories = createAction(SET_CAT_CATEGORIES);
export const setCats = createAction(SET_CATS);
export const addCats = createAction(ADD_CATS);


const initialState = {
    categories: [],
    cats: []
};

export const catDuck = (state = initialState, {type, payload}) => {
    switch (type) {
        case SET_CAT_CATEGORIES:
            return {...state, categories: payload};
        case SET_CATS:
            return {...state, cats: payload};
        case ADD_CATS:
            return {...state, cats: [...state.cats, ...payload]};
        default:
            return {...state};
    }
};