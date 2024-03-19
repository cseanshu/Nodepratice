import { useEffect, useState } from 'react'
import './App.css'
import ProductStructure from './Products/ProductStructure'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router';
import AddProducts from './Products/AddProducts';
function App() {
  const [ProductData, setProductData] = useState([])
   async function getProductData(){
    try{
      // const data= await fetch('https://dummyjson.com/products');
      const data= await fetch('http://localhost:8080/products');
      const res= await data.json();
      console.log(res);
    setProductData(res);
    }
    catch(err){
      console.log(err)
    }
  }
  useEffect(()=>{
   getProductData();
  },[])
  console.log(ProductData)
  return (
    <>
    <Routes>
     <Route path='/addProducts' element={<AddProducts/>}/>
     <Route path='/' element={<ProductStructure products={ProductData} setProductData={setProductData}/>}/>
    </Routes>
      
    </>
  )
}

export default App
