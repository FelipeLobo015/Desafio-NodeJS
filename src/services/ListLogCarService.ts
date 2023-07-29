import PrismaClient from "../prisma"

class ListLogCarService {
    async execute() {
        const carLog = await PrismaClient.car.findMany();
        return carLog;
    }
}

export { ListLogCarService };