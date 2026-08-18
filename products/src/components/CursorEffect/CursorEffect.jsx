import React, {useEffect} from "react";

function CursorEffect(){

    useEffect(() => {
        const cursor =document.querySelector(".custom-cursor")

        const mouseCursor =(e) => {
            cursor.style.left=e.clientX + "px";
            cursor.style.top=e.clientY + "px"
        };
        

        window.addEventListener("mousemove" , mouseCursor)

        return()=>{
            window.removeEventListener("mousemove" , mouseCursor)
        }        
    },[])
    return(<>
    <div className="custom-cursor"></div>
    </>)
}

export default CursorEffect;



