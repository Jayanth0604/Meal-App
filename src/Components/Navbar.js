import React from 'react'

function Navbar() {
  return (
   
       

        <div style={{backgroundColor:'#FF5449',float:'left',width:'100%'}}className='navbar'>
            <p>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Home</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Meals</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>About</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Specials</a>
                <a style={{padding:'2em',color:'white',cursor:'pointer'}}>Desserts</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Snacks</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>contact</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Help&Support</a>
                <a style={{padding:'3em',color:'white',cursor:'pointer'}}>Ratings</a>
            </p>

       
    </div>
  )
}

export default Navbar