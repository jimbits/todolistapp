import path from 'path';
import fs from 'fs/promises'

async function getToDoDB(){
     try {
        let  toDoFile = await fs.readFile('./todos.json', 'utf-8')
        const todos = JSON.parse(toDoFile)
        const filtered = todos.filter(todo => todo.type ==='work')
        return filtered
     } catch (error) {
        throw (error)
     }
}

console.log(await getToDoDB())