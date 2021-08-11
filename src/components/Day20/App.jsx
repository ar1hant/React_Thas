import React, {useState} from 'react';

function App(props) {
  const [todos, setTodos] = useState([{name:"Pizza", cals: "56"},
                                      {name:"Burger", cals: "69"},
                                      {name:"Coke",  cals: "500"},
                                      {name:"Brownie", cals: "180"},
                                      {name:"Fried Rice", cals: "200"},
                                      {name:"Lasania", cals: "600"},
                                      {name:"Pani Puri",  cals: "10"}]);
  return (
    <div className = "HealthCardListWIthDelete_Container">
    {
      todos.length === 0 ? <h1 className="HealthCardListWIthDelete_empty_display">No Entry</h1> : todos.map((todo, index) => (
        <div className ="HealthCardListWIthDelete_Card" key={index}>
          <div className = "HealthCardListWIthDelete_action">
            <h1>{todo.name}</h1>
            <button onClick={() => {
                const newTodos = todos.filter((ele, i) => i !== index);
                setTodos(newTodos);
              }}>Delete</button>
          </div>
          <h2>you've consumed {todo.cals} cals</h2>
        </div>))
    }
    </div>
  )
}

export default App;