import './LoginPage.css';
import {useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const loginURL = 'http://localhost:8080/api/login';

const initialuser = {
    email:'',
    password:''
};


function LoginPage({setUser}){

    const [inputUser, setInputUser] = useState(initialuser);
    const navigate = useNavigate();


    const handleChange = (event)=>{
        setInputUser({...inputUser, [event.target.name]:event.target.value});
        console.log(event.target.name, event.target.value);
    }

    const LoginUser = async function (){
        const {email, password} = inputUser;
        if(email && password){
            console.log(inputUser);
            const msg = await axios.post(loginURL, inputUser);
            alert('Login Successfull');
            setUser(msg.data.user);
            setInputUser(initialuser);
            navigate('/',{replace:true});
        }
        else{
            alert('Enter email and password to login');
        }
    }

    const handleLogin = ()=>{
        LoginUser().then().catch(()=>{alert('Invalid Credentials...!')});
    }

    return(
        <div className='LoginPage'>

            <h3 className='LoginHead'>Login</h3>

            <input name='email' type='email' placeholder='Email' value={inputUser.email} onChange={handleChange}></input>

            <input name='password' type='password' placeholder='Password' value={inputUser.password} onChange={handleChange}></input>

            <button className='btn' onClick={handleLogin}>Login</button>

            <div>or</div>

            <button className='btn' onClick={()=> navigate('/register')}>Regiter</button>

        </div>
    );
}
export default LoginPage;