import React from 'react'
import{NavLink} from 'react-router-dom';
import axios from 'axios';
import {useState, useEffect} from 'react';


function AllCards() {
    const [data, setData] = useState([]);

    const getData = async()=>{
        try{
          const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
          console.log(response);
          setData(response.data);
    
        }catch(err){
          console.log(err);
        }
        
      }
    
      useEffect(() => {
          getData();
      }, [])


      const deleteCardHandler= (index) =>{
          let newDataList = [...data];
          newDataList.splice(index,1);
          setData(newDataList);
      }
    return (
        <div className="allCards">
            <h3>Card Information</h3>
            <div className="list">
                <div className="row w-100">
                    {data.map((data,index)=>
                        <div className="col-md-6" key={index}>
                            <div className="card" >
                            {/* <img src="..." className="card-img-top" alt="..." /> */}
                            <div className="card-body">
                                <h5 className="card-title">{data.title}</h5>
                                <p className="card-text">{data.body}</p>
                                <div className="btns">
                                    <NavLink to={`/cards/${data.id}`} className= "btn btn-primary">View Data</NavLink>
                                    <button className="btn btn-danger" onClick={deleteCardHandler.bind(null , index)}>Delete</button>
                                </div>
                            </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}

export default AllCards;
