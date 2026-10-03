

import './App.css'

function App() {
  const handleClick = () => {
    alert('Click me 3')
  }



  return (
    <>

      <button onClick={handleClick}>Click me2</button>
      <button onClick={handleClick}>Click Me3</button>
      <button onClick={() => alert('Click me 4')}>Click Me4</button>



    </>
  )
}

export default App
