import React ,{useState} from 'react'
import Test from '../test'


export default function Body(props) {

    const [name, setName] = useState("Welcome to the website!!")
    
    const changeName =(id)=>{
        setName("This is Sandeep's website");
        console.log(id);
    }

    const button = "Submit button";



    return (
        
        <div className='Body'>
            <div className= "main_area">
                <h3>{name}</h3>
                
            <Test  changeNameHandler={changeName} buttonChange = {button} />

            </div>
                    
        </div>
    );
}
