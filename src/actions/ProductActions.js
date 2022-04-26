import { FETCH_PRODUCTS } from "../Types";


export const fetchProducts = () => async (dispatch) => {
  

  const res = await fetch("http://localhost:5000/api/products/", {
    headers : { 
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    
     }
  });
  
  const data = await res.json();
  console.log(data);
  dispatch({
    type: FETCH_PRODUCTS,
    payload: data,
  });
};