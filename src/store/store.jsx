import { configureStore } from "@reduxjs/toolkit";
import { departamentsSlice, workersSlice } from "./mySlice";

export default configureStore({
    reducer:{
        myWorkers:workersSlice.reducer,
        myDepartaments:departamentsSlice.reducer,
    }
})