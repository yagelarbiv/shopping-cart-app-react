import axios from "axios";

export default class ProductsService {

    ProductsURL= "http://localhost:3000/products";
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
    const response = await this.axios.post(`${this.ProductsURL}/products`, product);
    return response.data;
  }

  updateProduct(product){
    const { id, ...productData } = product;
    return this.axios.patch(`${this.ProductsURL}/${id}`, productData);
  }

  async deleteProduct(id) {
    return axios.delete(`${this.ProductsURL}/${id}`);
  }
}