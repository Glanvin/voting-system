import './style.css'queueMicrotask

document.querySelector('#app').innerHTML = `
  <h1>Hello World</h1>
`

setupCounter(document.querySelector('#counter'))
