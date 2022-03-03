import { marked } from 'marked'
import {useState, useEffect} from 'react'

import './App.css'

// Components 
import Editor from './components/Editor'
import Previewer from './components/Previewer'


const App = ()=>{
    const [input, setInput] = useState('# Hello from State \n## Sub Heading \n [Link](http://x.com) \n\n `alert("hello js")` \n  ```\nlet x = 42; \nalert(x)\n```\n- first\n- second\n > Dont be Evil\n **bold text**\n\n ![Imge](https://cdn-images-1.medium.com/max/1200/1*MotlWcSa2n6FrOx3ul89kw.png) ')
    const [editorBig, toogleEditor] = useState(false)
    const [previewerBig, tooglePreviewer] = useState(false)
    
    
    useEffect( ()=> {
      let html_str = marked.parse(input)
      document.querySelector('#previewer').innerHTML = html_str
      },[input]
    )

    useEffect( ()=> {
      let editor = document.querySelector('#editor')
      if( editorBig ){
        editor.style.height = '600px'
      }
      else{
        editor.style.height = '300px'
      }

    },[editorBig])   

    useEffect( ()=> {
      let previewer = document.querySelector('#previewer')
      if( previewerBig ){
        previewer.style.height = '600px'
      }
      else{
        previewer.style.height = '300px'
      }

    },[previewerBig])   



    function handleChange(e){
      let newValue = e.target.value
      setInput(newValue)
    }
  
    function resizeEditor(){
      toogleEditor(!editorBig)
    }


    function resizePreviewer(){
      tooglePreviewer(!previewerBig)
    }


    return (
      <div className="d-flex justify-content-around mt-3 container">
      
          <Editor input={input}
                  handleChange={handleChange}
                  resizeEditor={resizeEditor}
                  editorBig={editorBig} />

          <Previewer resizePreviewer={resizePreviewer}
                     previewerBig={previewerBig}
                     /> 
          
      </div>

    )
}

export default App