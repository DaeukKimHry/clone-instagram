import { prisma } from "../../../../generated/prisma-client";
// 이런식으로 서버가 prisma에 요청하는것이 사람들이 서버에 직접 요청하는것보다 안전하다.
// prisma Endpoint를 보호할수있다.
// Frontend <-> GraphQL API Server(Prisma) <-> Database
export default {
    Query:{
        sayHello: async() => {
            console.log(await prisma.users());
            return "HELLO";
        } 
    }
}