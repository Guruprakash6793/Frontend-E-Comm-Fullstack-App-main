import React from 'react';


function Card({product}) {
    console.log(product)
  return(

             <div className="card-body" > 
                  <img  src={product.image} className="card-img-top embed-responsive-item" alt="Casual-Shirt" />
                   
                   <div className="card-body">
                       <h6 className="card-title">{product.title} hello</h6>
                   <p className="card-text">{product.description}</p>    
                   </div>
                   </div>
               

        
    )
}

export default Card