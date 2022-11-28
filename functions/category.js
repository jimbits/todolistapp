import path from 'path';
import fs from 'fs/promises'


export const handler = async function (event, context) {
 
   const query = event.queryStringParameters.type.trim();
   if(!query){
      return errorResponse({code:505, message:"empty string"})
    }
  
    if (query){
    
      const data = await category(event.queryStringParameters.type)

    
     

       if(data.length === 0){
         return errorResponse({code:505, message:"category not found"})
       }

       if(data.length !== 0){
         return  {statusCode:200, body:JSON.stringify(data)} 
       }
      

    }

   
  
  
};

 
/**
 * 
 * 
 * 
 *  
 */
function errorResponse({message, code}){
 return  {
      statusCode: code,
      body: JSON.stringify({message})
    };
}


async function category(query){
 
   const url = 'functions/db/todos.json'
  const filePath = path.resolve(path.dirname('./'),url);
     try {
        let  toDoFile = await fs.readFile(filePath, 'utf-8')
        const todos = JSON.parse(toDoFile)
        const filtered = todos.filter(todo => todo.type === query)
        return filtered
     } catch (error) {
        return (error)
     }
}

 