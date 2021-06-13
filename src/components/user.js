import axios from 'axios'
import React , {useState, useEffect} from 'react'
import Body from './Body/Body';

function User() {

    const [data, setData] = useState([])
    const [name , setName] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null);

    const getUser = async() =>{
        const response = await axios.get('https://jsonplaceholder.typicode.com/users')
        setData(response.data)
        console.log(response.data);
    }

    const mainEdit = (e) =>{
        e.preventDefault();
        editUser(name);
        setName("");
    }
    const editHandler = (index , data) =>{
        setName(data.name);
        setSelectedIndex(index);
    }

    const editUser = async(nName) =>{
        let newName = {name: nName}
        const response = await axios.put(`https://jsonplaceholder.typicode.com/users/${selectedIndex}` , newName)
    }

    const deleteUser = async(id) =>{
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`)
    }

    useEffect(() => {
       getUser();
    }, [])

    return (
        <div style = {{paddingLeft: '210px' , paddingTop: '80px'}}>

            <input type='text' onChange={(e)=> setName(e.target.value)}  value={name}></input>
            <button onClick={mainEdit}>Submit</button>

            {data.map((data ,index)=>
                <div className="Name" key={index}>
                    <ul>
                        <li>{data.name}</li>
                        <button onClick={()=>editHandler(data.id,data)}>Edit</button>
                        <button className = 'btn btn-danger' onClick={()=> deleteUser(data.id)}>Delete</button>
                    </ul>
                </div>
                
            )}
        </div>
    )
}

export default User
