import {Button} from 'react-bootstrap'
import React from 'react'


function mainPage() {
    const alertHandler = ()=> {
    alert(123)
    }
 return (
    <div>
        <h1>Register to our Newsletter to be informed of our latest goodies</h1>
        <form>
            <input type='text' placeholder='username'/>
            <input type='email' placeholder='email'/>
            <input type='password' placeholder='password'/>
            <Button variant='outline-sucess' onClick={()=> alertHandler()}> Send</Button>
        </form>








    </div>
  )
}

export default mainPage