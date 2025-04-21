import React from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../css/style.css'

function FrontPage() {
  return (
    <div>
        <div className='navbarheading bg-primary p-5'>
            <div ><h4>Test Your Skill</h4></div>
        </div>
        <div className='bg-primary p-5'>
            <h1>Online Examination System</h1>
        </div>
        <section className='p-5'>
            <div>
                <div>
                    <Button className='w-50'><Link to='/Admin'><h4>Admin</h4></Link></Button>
                </div>
                <br />
                <div>
                    <Button className='w-50'><Link to='/Register'><h4>User</h4></Link></Button>
                    
                </div>
            </div>
        </section>
    </div>
  )
}

export default FrontPage