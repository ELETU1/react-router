import React from 'react'
import Card from './Card'
import Data from './ApiData'

const Service = () => {
  return (
    <>
    <h1 className="text-center text-info my-3">Our Services</h1>
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

export default Service;
