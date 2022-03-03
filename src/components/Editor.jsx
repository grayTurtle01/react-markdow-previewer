const Editor = ({resizeEditor, input, editorBig, handleChange})=>{

    return (
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

    )
}

export  default Editor;