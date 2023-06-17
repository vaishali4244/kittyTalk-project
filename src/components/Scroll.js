import React from "react";


const Scroll = (props) => {
    return (
        <div style ={{overflowY:'scroll',border: '2px solid yellow', height: '420px', borderStyle:'none'}}>
            {props.children}
        </div>
    )
}
export default Scroll;