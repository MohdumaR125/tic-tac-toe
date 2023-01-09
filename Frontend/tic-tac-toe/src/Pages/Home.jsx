import { useEffect } from "react";
import { useState } from "react"
import PlayBtn from "../Components/PlayBtn";
import Styles from "../Components/Styles.module.css"


const Home = () => {
    const {data,setData}= useState([]);
    useEffect(()=>{
        getData();
    },[])

    const getData = () => {

    }

    const playOpponent = (e) => {
        
    }
    return(
        <>
        <div>
            <h2>Your Games</h2>
            <div>
            {
                data.map((el)=>{
                    <div>
                        <h3>Game with {el.oponent}</h3>
                        <p>{el.move_comment}</p>
                        <p>{el.time}</p>
                        <PlayBtn handleClick={playOpponent} id={el.id}/>
                    </div>       
                })
            }
            </div>
        </div>
        </>
        
    )
}
export default Home