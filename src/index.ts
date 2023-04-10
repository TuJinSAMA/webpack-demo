import './style/index.less'
const greet = (name: string) => {
  console.log(`hello ${name}!`);
}
greet('gyq')

const node = document.createElement('span')
node.textContent = 'hello webpack'
document.body.appendChild(node)