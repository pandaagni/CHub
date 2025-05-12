import { useState } from 'react';
function Login() {

    const [username, setUsername] = useState("");

    return(
        <>
            <div>
                <h2>Login</h2>
                Username <input name="Username" id = "Username"  type="text" placeholder="Username" value = {username} onChange = {(u) => setUsername(u.target.value)} /><br/>
                Password <input type="password" placeholder="Password"/><br/>
                <button onClick={() => alert('Login Successful\n Welcome '+ username)}>
                    Login
                </button>
            </div>
        </>
    );
};

export default Login;