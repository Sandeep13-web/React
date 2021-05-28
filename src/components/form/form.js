import React , {useState} from 'react'

function Form() {
    const [username , setUsername] = useState({
        value : "",
        hasError : false,
        error : "",
    });
    const [password , setPassword] = useState({
        value : "",
        hasError : false,
        error : "",
    });


    const userNameChangeHandler = (e)=> {
        setUsername({value:e.target.value, hasError: false , error: ""});
    }

    const passwordChangeHandler = (e)=> {
        setPassword({value:e.target.value, hasError: false , error: ""});
    }


    const submitForm = (e) =>{
        e.preventDefault();
        let userNameError = false;
        let passwordError = false;

        if (username.value.length === 0){
            userNameError = true;
        }
        if(password.value.length === 0){
            passwordError = true;
        }

        if(userNameError || passwordError){
            setUsername({
                ...username,
                hasError : userNameError,
                error: "Username field is empty",
            })
            setPassword({
                ...password,
                hasError : passwordError,
                error: "Password field is empty",
            })
        }else{
            console.log("Form submission successfull!!");
        }

    }
    return (
        <div className="form">
                <div className= "container">
                    <form>
                        <div className="mb-3">
                            <label for="exampleInputEmail1" className="form-label">UserName</label>
                            <input className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" 
                                value = {username.value}
                                type = "text"
                                onChange = {userNameChangeHandler} />
                            <div className="alert alert-warning" role="alert">
                                {username.hasError && username.error}
                            </div>
                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                        </div>
                        <div className="mb-3">
                            <label for="exampleInputPassword1" className="form-label">Password</label>
                            <input className="form-control" id="exampleInputPassword1" 
                                value = {password.value}
                                type = "password"
                                onChange = {passwordChangeHandler}
                            />
                            <div className="alert alert-warning" role="alert">
                                {password.hasError && password.error}
                            </div>
                        </div>
                        <div className="mb-3 form-check">
                            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                            <label className="form-check-label" for="exampleCheck1">Check me out</label>
                        </div>
                        <button type="submit" className="btn btn-primary" onClick = {submitForm}>Submit</button>
                    </form>
                </div>
        </div>
    )
}

export default Form;