import React from 'react';
import './Main.css';
import {Button} from 'react-bootstrap';


const Main=()=>{

    return (
        <>
        <div className='upper__body'>
            <h2>Hello Josh</h2>
            <p className="welcome-p">It’s good to see you again.</p>
            <img className="img-fluid hello-boy-img" src={require('./assets/boy.svg')}/>

        </div>

        <div className="upper__body1">
           <div >
               <img src={require('./assets/course1.png')}/>
           </div>
           <div> 
               Amit Kumar 
           </div>
           <div >
              <Button  style={{width:'100px',height:'30px',backgroundColor:'black',borderRadius:'10px',color:'white'}}>Continue</Button>
           </div>
      
        </div>
      

      
        

     <div className="filter-area">
      
     <h2 className="filters-title" style={{marginTop: "1.5em"}}>courses </h2>
<div className="filter-tabs-area">
    <a className="filters" href="#">All Courses</a>
<a className="filters" href="#">The Newest</a>
<a className="filters" href="#">Top Rated</a>
<a className="filters" href="#">Most Popular</a>
</div>
    </div>

<div className="courses-area">

<div className="upper__body1">
           <div >
               <img src={require('./assets/course1.png')}/>
           </div>
           <div> 
               Amit Kumar 
           </div>
           <div >
              <Button  style={{width:'100px',height:'30px',backgroundColor:'black',borderRadius:'10px',color:'white'}}>Continue</Button>
           </div>
      
        </div>


        <div className="upper__body1">
           <div >
               <img src={require('./assets/course1.png')}/>
           </div>
           <div> 
               Amit Kumar 
           </div>
           <div >
              <Button  style={{width:'100px',height:'30px',backgroundColor:'black',borderRadius:'10px',color:'white'}}>Continue</Button>
           </div>
      
        </div>


        <div className="upper__body1">
           <div >
               <img src={require('./assets/course1.png')}/>
           </div>
           <div> 
               Amit Kumar 
           </div>
           <div >
              <Button  style={{width:'100px',height:'30px',backgroundColor:'black',borderRadius:'10px',color:'white'}}>Continue</Button>
           </div>
      
        </div>

        <div className="upper__body1">
           <div >
               <img src={require('./assets/course1.png')}/>
           </div>
           <div> 
               Amit Kumar 
           </div>
           <div >
              <Button  style={{width:'100px',height:'30px',backgroundColor:'black',borderRadius:'10px',color:'white'}}>Continue</Button>
           </div>
      
        </div>

</div>



    </>

    )
}

export default Main;