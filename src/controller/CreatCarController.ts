import { Request, Response} from "express"
import { CreateCarService } from "../services/CreateCarService";



class CreatCarController {
    async handle(request: Request, response: Response){
        const { _id, title, brand, price, __v, age} = request.body
      
        const service = new CreateCarService();
        try{
            const result = await service.execute({ _id, title, brand, price, __v, age});
         
            return response.json(result)
        }
        catch (err) {
            return response.json({error: err.message})
            
        }
        
       
    }
}

export { CreatCarController }