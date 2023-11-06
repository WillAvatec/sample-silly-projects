import React, {useEffect, useState} from "react"
import useLight from "../hooks/useColor"
import './light.css'
function App () {

    const {color, counter} = useLight(2000)

    return (
        <>
            <div className="stop-light">
                <div className="box">
                    <div className={`light ${color === "red" ? "red" : "gray"}`}></div>
                    <div className={`light ${color === "yellow" ? "yellow" : "gray"}`}></div>
                    <div className={`light ${color === "green" ? "green" : "gray"}`}></div>
                </div>
                <div className="stick"></div>
            </div>
            <div className={`counter`}><p>{counter}</p></div>
        </>
    )

}

export default App