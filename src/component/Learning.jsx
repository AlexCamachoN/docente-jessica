
import React, {useState} from 'react'

const Learning = () => {
    const [show, setShow] =useState(false)
    const [grado, setGrado]=useState(false)

    const handleShw = () =>{
        setShow(!show)
    }
    
    const handleSho =()=>{
        setGrado(!grado)
      }
  return (
    <div>
        Aprendizaje    
    </div>
  )
}

export default Learning