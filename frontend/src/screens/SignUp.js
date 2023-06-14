import React,{useState} from 'react'
import { Link,useNavigate } from 'react-router-dom'

export default function SignUp() {

let navigate=useNavigate();

    const [credentials, setCredentials] = useState({
        name:"",
        email:"",
        password:"",
        geoLocation:""
    });

    const onChangeHandler=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
        console.log(credentials.name,credentials.password,credentials.email);
    }

    const handleSubmit = async(e)=>{
        // preventDefault() is a synthetic event
        // e.preventDefault();
        const response = await fetch("http://localhost:5000/api/createuser",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name:credentials.name,
                email:credentials.email,password:credentials.password,
                location:credentials.geoLocation
            })
        });

        const json = await response.json()
        console.log(json);
        if(json.success){
          navigate("/");
        }

        if(!json.success){
            alert("Enter valid Credentials !");
        }
    }


  return (
    <>

<div className='container'>
<form onSubmit={handleSubmit}>
<div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" name='name' value={credentials.name} onChange={onChangeHandler}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name='email' value={credentials.email} onChange={onChangeHandler}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>

     
  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name='password' value={credentials.password} onChange={onChangeHandler}/>
  </div>

  <div className="mb-3">
    <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
    <input type="text" className="form-control"  name='geoLocation' value={credentials.geoLocation} onChange={onChangeHandler} />
  </div>

  <button type="submit" className="m-3 btn btn-success">Submit</button>

  {/* Login */}
  <Link to="/login" className='m-3 btn btn-danger'>Already a User ?</Link>
</form>
</div>

    </>
  )
}
