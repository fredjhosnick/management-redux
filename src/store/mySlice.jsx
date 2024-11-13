import { createSlice } from "@reduxjs/toolkit";

export const workersSlice = createSlice({
    name:'myWorkers',
    initialState:{
        workers: []
    },
    reducers:{
        addOneValue:(state, action)=>{
            state.workers=[...state.workers,action.payload]
        },
        deleteOneWorker:(state,action)=>{
           const {name, lastname,phone} = action.payload;
           state.workers=state.workers.filter(value=>
            value.name.first!== name &&
            value.name.last !== lastname &&
            value.name.cell !== phone
           )
        }

    }

}) 

export const departamentsSlice = createSlice({
    name:'myDepartaments',
    initialState:{
        departaments: []
    },

}) 

export const{ addOneValue} = workersSlice.actions;
export const{ deleteOneWorker} = workersSlice.actions;