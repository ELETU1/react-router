import React from 'react'

const Card = ({source, title, desc}) => {
  return (
    <>
        <div className="col-xs-12 col-sm-6 col-md-4 my-4">
            <div class="card">
                <img src={source} class="card-img-top" alt="..." />
                <div class="card-body">
                    <h5 class="card-title">{title}</h5>
                    <p class="card-text">{desc}</p>
                    <a href="#" class="btn btn-primary">Read More</a>
                </div>
            </div>
        </div>
    </>
  )
}

export default Card
