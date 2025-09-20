import axios from "axios";

const storeApi = axios.create({
    baseURL:"https://fakestoreapi.com",
    headers:{
        "Content-Type":"application/josn",
    }
})

export default storeApi;

// Get all categories
export const getAllProductCategories = async () => {
  const response = await storeApi.get("/products/categories");
  return response.data;
};

// Get products by category
export const getProductsByCategory = async (categoryName) => {
  const response = await storeApi.get(`/products/category/${categoryName}`);
  return response.data;
};