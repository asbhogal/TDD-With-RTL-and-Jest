import ToDo from "./ToDo"

const App = () => {

  const todos = [
    { id: 1, title: 'get shopping', completed: false },
    { id: 2, title: 'buy food', completed: false },
    { id: 3, title: 'study for test', completed: true },
  ]

  return (

    <div className="App">
      { todos.map((todo) => {
        return (<ToDo todo={ todo } key={ id }/>)
      }) }
    </div>

  )
}

export default App;