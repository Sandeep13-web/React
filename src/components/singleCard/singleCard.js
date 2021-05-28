import React from 'react'
import axios from 'axios'
import{useParams} from 'react-router-dom';
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
      }, [params.id])

    return (
        <div className="singleCard">
            <div className="list">
                <div className="row w-100">
                    <div className="col-md-6">
                        <div className="card" >
                        {/* <img src="..." className="card-img-top" alt="..." /> */}
                        <div className="card-body">
                            <h5 className="card-title">{data.title}</h5>
                            <p className="card-text">{data.body}</p>
                            <button className="btn btn-primary">{params.id}</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCard
