import express, { Router } from "express";
import serverless from "serverless-http";

const api = express();

const router = Router();

const mySecret = process.env.MY_SUPER_SECRET;
console.log(mySecret);

router.get("/secret", (req, res) => {
  res.json({
    message: "Shhh... this object contains my biggest secret.",
    mySecret: `${mySecret}`,
  });
});

api.use("/api/", router);

export const handler = serverless(api);
