import ActionBar from "../Components/ActionBar"


const LoginError = () => {

    return (
        <>
        <ActionBar/>
        <p>Login</p>
        <h2>Please enter your details</h2>
        <p>Username</p>
        <input type="text" name="" id="username" />
        
        <p>Password</p>
        <input type="text" name="" id="password" />
        <div>Enter correct details</div>
        <button>Login</button>        
        </>
    )
}
export default LoginError