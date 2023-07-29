import axios from "axios"
import  PrismaClient from "../prisma";
interface Car {
    _id: string
    title: string;
    brand: string;
    price: string;
    age: string;
    __v: number
  }

class CreateCarService {
    async execute({ _id, title, brand, price,age, __v}:Car) {
        const url = "http://api-test.bhut.com.br:3000/api/cars"
        const requestCar = {
            title: title,
            brand: brand,
            price: price,
            age: age,
            __v: __v
          };
         
        const response = await axios.post<Car>(url, requestCar)
        
        const dataAtual = new Date();

        const informacao = await PrismaClient.car.create({
            data: {
                car_id: response.data._id,
                datetime: dataAtual    
              },
          });
        return response.data;
    }
}

export { CreateCarService };