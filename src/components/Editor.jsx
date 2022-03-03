import ToolBar from './ToolBar'

const Editor = ({resizeEditor, input, editorBig, handleChange})=>{

    return (
    <div>
       <ToolBar title={"Editor"}
                resize={resizeEditor}
                isBig={editorBig} />

        
        <textarea id="editor" 
                  value={input} 
                  onChange={handleChange}                 
         ></textarea>
      
    </div>

    )
}

export  default Editor;