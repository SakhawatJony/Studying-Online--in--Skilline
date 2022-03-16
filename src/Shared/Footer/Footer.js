import React from 'react';
import logo from './../../image/Group 111.png'
import line from './../../image/Line 10.png'

const Footer = () => {
    return (
        <div style={{background: '#252641', height:'400px'}} className='mt-5'>
            <div className='row'>
              <div className='col-12 col-md-12'>
                  <div className='d-flex justify-content-center  align-items-center mt-5'>
                      <img src={logo} alt className='pe-5'/>
                      <img src={line} alt/>
                      <h6 className='text-white ps-5' >Virtual Class <br/> for Zoom</h6>
                     
                  </div>
                  <div style={{color: '#B2B3CF'}} className='p-0 mt-5'>
                  <p>Subscribe to get our Newsletter</p>
                  <div className='d-flex justify-content-center  align-items-center'>
                  <input type="email" style={{border: '1px solid #83839A',background: '#252641'}} class=" from-control w-25 rounded-pill"  placeholder="Your Email"></input>
                   <button type="submit" style={{background: 'linear-gradient(105.5deg, #545AE7 19.57%, #393FCF 78.85%)'}} class="ms-3 text-white btn btn-md rounded-pill fw-bold">Subscribe</button>
                  </div>
                  </div>

                  <div style={{color: '#B2B3CF'}} className='mt-5 d-flex justify-content-center  align-items-center'>
                      <p className='ps-2'>Careers</p>
                      <p className='ps-2'><img style={{height:'17px',}} src={line} alt/></p>
                      <p className='ps-2'>Privacy Policy</p>
                      <p className='ps-2'><img style={{height:'17px',}} src={line} alt/></p>
                      <p className='ps-2'>Terms & Conditions</p>
                  </div>
                  <div style={{color: '#B2B3CF'}}>
                      <p>© 2021 Class Technologies Inc. </p>
                  </div>
              </div>
            </div>
           
            
        </div>
    );
};

export default Footer;