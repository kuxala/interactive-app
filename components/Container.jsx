

export default function Container({nextPage, setClicked, clicked}){
  
  const arr = [1,2,3,4,5];
    return (
        <div className="container">
          <img src="./images/icon-star.svg" className="star"/>
          <h1 className="header-h1">How did we do?</h1>
          <p className="header-p">
            Please let us know how we did with your support request.
            All feedback is appreciated to help us improve our offering!
          </p>
          <div className="rating">
            {arr.map(item => <span onClick={()=> setClicked(item)} style={clicked==item ? {backgroundColor:"#353D3E"} : {}}><p>{item}</p></span>)}
          </div>
          <button onClick={nextPage}>SUBMIT</button>
          
        </div>
      )
}