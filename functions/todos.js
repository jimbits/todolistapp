 import path from 'path';
 import fs from 'fs/promises'

 
export const handler = async function (event, context) {
   console.log('event')
   console.log(event.httpMethod)
  const url = 'functions/db/todos.json'
  const filePath = path.resolve(path.dirname('./'),url);
 
 const data = await fs.readFile(filePath, 'utf-8')
  
  return {
    statusCode: 200,
    headers: {
      'Content-Type': 'application/json',
    },
    body: data
  };
};



 