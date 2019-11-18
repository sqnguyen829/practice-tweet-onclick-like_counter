//createing a component= is a model
// import React from 'react';
// import Tweet from './Tweet'

//this is a component
// const App = () =>{
//   return(
//     <div>
//       <h1>Hello React</h1>
//       <button>Hello</button>
//     </div>
//   )
// } 
 
// function App(){
//   return(
//     <div className="app">
//       <Tweet name= "steven" message="testing" likes="0"/>
//       <Tweet name= "sam" message="testing2" likes="20"/>
//       <Tweet name= "sonny" message="testing3" likes="4"/>
//     </div>
//   )
// }

// import React, {useState} from 'react';
// import Tweet from './Tweet'

// function App(){
//   // isRed is the name setRed is the function
//   const [isRed, setRed ] = useState(false)
//   const [count, setCount] = useState(0)

//   // const [user, setUser] = useState({
//   //   name: 'Ed',age: 25,
//   //   post: ['my first post', 'my secound post']
//   // })

//   const increment = () =>{
//     setCount(count + 1)
//     setRed(!isRed)
//   }
//   return(
//     <div className="app">
//       <h1 className={isRed ? 'red' : ''}>Change my color!</h1>
//       <button onClick={increment}>Increment</button>
//       <h1>{count}</h1>
//     </div>
//   )
// }

// export default App

import React, {useState} from 'react';
import Tweet from './Tweet'

function App(){
 
  const [users, setUsers] =useState([
    {name: 'Ed', message: "Hello", likes:0},
    {name: 'Jim', message: "Hello 2", likes:20},
    {name: 'Sam', message: "Hello 3", likes:8}
  ])

  return(
    <div className="app">
      {users.map(user =>(
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
  ))}
    </div>
  )
}

export default App
