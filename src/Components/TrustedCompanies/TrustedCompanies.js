import React from 'react';
import Company from './../../image/Group 16.png'

const TrustedCompanies = () => {
    return (
<div className='container'>
        <div className="row  pt-5">
                <div className="col-12 col-md-12  pt-5">
                <p class="text-secondary">Trusted by 5,000+ Companies Worldwide</p>
                <img alt="" src={Company}  style={{width:'80%'}}  />   
                </div>
            </div>
        </div>
            
    );
};

export default TrustedCompanies;