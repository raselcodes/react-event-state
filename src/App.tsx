

import './App.css'

function App() {
  const handleClick = () => {
    alert('Click me 3')
  }

const handleAddToCart = (id: number) =>{
  alert(`Product ${id} added to cart`)
}



  return (
    <>

      <button onClick={handleClick}>Click me2</button>
      <button onClick={handleClick}>Click Me3</button>
      <button onClick={() => alert('Click me 4')}>Click Me4</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button>



    </>
  )
}

export default App
