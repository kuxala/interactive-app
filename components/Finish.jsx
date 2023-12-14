import React from "react";



function Finish({clicked}){
    return (
        <div className="container">
            <img src='./images/ilustration.svg' className="ilustration"/>
            <h2 className="h2-text">You selected {clicked} out of 5</h2>
            <h1 className="thank-you">Thank you</h1>
            <p className="p-text">
                We appreciate you taking the time to give a rating. 
                If you ever need more support, don’t hesitate to get in touch!
            </p>     
        
      </div>
    )
}

export default Finish;