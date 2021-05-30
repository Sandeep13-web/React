import React , {useState} from 'react'

function Form() {
    const [userID , setUserID] = useState({
        value : "",
        hasError : false,
        error : "",
    });
    const [title , setTitle] = useState({
        value : "",
        hasError : false,
        error : "",
    });

    const [body , setBody] = useState({
      value : "",
      hasError: false,
      error : "",  
    })
    


    const userIDChangeHandler = (e)=> {
        setUserID({value:e.target.value, hasError: false , error: ""});
    }

    const titleChangeHandler = (e)=> {
        setTitle({value:e.target.value, hasError: false , error: ""});
    }

    const bodyChangeHandler = (e)=> {
        setBody({value: e.target.value, hasError: false , error: ""});
    }

    const submitForm = (e) =>{
        e.preventDefault();
        let userIDError = false;
        let titleError = false;
        let bodyError = false;

        if (userID.value.length === 0){
            userIDError = true;
        }
        if(title.value.length === 0){
            titleError = true;
        }

        if(userIDError || titleError){
            setUserID({
                ...userID,
                hasError : userIDError,
                error: "User ID field is empty",
            })
            setTitle({
                ...title,
                hasError : titleError,
                error: "Title field is empty",
            })
            setBody({
                ...body,
                hasError: bodyError,
                error: "Body field is empty",
            })
        }else{
            console.log("Card submission successfull!!");
        }

    }
    return (
        <div className="form">
                <div className= "container">
                    <form>
                        <h1>Sign up</h1>
                        <div id="emailHelp" className="form-text">Want to fill out a form.</div>
                        <br />
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">User ID</label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                value = {userID.value}
                                type = "text"
                                onChange = {userIDChangeHandler} />
                            {userID.hasError && <div className="alert alert-warning" role="alert">
                                { userID.error}
                            </div>} 
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Title</label>
                            <input className="form-control" id="exampleInputPassword1" 
                                value = {title.value}
                                type = "text"
                                onChange = {titleChangeHandler}
                            />
                            {body.hasError && <div className="alert alert-warning" role="alert">
                                {body.error}
                                </div>
                            }
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputText1" className="form-label">Body</label>
                            <input className="form-control" id="exampleInputPassword1" 
                                value = {body.value}
                                type = "text"
                                onChange = {bodyChangeHandler}
                            />
                            {body.hasError && <div className="alert alert-warning" role="alert">
                                {body.error}
                                </div>
                            }
                        </div>
                        {/* <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">I accept the terms and conditions</label>
                        </div> */}
                        <button type="submit" className="btn btn-primary" onClick = {submitForm}>Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Form;