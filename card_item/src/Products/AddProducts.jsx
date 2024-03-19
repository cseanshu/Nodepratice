import { useState } from "react";

const AddProducts=()=>{
    const [formData,setFormData]=useState({
        title:'',
        thumbnail:'',
        price:'',
        catogery:'',
        brand:'',
        discountPercentage:''
    })
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData)
        addProducts(formData);
        setFormData({
            title:'',
            thumbnail:'',
            price:'',
            category:'',
            brand:'',
            discountPercentage:''
        })
    }
    const handleInputChange=(e)=>{
        const {name,value}=e.target;
        console.log("name aur value hai",name,value)
      
        setFormData({
            ...formData,
           [name]:value
        })
    }
   
    const addProducts=async(data)=>{
        const requestOption={
            method:'POST',
            headers:{
                'content-Type':'application/json',
            },
            body:JSON.stringify(data)
           
        }
       try{
        // const res=await fetch('http://localhost:8080/products',requestOption)
        // jab server par developy ho jayega to direct /se access karenge
        const res=await fetch('/products',requestOption)
        const responseData=await res.json();
        console.log(responseData);
       }
       catch(err){
        console.log(err);
       }
    }
return (
    <>
       <h1 className="addproduct-heading">Add Products</h1>

      <div className="form-container">
      <form className="my-form" onSubmit={handleSubmit}>
        <label htmlFor="title">
            Title: <br/>
            <input 
            id="title"
            type="text"
             name="title"
             value={formData.title} 
             onChange={handleInputChange}  
             />
        </label> <br/>
        <label htmlFor="thumbnail">
            thumbnail: <br/>
            <input 
            id="thumbnail"
            type="text"
            name="thumbnail"
             value={formData.thumbnail} 
             onChange={handleInputChange}  

             />
        </label> <br/>

        <label htmlFor="price">
            price: <br/>
            <input
            id="price"
             type="number"
             name="price"
             value={formData.price} 
             onChange={handleInputChange}/>
        </label> <br/>
        <label htmlFor="category">
            category: <br/>
            <select  
             id="category"
             name="caegory"
             value={formData.category} 
             onChange={handleInputChange}  
            >
                <option>choose</option>
                <option value="tablet" name="tablet">tablet</option>
                <option value="smart-phone">smart-phone</option>
                <option value="laptops">laptops</option>
            </select>
        </label> <br/>
        <label htmlFor="brand">
            Brand: <br/>
            <select 
            id="brand"
            name="brand"
            value={formData.brand}
            onChange={handleInputChange}

            >
                <option>choose</option>
                <option>Apple</option>
                <option>samsung</option>
                <option>redmi</option>
            </select>
        </label> <br/>
        <label htmlFor="discountPercentage">
            discount: <br/>
            <input
            id="discountPercentage"
            type="number" 
            name="discountPercentage"
            value={formData.discountPercentage}
            onChange={handleInputChange}
            />
        </label> <br/>
       <button type="submit">Add</button>

        
      </form>
      </div>
    </>
)
}
export default AddProducts