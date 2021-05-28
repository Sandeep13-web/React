import React from 'react'
import axios from 'axios'
import{useParams, NavLink} from 'react-router-dom';
import {useState, useEffect} from 'react'

function SingleCard() {
    const params = useParams();
    const [data, setData] = useState({});

    const getData = async(id)=>{
        try{
          const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
          setData(response.data);
    
        }catch(err){
          console.log(err);
        }
        
      }
    
      useEffect(() => {
          getData(params.id);
      }, [])
    return (
        
        <div class ="singleCard">
            <div className="list">
                <div class="row w-100">
                    <div class="col-md-6">
                        <div class="card" >
                        {/* <img src="..." class="card-img-top" alt="..." /> */}
                        <div class="card-body">
                            <h5 class="card-title">{data.title}</h5>
                            <p class="card-text">{data.body}</p>
                            <button class="btn btn-primary">{params.id}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard
