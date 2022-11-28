import path from "path";
import fs from "fs/promises";

export const handler = async function (event, context) {
  console.log(event);
  if (event.httpMethod === "POST") {
    writeToFile(test)
  }

  return {
    statusCode: 200,
    body: JSON.stringify({ message: "POST: add new todo item" }),
  };
};

/**
 *  Write new to do item to db/todos.json file.
 *  Read file.
 *  Append new to do item check all fields are filled out.
 *  Sanatize input makes sure no injected script/mallisous code...
 */
async function writeToFile(todo) {
  
  const url = "functions/db/todos.json";
  const filePath = path.resolve(path.dirname("./"), url);
  let  data = await fs.readFile(filePath, "utf-8");  
   data =  JSON.parse(data) 
//    data.push(todo)
 
//   const jimotay = await fs.writeFile(filePath, JSON.stringify(data))
   console.log(data)
}

const test = {
    uid: "aaaaaaa",
    action:"aaaaaaa",
    type: "jim",
    expiry: "2022-03-24T07:26:02Z",
    status: true,
  };
