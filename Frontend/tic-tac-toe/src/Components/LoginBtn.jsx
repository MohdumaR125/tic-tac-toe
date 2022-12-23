import Styles from "./Styles.module.css"
const LoginBtn = (props) =>{
    const {handleClick}=props;
    return(
        <>
        <button onClick={handleClick} className={Styles.loginbtn}>login</button>
        </>
    )
}
export default LoginBtn