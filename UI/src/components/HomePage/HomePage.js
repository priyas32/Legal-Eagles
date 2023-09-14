import './HomePage.css';
import { useNavigate } from 'react-router-dom';

function HomePage({user, setUser}){
    const navigate = useNavigate();

    return(
        <div className='HomePage'>
            <p>Welcome to {user ? user.name:'HomePage'}</p>
            <button className='btn' onClick={()=> {
                setUser(null);
                navigate('/login',{replace:true})
                }}>Logout</button>
        </div>
    );
}
export default HomePage;