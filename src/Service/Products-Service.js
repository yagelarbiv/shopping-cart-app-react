import axios from "axios";

export default class ProductsService {

    ProductsURL= "http://localhost:3001/products";
    CategoriesURL = "http://localhost:3002/Categories";

  getProducts(){
    return axios.get(this.ProductsURL)
  }
  getCategories(){
    return axios.get(this.CategoriesURL)
  }

  async getProductsByCategory(category){
    return await axios.get(`${this.ProductsURL}?category=${category}`)
  }

  async createProduct(product) {
    return await axios.post(this.ProductsURL, product);
  }

  updateProduct(product){
    return axios.patch(`${this.ProductsURL}/${product.id}`, product);
  }

  async deleteProduct(id) {
    return axios.delete(`${this.ProductsURL}/${id}`);
  }
}
/* 
const response = await this.axios.post(`${this.ProductsURL}/products`, product);
    return response.data;
*/