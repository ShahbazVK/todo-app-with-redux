import './App.css';
import { useSelector, useDispatch } from 'react-redux'
import { addTodo, deleteTodos } from './actions/index'
import React, { useState } from 'react';
// import AddTodo from './reducers/AddTodo';

function App() {
  const dispatch = useDispatch()
  const myState = useSelector((state) => state.AddTodo.list)
  console.log(myState)
  const [todoData, settodoData] = useState('')
  return (
    <div className='main' style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100vh" }}>
      <h1>React Tutorial for Redux</h1>
      <div>
        <input className='input' onChange={(event) => settodoData(event.target.value)} type="text" name="" id="" placeholder='Write a todo' value={todoData} />
        <button className='createbutton' onClick={() => {
          dispatch(addTodo(todoData))
          // console.log(myState)
        }} type="submit">Create</button>
      </div>
      <div>
        {myState.map((element, key) => {
          return (
            <div key={key}>
              <div className='todo'>
                {element.data}
              </div>
            </div>
          )
        })}

      </div>
      <button className='deletebutton' onClick={() => dispatch(deleteTodos())}>Delete</button>

    </div>
  );
}

export default App;
