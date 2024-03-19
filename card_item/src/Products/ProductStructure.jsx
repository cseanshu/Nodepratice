import Badge from 'react-bootstrap/Badge';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
const ProductStructure=({products,setProductData})=>{

    const deleteProduct=async(id)=>{
        console.log(id);
        const requestOption = {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        };
     try{
        // const res= await fetch(`http://localhost:8080/products/${id}`,requestOption)
        // jab server par developy ho jayega to direct /se access karenge
        const res= await fetch(`/products/${id}`,requestOption)
       if(res.status===204){
        console.log('PRODUCT DELTED')
       }
       setProductData(products.filter((p) => p._id !== id));

     }
     catch(err){
        console.log(err);
     }
    }
    return (
        <>
       {
        products.map((product,index)=>(
            <div key={index} className="main-container">
        <div  className="image-container">
        <img src={product.thumbnail} alt="not found"/>
        <div className='badge-and-like'>
        <Badge pill bg="danger" className='badge-item'>{`${product.discountPercentage}%`}</Badge>
        <button onClick={()=>{deleteProduct(product._id)}}> <FontAwesomeIcon icon={faHeart} style={{color:'white'}}/></button>
      
         </div>
        </div>
        <div className="discription-container"><p>{product.description}</p>
      
        </div>
        <div className="details-container">
            <div className="title">{product.title}</div>
            <div className="price">{product.price}</div>
        </div>
        <div className="details-container">
        <div className="rating-buy">{product.rating}</div>
        <div className="buy">buy+</div>
        </div>
        </div>
        ))
       }
        </>
    )
}
export default ProductStructure