import React from 'react';
import bg from './../../../image/bg.png'

const Header = () => {
    return (
        <div className='container'>
        <div className="row  pt-5">
                <div style={{textAlign: 'justify'}} className="col-12 col-md-6 justify-content-evenly pt-5">
                <h1  style={{color: '#F48C06'}} >Studying <span style={{color: '#2F327D'}} >Online is now</span></h1>
                <h1 style={{color: '#2F327D'}}>much easier </h1>
                    <p class="text-secondary">Skilline is an interesting platform that will teach <br/> you in more an interactive way.</p>
                        <button type="button" style={{background: '#F48C06'}} class=" text-white btn btn-md rounded-pill fw-bold">Join  for free </button>
                        <button type="button"  class="btn  btn-md fw-bold ms-2 rounded-pill">Watch how it works </button>
                    
                </div>

                <div class="col-12 col-md-6  fw-bold">
                <img
                style={{width:'80%'}}
          alt=""
          src={bg}   
        />
                   
                </div>
               
            </div>
        </div>
    );
};

export default Header;