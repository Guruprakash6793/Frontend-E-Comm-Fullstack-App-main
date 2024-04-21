import React, {useState} from "react";
import axios from "axios"
import { NavLink } from "react-router-dom";
import { FaAnglesLeft } from "react-icons/fa6";


const ProductForm = ()=>{


    const[title,setTitle] = useState("")
    const[description,setDescription] = useState("")
    const[productpic,setPicture] = useState(null)

    

    const handleSubmit = async(e)=> {
        e.preventDefault();
        const formData = new FormData()
        formData.append("title",title)
        formData.append("description",description)
        formData.append("productpic",productpic)
        
        
   
        if(title === ''){
            alert("Please enter Title of the produt")
        }
        else if(description === ''){
            alert("Please enter Description")
        }
        else if( productpic === ''){
            alert("Please upload the image")
        }
        else{

            try{
                const res = await axios.post("http://localhost:4000/uploadImage", formData,
               { headers: {
                    "Content-Type": "multipart/form-data",
                  }
                }
            ) 
        console.log(res.data)
                
        alert("Product Added Successfully...")
            }catch(err){ 
                console.log(err)
            }
            
        }
           
    //      try{
    //    const res = await axios.post("http://Localhost:4000/upload",{title,description,productpic}) 
    //     console.log(res.data)
    //     alert("Product Added Successfully...")
    //         }
    
    //    catch(err) {
    //     console.log(err)
    //    }
   
}
    return(
        <>
        <div className="container">
            <button className="btn btn-success"><NavLink to="/products" style={{color:"white"}}><FaAnglesLeft /></NavLink></button>
                <br />
                <form  onSubmit={handleSubmit} className="product_form">  
                        <h3 style={{color:"white"}}>Adding Products</h3><hr style={{border:"2px solid white"}} />
                        <label for="title">Title of Product</label><br />
                        <input  type="text" id="title" name="title" value={title} onChange={(e)=>{setTitle(e.target.value)}} />
                        <br /><br />
                        <label for="description">Description</label><br />
                        <input  type="text" id="description" name="description" value={description} onChange={(e)=>{setDescription(e.target.value)}} />
                        <br /><br />
                        <label for="productpic">Product Image</label><br />
                        <input  type="file" id="productpic" name="productpic" accept="image/*" onChange={(e)=>{setPicture(e.target.files[0])}} />    
                        <br /><br />
                        <br />
                        <button className="btn btn-danger" type="submit">Add</button>
                        <button className="btn btn-success" type="reset" onClick={(e)=>{
                            e.preventDefault();
                            setTitle('');
                            setDescription('');
                         
                            
                        }}>Reset</button>
                </form>  
                
                </div>  
              
        </>
    
    )

}

export default ProductForm;