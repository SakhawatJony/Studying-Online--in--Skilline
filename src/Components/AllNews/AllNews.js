import React from 'react';
import news from './../../image/Group 40.png'
import news1 from './../../image/Rectangle 33.png'
import news2 from './../../image/Group 42 (1).png'
import news3 from './../../image/Group 43.png'
import SingleNews from '../SingleNews/SingleNews';

const AllNews = () => {
    const resources = [
        {
            name: 'Class Technologies Inc. Closes $30 Million Series A Financing to Meet High Demand',
            btn: 'PRESS RELEASE',
            description: 'Class Technologies Inc., the company that created Class,...',
            img: news1
        },
        {
            name: 'Zoom’s earliest investors are betting millions on a better Zoom for schools',
            btn: 'News',
            description: 'Zoom was never created to be a consumer product. Nonetheless, the...',
            img: news2
        },
        {
            name: 'Former Blackboard CEO Raises $16M to Bring LMS Features to Zoom Classrooms',
            btn: 'News',
            description: 'This year, investors have reaped big financial returns from betting on Zoom...',
            img: news3
        }
    ]
    return (
        <div  className='container mt-5'>
            <h5 style={{color: '#2F327D'}}>Lastest News and Resources</h5>
            <p>See the developments that have occurred to Skillines in the world</p>
                <div className="row  mt-5">
                <div className="col-12 col-md-6">
               <img style={{width:'100%'}} alt="" src={news} /> 
               <div style={{textAlign: 'justify'}} className='mt-4'><button type="submit" style={{background: '#F4C467'}} className="  mb-3 text-white btn btn-md rounded-pill fw-bold">News</button>
               <h6>Class adds $30 million to its balance sheet for a Zoom-friendly edtech solution</h6>
               <p>Class, launched less than a year ago by Blackboard co-founder Michael Chasen, integrates exclusively...</p>
               <a href=""className=''>Read more</a>
               
               </div>
                
                </div>

                <div className='col-12 col-md-6'>
                  {
                      resources.map(resource=><SingleNews
                      key={resource.name}
                        resource={resource}

                      
                      ></SingleNews>)
                  }
                </div>
              
                
               
            </div>
           
        

       
        </div>
    );
};

export default AllNews;