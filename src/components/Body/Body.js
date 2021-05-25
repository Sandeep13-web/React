import React from 'react'

export default function Body(props) {
    return (
        
        <div class ='Body'>
            <div class = "main_area">
                <h3>Welcome To the Website!!</h3>
                <h2>{props.name} has been working on React for {props.days} days.</h2>
                <button class = 'btn'onClick={props.click}>Submit</button>
            </div>
        </div>
    );
}
