import { useState } from 'react';


const MyForm = ({ action }) => {
    const [myInput, setMyInput] = useState([]);
   
    const handleChange = (e) =>{
        
        setMyInput(e.target.value);
    };

 
    const handleSubmit = (e) =>{
        e.preventDefault();
        action(myInput);
    }
    return(
        <>
        <form onSubmit={handleSubmit}> 
            <label> My Input 
            <input type="text" name="myInput" value={myInput} onChange={handleChange}/>
        </label>
        <button type="submit">submit</button>

      
        
        </form>
        </>
    )

}

export default MyForm;