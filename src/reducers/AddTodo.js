const initialState = {
    list: []
}

export const AddTodo = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_TODO":
            return {
                // ...state,
                list: [
                    ...state.list,
                    {
                        data: action.payload.data
                    }
                ]
            }
        case "DELETE_TODOS":
            // console.log("object");
            return {
                ...state,
                list: []
            }
        default: return state
    }
}

// export const DeleteTodos = (state = initialState, action) => {
//     switch (action.type) {

//         default: return state
//     }
// }