import React from 'react';

const SingleNews = ({resource}) => {
    const {name,description,img,btn}=resource;
    return (
        <div className='d-flex justify-content-evenly align-items-center   '>
            <div>
            <img className='position-relative' style={{width:'100%'}}  alt src={img} /> 
           < button  type="submit" style={{background: '#F4C467',    marginLeft: '-122px',
    marginTop: '70px'}} className="position-absolute   text-white btn btn-sm rounded-pill fw-bold">{btn}</button>
            </div>
            <div className='align-items-center'>
                <h5>{name}</h5>
                <p>{description}</p>
            </div>
            
            
        </div>
    );
};

export default SingleNews;