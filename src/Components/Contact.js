import React from 'react'

const Contact = () => {
  return (
    <div>
      <h1 className="text-center text-info my-4">Contact Us</h1>
      <div className="container">
            <div class="mb-3">
                <label class="form-label">Name</label>
                <input type="text" class="form-control mb-3" placeholder="Enter Your Name" />
            </div>
            <div class="mb-3">
                <label class="form-label">Phone Number</label>
                <input type="text" class="form-control mb-3" placeholder="Enter Your Mobile Number" />
            </div>
            <div class="mb-3">
                <label class="form-label">Email address</label>
                <input type="email" class="form-control mb-3" placeholder="Enter Your Email" />
            </div>
            <div class="mb-3">
                <label class="form-label">Example textarea</label>
                <textarea class="form-control mb-3" rows="3"></textarea>
            </div>

            <button className="btn btn-primary mb-3">Submit Feedback</button>
      </div>
    </div>
  )
}

export default Contact
