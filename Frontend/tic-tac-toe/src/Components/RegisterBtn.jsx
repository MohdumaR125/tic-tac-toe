import Styles from "./Styles.module.css"

const RegisterBtn = (props) =>{
    const {handleClick}=props;
    return(
        <>
        <button onClick={handleClick} className={Styles.registerbtn}>Register</button>
        </>
    )
}
export default RegisterBtn