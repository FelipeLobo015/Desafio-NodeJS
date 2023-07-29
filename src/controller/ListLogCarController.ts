import { Request, Response} from "express"
import { ListLogCarService } from "../services/ListLogCarService"

class ListLogCarController {
    async handle(request: Request, response: Response){
        
        const service = new ListLogCarService();
        const result = await service.execute()
        
        return response.json(result)
    }
}

export { ListLogCarController }