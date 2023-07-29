import { Request, Response} from "express"
import { ListCarService } from "../services/ListCarService"

class ListCarController {
    async handle(request: Request, response: Response){
        
        const service = new ListCarService();
        const result = await service.execute()
        
        return response.json(result)
    }
}

export { ListCarController }