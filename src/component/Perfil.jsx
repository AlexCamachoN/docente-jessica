import React from 'react'
import perfil from './jeka.jpeg'

const Perfil = () => {
  return (
    
    <div>           
            <img src={perfil} alt="" height='170' 
            style={{borderRadius:'50%',
             border:'', 
             boxShadow:'0px 0px 50px 0px rgba(0, 0, 0, 0.8)' }} />   
             <div>
                <h3>Jessica Rivas Garcia</h3>
                <p>Licenciada en Ciencias Sociales y Educación</p>  
                <p>Ver currículo 
                 <a href="https://drive.google.com/file/d/1jcYmfN9os8KPhduPXr4HWLl8ZN1QhpPj/view?usp=sharing" 
                target="_blank"
                > Click aquí</a> 
                </p>
            </div>             
    </div>
  )
}

export default Perfil