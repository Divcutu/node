import express from "express";
import router from "./router/index.js";

const app = express();

app.use(express.urlencoded());
app.use(express.json());
// 静态服务，将静态资源暴露给用户
app.use(express.static('./static'));

app.use('/api/v1', router);

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
})