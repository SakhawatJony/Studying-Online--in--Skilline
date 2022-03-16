import React from 'react';
import { Col, Image, Row } from 'react-bootstrap';
import INSTRUCTORS from './../../image/Group 22.png'
import STUDENTS from './../../image/Group 23.png'

const Skilline = () => {
    return (
        <>
         <div  className='container mt-5'>
                <h3  style={{color: ' #2F327D'}} >What is
 <span style={{color: '#F48C06'}} > Skilline?</span></h3>
                <p  className="text-center text-secondary justify-content-evenly">Skilline is a platform that allows educators to create online classes whereby they can store the course materials online; manage assignments, quizzes and exams; monitor due dates; grade results and provide students with feedback all in one place.</p>
               

                <div className="row  pt-5 g-4">
                <div className="col-12 col-md-6">
                
                <div className='position-relative'>
                <img 
                style={{width:'100%'}}
          alt=""
          src={INSTRUCTORS}  

        /> 
                </div>
        <div style={{marginTop:'-235px',color: '#FFFFFF',marginLeft:'220px'}} className='position-absolute'>
            <h5>FOR INSTRUCTORS</h5>
            <button type="button" style={{color: '#FFFFFF',border: '1px solid #FFFFFF'}} class="  btn btn-md  rounded-pill ">Start a class today </button>
        </div>
                </div>
              
                <div class="col-12 col-md-6 ">
                <div className='position-relative'>
                <img
                style={{width:'100%'}}
          alt=""
          src={STUDENTS}   
        />
                </div>
                  <div style={{marginTop:'-235px',color: '#FFFFFF',marginLeft:'220px'}} className='position-absolute'>
            <h5>FOR STUDENTS</h5>
            <button type="button" style={{background: '#23BDEE',color: '#FFFFFF'}} class="  btn btn-md rounded-pill ">Enter access code </button>
        </div> 
                </div>
               
            </div>
           
        

       
        </div>
            
        </>
    );
};

export default Skilline;