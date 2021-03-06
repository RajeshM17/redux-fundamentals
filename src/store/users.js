import {createSlice} from '@reduxjs/toolkit';


let lastId=0;
const slice=createSlice({
    name:'users',
    initialState:[],
    reducers:{

        userAdded:(users,action)=>{
            users.push({
                id: ++lastId,
                name:action.payload.name
            })
            console.log(action)
        },
        
     
    }
})
export const {userAdded} =slice.actions;
export default slice.reducer;
console.log(slice);