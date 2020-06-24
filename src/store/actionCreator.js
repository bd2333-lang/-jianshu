import {CHANGE_INPUT,ADD_ITEM,DELETE_ITEM,INT_DATE} from './actionTypes'
export const getInputValue = (value) => ({
    type: CHANGE_INPUT,
    value
})
export const addItemAction = () => ({
    type: ADD_ITEM,
})
export const deleteItemAction = (key) => ({
    type: DELETE_ITEM,
    key
})
export const getInitDataAction = (data) => ({
    type: INT_DATE,
    data
})

