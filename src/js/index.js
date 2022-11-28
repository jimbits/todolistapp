async function onGetCategory(){
  // const res = await fetch(`/.netlify/functions/category?type=${document.querySelector('#category').value.trim()}`)
  // 
  const res = await fetch(`/.netlify/functions/todos`)
  const data = await res.json();
  console.log(data)


 
      

 
}

document.querySelector('button').addEventListener('click', onGetCategory)




async function render(todos){
   
    let container = new DocumentFragment()
    container.appendChild(document.createElement('div'))
    let target = document.querySelector('main')
    target.innerHTML = ''
  
    todos.forEach(({action, type, uid, expiry}) => {
      const template = `
      <ul>
      <li>${action}</li>
      <li>${type}</li>
      <li>${uid}</li>
      <li>${expiry}</li>
    <ul>
    `
    container.querySelector('div').innerHTML += template
   
    })
   target.append(container.querySelector('div'))
    
  }
 