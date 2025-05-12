import {Link} from 'react-router-dom';
function Home() {
    return(
        <>
            <div>
                <h1>Welcome to CHub</h1>
                <div>
                    <button onClick={() => alert('Navigate to Login Page')}><Link to="/login">Login</Link></button>
                    <button onClick={() => alert('Navigate to Sign Up Page')}><Link to="/signup">Sign Up</Link></button>
                </div>
            </div>
        </>
    );
};

export default Home;