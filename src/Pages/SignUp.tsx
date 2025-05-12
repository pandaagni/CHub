function SignUp(){
    return(
        <>
            <div>
                <h2>Sign Up</h2>
                Email-Id<input name="Email" id = "Email"  type="email" placeholder="Email"/><br/>
                Username <input name="Username" id = "Username"  type="text" placeholder="Username"/><br/>
                Password <input type="password" placeholder="Password"/><br/>
                Confirm Password <input type="password" placeholder="Confirm Password"/><br/>
                <button onClick={() => alert('Sign-Up Successful')}>
                    Sign Up
                </button>
            </div>
        </>

    );
};

export default SignUp;