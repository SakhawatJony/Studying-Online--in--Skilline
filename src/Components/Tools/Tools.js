import React from 'react';
import TeacherBg from './../../image/Group 122.png'

const Tools = () => {
    return (
        <>
        <div className='container mt-5'>
                <div className="row align-items-center pt-5">
                <div style={{textAlign: 'justify'}} className="col-12 col-md-6 text-secondary">
                <h2 style={{color: '#F48C06'}}>Tools<span  style={{color: '#2F327D '}}> For Teachers <br/> And Learners</span></h2>
                <p>Class has a dynamic set of teaching tools built to be deployed and used during class.
Teachers can handout assignments in real-time for students to complete and submit.</p>
                </div>
              
                <div class="col-12 col-md-6 ">
               
                <img style={{height:'500px',width:'350px'}}alt=""  src={TeacherBg} />
              
                  
               
            </div>
           
        


        </div>
        </div>
            
        </>
    );
};

export default Tools;