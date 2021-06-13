import axios from 'axios'
import React , {useEffect, useState} from 'react'


function Test(props) {

    const [data, setData] = useState()
    const [title, setTitle] = useState([]);
    const [selectedIndex, setSelectedIndex] = useState(null)


    const getData = async() =>{
        let response = await axios.get('https://jsonplaceholder.typicode.com/albums');
        setData(response.data)
    }

    const addingData = () =>{
        let newTitle = [...title]
        newTitle.push({title});
        putData(title);
        setTitle("");
        
    }
    const putData = async(mTitle) =>{
        const puttingData = {title: mTitle} 
        const response = await axios.post('https://jsonplaceholder.typicode.com/albums', puttingData )
        console.log(response);
    }

    const mainEdit = (e) =>{
        e.preventDefault();
        editData(title);
        setTitle("");
    }

    const editHandler = (index,data) =>{
        setSelectedIndex(index);
        setTitle(data.title);
    }

    const editData = async(mTitle) =>{
        let mainTitle = {title: mTitle}
        const response = await axios.put(`https://jsonplaceholder.typicode.com/albums/${selectedIndex}` , mainTitle)
    }

    const deleteData = async (id) =>{
        const response = await axios.delete(`https://jsonplaceholder.typicode.com/albums/${id}`)
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="form-input">
                <input type='text-area' placeholder='Enter title' value={title} onChange={(e)=> setTitle(e.target.value) }/>
                <div className="buttons">
                    {(selectedIndex === null) && <button onClick={addingData}>Submit</button>}
                    {(selectedIndex !== null) &&<button onClick={mainEdit}>Main Edit</button>}
                </div>
            </div>
            
            <div className="display-data">
                {data && data.map((data, index)=> 
                    <div className= 'col-md-6' key={index}>
                        <ul>
                            <li>{data.title}</li>
                            <div className='buttons'>
                                <button onClick={()=> editHandler(data.id,data)}>Edit</button>
                                <button className='btn btn-danger' onClick={()=>deleteData(data.id)}>Delete</button>
                            </div>
                        </ul>
                    </div>
                )}
            </div>
        </>
    )
}

export default Test
