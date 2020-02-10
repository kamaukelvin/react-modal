import React,{useState} from "react";
import MyModal from "./MyModal";
import boy from "./assets/boy.jpg"


const Component2 = ()=>{

  const [modalShow, setModalShow] = useState(false)

  const modalClose =()=>{
    setModalShow(false)
  }
 
    return (
      <>
        <h1>This is another component</h1>
        
       
        <img src={boy} alt="" className="image" onClick={() => setModalShow(true)}/>
      
          <MyModal show={modalShow} onHide={modalClose} />
    
      </>
    );
  }



export default Component2