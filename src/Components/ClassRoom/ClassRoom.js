import React from 'react';
import group from './../../image/Group 17.png'

const ClassRoom = () => {
    return (
        <div style={{marginTop:'100px'}} className='container'>
                <div className="row">
                <div style={{textAlign: 'justify'}} className="col-12 col-md-6 text-secondary">
                <h2 style={{color: '#2F327D'}}>Everything you can do in a physical classroom, <span  style={{color: '#F48C06'}}> you can do with Skilline</span></h2><br/>
                <p>Skilline’s school management software helps traditional and online schools manage scheduling, attendance, payments and virtual classrooms all in one secure cloud-based system.</p>
               <a   href=""className='pt--2'>Learn more</a>
                </div>
              
                <div class="col-12 col-md-6 ">
               
                <img style={{height:'300px', width:'80%'}}alt=""  src={group} />
              
                  
               
            </div>
           
        


        </div>
        </div>
    );
};

export default ClassRoom;