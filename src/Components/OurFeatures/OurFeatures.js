import React from 'react';
import featuresBg from './../../image/Group 71.png'
import icons1 from './../../image/01.png'
import icons2 from './../../image/02.png'
import icons3 from './../../image/03.png'

const OurFeatures = () => {
    return (  
        <div className='container mt-5'>
               <h2 className='' style={{color: ' #2F327D'}} >Our 
<span style={{color: '#F48C06'}} > Features</span></h2>
               <p className=" text-secondary ">This very extraordinary feature, can make learning activities more efficient!!!</p>
               <div className="row  pt-5">
               <div className="col-12 col-md-6">
               <img  style={{width:'100%'}} alt="" src={featuresBg}/>
     
               </div>
             
               <div class="col-12 col-md-6  ">
                   <div>
                   <h3 style={{color: ' #2F327D',marginLeft:'-185px'}} >A <span style={{color: '#F48C06'}}>user interface</span> designed <br/> for the classroom</h3>
                   
                   </div>
                  
                  <div className=''>
                  <div className='d-flex align-items-center mt-3'>
                  <img className='border rounded-pill bg-white' height={'60px'} width={'60px'}  alt=""  src={icons3} />
       <h6 className='ps-4 text-secondary'>Teachers don’t get lost in the grid view <br/> and have a dedicated Podium space.
           </h6>
                  </div>
                  <div className='d-flex align-items-center mt-3'>
                  <img className='border rounded-pill bg-white' height={'60px'} width={'60px'}  alt="" src={icons2}/>
       <h6 className='ps-4 text-secondary'>TA’s and presenters can be moved <br/> to the front of the class.

           </h6>
                  </div>
                  <div className='d-flex align-items-center mt-3'>
                  <img className='border rounded-pill bg-white' height={'60px'} width={'60px'} alt="" src={icons1} />
       <h6 className='ps-4 text-secondary'>Teachers can easily see all students<br/> and class data at one time.
           </h6>
                  </div>
                  </div>
                  
               
            
               </div>
              
           </div>
          
       

      
       </div>
           
     
    );
};

export default OurFeatures;