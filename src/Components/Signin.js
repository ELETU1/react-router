import React from 'react'
import { useParams, useLocation} from 'react-router-dom'

const Signin = () => {
    const {username} = useParams();
    const location = useLocation()
    
  return (
    <div>
      <h1 className='text-center py-4'>Welcome {username}</h1>
      {
        location.pathname !== "/signin/Abu-Roslaan" ? <button className="btn btn-info m-4"> Get Membership </button> : null
      }
    </div>
  ) 
}

export default Signin
