import React, {useState} from 'react';
import "./Login.css"
import { Link } from 'react-router-dom';


function Login(props) {

    const [register, setRegister] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const registerView = () =>{

        setRegister(true)
    }

    const loginView = () =>{

        setRegister(false)
    }

    //auth.createUserWithEmailAndPassword()

    
    if (register == true) {
        return (
            <div style ={{flex:1, justifyContent:"center", alignItems:"center", display:"flex"}}>
                <div style={{height:300, width:300, border:"1px solid black", marginTop:100}}>
                    <div style={{height:30, width:"95%",border:"1px solid black", margin:10}}>
                        <h3>Register</h3>
                    </div>
    
                    <div style={{height:175, width:"95%",border:"1px solid black", margin:10}}>
                            <input placeholder='email' style={{margin:10}} onChange={(value) => setEmail(value)} />
                            <input placeholder='password' style={{margin:10}} onChange={(value) => setPassword(value)}/>
                            <br></br>
                            <button style={{margin:10}}>Submit</button>
                            <Link to ="/">
                                <br></br>
            <img
                className='header_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1024px-Eo_circle_light-blue_white_letter-s.svg.png'
            
            
            
            />
            </Link>
                    </div>
                   
                   
                    <button onClick={loginView}>Login</button>
    
                </div>
                
            </div>
        );
    }
     
    
    
    
    else {


        return (
            <div style ={{flex:1, justifyContent:"center", alignItems:"center", display:"flex"}}>
                <div style={{height:300, width:300, border:"1px solid black", marginTop:100}}>
                    <div style={{height:30, width:"95%",border:"1px solid black", margin:10}}>
                        <h3>Login</h3>
                    </div>
    
    <div style={{height:175, width:"95%",border:"1px solid black", margin:10}}>
                            <input placeholder='email' style={{margin:10}} onChange={(value) => setEmail(value)}/>
                            <input placeholder='password' style={{margin:10}} onChange={(value) => setPassword(value)}/>
                            <br></br>
                            <button style={{margin:10}}>Submit</button>
                            <Link to ="/">
                                <br></br>
            <img
                className='header_logo'
                src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/dc/Eo_circle_light-blue_white_letter-s.svg/1024px-Eo_circle_light-blue_white_letter-s.svg.png'
            
            
            
            />
            </Link>
</div>

<div style ={{height:30,  border:"1px solid black"}}>
        <button onClick={registerView}>Register</button>
</div>
    
                </div>
                
            </div>
        );





    }
    
    
    
    
    
}

export default Login;