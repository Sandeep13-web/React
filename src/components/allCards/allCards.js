import React from 'react'
import{Link, NavLink} from 'react-router-dom';
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
        <div class ="allCards">
            <div className="list">
                <div class="row w-100">
                {data.splice(0,4).map((data,index)=>
                    <div class="col-md-6" key={index}>
                        <div class="card" >
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.body}</p>
                            <NavLink to={`/cards/${data.id}`} class = "btn btn-primary">View Data</NavLink>
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
