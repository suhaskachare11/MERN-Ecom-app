
import React, { useEffect } from 'react'
import { useState } from 'react'
import styled from 'styled-components'
import Product from './Product'
import axios from 'axios'

const Container = styled.div`
    display:flex;
    padding:20px;
    flex-wrap:wrap;
    justify-content:center;
`

const Products = ({cat , sort , filters}) => {
  const[products,setProducts] = useState([]);
  const[filteredProducts , setFilteredProducts] = useState([])

  useEffect(()=>{
      const getProducts = async () => {
        try {
          const res = await axios.get( cat ? `http://localhost:5000/api/products?category=${cat}`: "http://localhost:5000/api/products")
          setProducts(res.data)
        } catch (err) {
          console.log(err)
        }     
      }
      getProducts();
  },[cat])



  useEffect(()=>{
     cat && setFilteredProducts(
       products.filter(item=>Object.entries(filters).every(([key,value])=>
             item[key].includes(value)
        )
       )
     ) 
  },[cat,products,filters])

  useEffect(() => {
    if (sort === "newest") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.createdAt - b.createdAt)
      );
    } else if (sort === "asc") {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => a.price - b.price)
      );
    } else {
      setFilteredProducts((prev) =>
        [...prev].sort((a, b) => b.price - a.price)
      );
    }
  }, [sort]);

  return (
    <Container>
        { cat ?
           filteredProducts.map((item)=>(
                <Product item={item} key={item.id}/>
            )) :
            products.map((item)=>(
              <Product item={item} key={item.id}/>
          ))
        }
    </Container>
  )
}

export default Products