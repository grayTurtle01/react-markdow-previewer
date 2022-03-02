import React from 'react' 
import {marked} from 'marked'

import './App.css'

marked.setOptions({
      breaks:true
})

class App extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      input: '# Hello from State \n## Sub Heading \n [Link](http://x.com) \n\n `alert("hello js")` \n  ```\nlet x = 42; \nalert(x)\n```\n- first\n- second\n > Dont be Evil\n **bold text**\n\n ![Imge](https://cdn-images-1.medium.com/max/1200/1*MotlWcSa2n6FrOx3ul89kw.png) ',
      preview : '',
      editorBig: false,
      previewerBig: false,
      
    }
  }

  componentDidMount = () => {

    let html = marked.parse(this.state.input)
    
    this.setState({
      preview: marked.parse(this.state.input)
    })

    document.querySelector("#preview").innerHTML = html
  }

  handleChange = (e) => {
    let input = e.target.value

    let html = marked.parse(input)
          
    this.setState( (state, props) =>({
        input: input,
        preview: html
      })
    )

    document.querySelector("#preview").innerHTML = html

  }

  resizeEditor = () => {
    let editor = document.querySelector("#editor")

    if( this.state.editorBig == false){
      editor.style.height = "500px"
      this.setState({
        editorBig: true
      })
    }
    else{
      editor.style.height = "300px"
      this.setState({
        editorBig: false
      })
    }
    
  }

  resizePreviewer = () => {
    let previewer = document.querySelector("#preview")

    if( this.state.previewerBig == false){
      previewer.style.height = "500px"
      this.setState({
        previewerBig: true
      })
    }
    else{
      previewer.style.height = "300px"
      this.setState({
        previewerBig: false
      })
    }
    
  }



  render(){
    return(
      <div className="d-flex justify-content-around mt-3 container">
      
        <div>
        
          <div className="toolbar">
            <div>
              <i className="fab fa-free-code-camp"></i> Editor
            </div>
              { this.state.editorBig ?
                <i className="fa fa-compress" onClick={this.resizeEditor}></i>:
                <i className="fa fa-arrows-alt" onClick={this.resizeEditor}></i>
              }
          </div>

          
          <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
          
        </div>


        <div>
        
          <div className="toolbar">
            <div>
              <i className="fab fa-free-code-camp"></i> Previewer
            </div>
              {
                this.state.previewerBig ?
                <i className="fa fa-compress" onClick={this.resizePreviewer}></i> : 
                <i className="fa fa-arrows-alt" onClick={this.resizePreviewer}></i>
              }
          </div>
        
          <div id="preview" ></div>

        </div>
        
      </div>
    )
  }
}



export default App;
