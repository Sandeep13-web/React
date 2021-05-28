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
    return (
        <div className="allCards">
            <div className="list">
                <div className="row w-100">
                {data.splice(0,4).map((data,index)=>
                    <div className="col-md-6" key={index}>
                        <div className="card" >
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.body}</p>
                            <NavLink to={`/cards/${data.id}`} className= "btn btn-primary">View Data</NavLink>
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
