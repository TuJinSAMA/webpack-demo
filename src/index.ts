import './style/index.css'
const greet = (name: string) => {
  console.log(`hello ${name}!`);
}
greet('gyq')

const node = document.createElement('span')
node.textContent = 'hello webpack'
document.body.appendChild(node)