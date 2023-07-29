import axios from "axios"

class ListCarService {
    async execute() {
        const url = "http://api-test.bhut.com.br:3000/api/cars"
        const response = await axios.get(url)
        
        return response.data;
    }
}

export { ListCarService };