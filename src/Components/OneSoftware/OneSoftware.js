import React from 'react';
import { Row } from 'react-bootstrap';
import AllSoftware from '../AllSoftware/AllSoftware';
import invice from './../../image/Group 79.png'
import calender from './../../image/Group 80.png'
import user from './../../image/Group 81.png'

const OneSoftware = () => {


    const software = [
        {
            name: 'Online Billing, Invoicing, & Contracts',
            description: 'Simple and secure control of your organization’s financial and legal transactions. Send customized invoices and contracts',
            img: invice
        },
        {
            name: 'Easy Scheduling & Attendance Tracking',
            description: 'Schedule and reserve classrooms at one campus or multiple campuses. Keep detailed records of student attendance',
            img: calender
        },
        {
            name: 'Customer Tracking',
            description: 'Automate and track emails to individuals or groups. Skilline’s built-in system helps organize your organization ',
            img: user
        }
    ]
    return (
        <>

        <div className='container mt-5'>
                <div>
                <h3 className='' style={{color: '#F48C06'}} >All-In-One <span style={{color: '#2F327D'}} > Cloud Software.</span></h3>
                <p class="text-secondary">Skilline is one powerful online software suite that combines all the tools needed to run a successful school or office.
                               </p>
                </div>

                <Row xs={1} md={3} className="g-4 mt-5">
    {
              software.map(soft=><AllSoftware
              key={soft.name}
              soft={soft}
              
              >

              </AllSoftware>)
    }
                </Row>
               
           
        


        </div>
            
        </>
    );
};

export default OneSoftware;