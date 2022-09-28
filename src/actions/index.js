export const addTodo = (data) => {
    // console.log("data hn me", data);
    return {
        type: "ADD_TODO",
        payload: {
            data
        }
    }
}

export const deleteTodos = () => {
    // console.log("data hn me", data);
    return {
        type: "DELETE_TODOS"
    }
}