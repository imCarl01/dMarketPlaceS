import storeApi from "./StoreApi";

export const getAllProduct = async()=>{
    const response = await storeApi.get("/products");
    return response.data;
}

export const getAllProductCategories = async()=>{
    const response = await storeApi.get("/products/categories");
    return response.data;
}

export const getSingleProduct = async(id)=>{
    const response =await storeApi.get(`products/${id}`)
    return response.data;
}

export const  getSingleCategory = async(categoryName)=>{
    const response =await storeApi.get(`/products/category/${categoryName}`)
    return response.data
}