import Styles from "./Styles.module.css"


const Board = () =>{
    return (
        <div className={Styles.board}>
            <div>O</div>
            <div>X</div>
            <div>X</div>
            <div>O</div>
            <div>O</div>
            <div>X</div>
            <div>X</div>
            <div>O</div>
            <div>X</div>
        </div>
    )
}
export default Board