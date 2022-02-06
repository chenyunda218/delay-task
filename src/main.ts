import express,{ Express, Request, Response } from 'express';


interface Task {
  id: string;
  channel: string;
  delay: number;
  date: string;
  payload: object;
  url: string;
  token: string;
}

interface TaskReq extends Request {
  body: Task
}


const server: Express = express();
server.use(express.json());

server.get('/',(req: TaskReq ,res: Response)=>{
  console.log(req,res);
  console.log("good");
});