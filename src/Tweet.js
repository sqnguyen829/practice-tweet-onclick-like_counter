import React from 'react'
import "./App.css"

function Tweet({name,message,likes}){
    return(
        <div className="tweet">
            <h3>Name:{name}</h3>
            <p>{message}</p>
            <h3># of Likes: {likes}</h3>
        </div>
    )
}

// function Tweet(props){
//     return(
//         <div className="tweet">
//             <h3>Name:{props.name}</h3>
//             <p>{props.message}</p>
//             <h3># of Likes: {props.likes}</h3>
//         </div>
//     )
// }
export default Tweet