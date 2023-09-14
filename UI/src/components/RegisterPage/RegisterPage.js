import './RegisterPage.css';
import {useState} from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';

const regURL = 'http://localhost:8080/api/register';

const initialUser = {
    name:'',
    email:'',
    password:'',
    rePassword:''
}

function RegisterPage({setUser}){

    const [inputUser, setInputUser] = useState(initialUser);
    const navigate = useNavigate();

    
    const handleChange = (event)=>{
        setInputUser({...inputUser, [event.target.name]:event.target.value});
    }

    const RegisterUser = async function(){
        const {name, email, password, rePassword} = inputUser;
        if(name && email && password && (password === rePassword)){
            console.log(inputUser);
            const msg = await axios.post(regURL, {
                name,
                email,
                password
            });
            console.log(msg);
            if(msg.status === 200){
                alert('Register successful');
                // setUser(inputUser);
                setInputUser(initialUser);
                navigate('/login',{replace:true});
            }
            else{
                alert('Invalid Creditionals');
            }
        }
        else{
            alert('Invalid Creditionals');
        }

    }


    const handleRegister = async (event)=>{
        RegisterUser().then().catch(()=>alert('Unable to Connect....!'));
    }


    return(
        <div className='RegisterPage'>

            <h3 className='RegisterHead'>Register</h3>

            <input name='name' type='name' placeholder='Name' value={inputUser.name} onChange={handleChange}></input>

            <input name='email' type='email' placeholder='Email' value={inputUser.email} onChange={handleChange}></input>

            <input name='password' type='password' value={inputUser.password} placeholder='Password' onChange={handleChange}></input>

            <input name='rePassword' type='password' placeholder='Re-enter Password' value={inputUser.rePassword} onChange={handleChange}></input>

            <button className='btn' onClick={handleRegister}>Register</button>

            <div>or</div>

            <button className='btn' onClick={()=> navigate('/login',)}>Login</button>

        </div>
    );
}
export default RegisterPage;