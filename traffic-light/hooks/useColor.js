import {useState, useEffect} from "react";

function useLig(speed){
    const [color, setColor] = useState("red")
    const [counter, setCounter] = useState(1)

    useEffect(()=>{
        const id = setInterval(()=>{
            if(color === "red"){
                setColor("green")
                setCounter(1)
                return;
            }
            if(color === "yellow"){
                setColor("red")
            }
            if(color === "green"){
                setColor("yellow")
            }
            setCounter(prev => prev + 1)
        },(speed || 1000))

        return () => {
            clearInterval(id)
        } 
    }, [color])

    return {
        color,
        counter
    }
}

export default useLig