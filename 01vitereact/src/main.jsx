import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Chai from './Chai.jsx'


function Temp(){
  return (<div>
    <h1>first</h1>
    <h2>second</h2>
  </div>)
  
}

const reactelement=React.createElement(
  'a',
  {href: 'https://google.com',target:'_blank'},
  'click me to visit google'
)

ReactDOM.createRoot(document.getElementById('root')).render(
  
    reactelement
 
)
