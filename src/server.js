require("dotenv").config()
import { GraphQLServer } from "graphql-yoga";
import logger from "morgan";
import schema from "./schema";

const PORT = process.env.PORT || 21456; 

// GraphQLServer에는 express 서버가 내장되어있다.
const server = new GraphQLServer({schema});

// liveschema가 계속 polling 하기때문에 post 요청이 계속온다.
server.express.use(logger("dev"));

// 다음과 같은 port로 서버시작 후 callback 함수 실행으로 주소 및 콘솔로그 출력 
server.start({port:PORT}, () => console.log(`Server running on port http://localhost:${PORT}/`) )
