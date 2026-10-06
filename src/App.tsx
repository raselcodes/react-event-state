

import './App.css'
// import Cart from './Card'
// import Counter from './counter'
// import Better from './better'
import User from './User'
import { Suspense } from 'react'

const userDataPromise = async () => {
  const res = await fetch ('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();
  return data;
} 

function App() {
//   const handleClick = () => {
//     alert('Click me 3')
//   }

// const handleAddToCart = (id: number) =>{
//   alert(`Product ${id} added to cart`)
// }



  return (
    <>
<Suspense fallback={<p>Loading...</p>}> 
    <User userDataPromise={userDataPromise()}></User>

    </Suspense>

    {/* <Cart></Cart> */}
    {/* <Counter></Counter>

    <Better></Better> */}

      {/* <button onClick={handleClick}>Click me2</button>
      <button onClick={handleClick}>Click Me3</button>
      <button onClick={() => alert('Click me 4')}>Click Me4</button>

      <button onClick={() => handleAddToCart(65)}>Buy this</button> */}



    </>
  )
}

export default App



