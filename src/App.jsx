import { marked } from 'marked'
import {useState, useEffect} from 'react'

import './App.css'

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
        editor.style.height = '200px'
      }

    },[editorBig])   

    useEffect( ()=> {
      let previewer = document.querySelector('#previewer')
      if( previewerBig ){
        previewer.style.height = '600px'
      }
      else{
        previewer.style.height = '200px'
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
      
          <div>

              <div className="toolbar">
                <div>
                  <i className="fab fa-free-code-camp"></i> Editor
                </div>
                  { editorBig ?
                    <i className="fa fa-compress" onClick={resizeEditor}></i>:
                    <i className="fa fa-arrows-alt" onClick={resizeEditor}></i>
                  }
              </div>

              
              <textarea id="editor" 
                        value={input} 
                        onChange={handleChange}
                        className={ editorBig? 'bigSize': ''}
               ></textarea>
            
          </div>


          <div>
          
            <div className="toolbar">
              <div>
                <i className="fab fa-free-code-camp"></i> Previewer
              </div>
                {
                  previewerBig ?
                  <i className="fa fa-compress" onClick={resizePreviewer}></i> : 
                  <i className="fa fa-arrows-alt" onClick={resizePreviewer}></i>
                }
            </div>
          
            <div id="previewer" className={ previewerBig? 'bigSize': ''} ></div>

          </div>
          
      </div>

    )
}

export default App