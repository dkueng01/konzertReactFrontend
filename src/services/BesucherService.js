import axios from "axios"

const PRODUCT_API_URL = "http://localhost:8080/findAllOrders";

class BesucherService{
    getBesucher(){
        return axios.get(PRODUCT_API_URL);
    }

}

export default new BesucherService()