import React from 'react'
import Card from './Card'
import Data from './ApiData'

const About = () => {
  return (
    <>
        <div className="container">
            <div className="row my-4 d-flex align-items-center">
                <div className="col-xs-12 col-md-6">
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem ipsum perspiciatis tempore hic. Dicta fugit eaque veniam numquam corporis architecto.</p>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iusto tempore mollitia quasi quos odio inventore voluptates quo, sunt quia dolore maxime, quam molestiae aliquid obcaecati.</p>
                </div>

                <div className="col-xs-12 col-md-6">
                    <img src="../images/img5.jpg" style={{width: "500px", objectFit: "contain"}} alt="" />
                </div>
            </div>
        </div>

        {/* Meet Our Team Session */}
        <h1 className="text-center text-info my-4">Meet Our Team</h1>
        <div className="container">
            <div className="row">

            {Data.map( (d) =>{
                return (
                <Card key={d.id} source={d.source} title={d.title} desc={d.desc}/>
                )
            })}

            </div>
        </div>

    </>
  )
}

export default About
