import Axios from "axios";

const baseUrl = "http://127.0.0.1:8001/product" 

export function getProducts(sortChoice){
    return Axios.get(`${baseUrl}/all/sort/${sortChoice}`);
}

export function getProduct(id){
    return Axios.get(`${baseUrl}/view/${id}`);
}

export function addProduct(product){
    return Axios.post(`${baseUrl}/add`, product);
}

export function updateProduct(product, id){
    return Axios.put(`${baseUrl}/update/${id}`, product);
}

export function deleteProduct(id){
    return Axios.delete(`${baseUrl}/delete/${id}`);
}   
