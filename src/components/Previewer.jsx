import ToolBar from './ToolBar'

const Previewer = ({resizePreviewer, previewerBig})=> {
    return(
    <div>

        <ToolBar title={"Previewer"}
                resize={resizePreviewer}
                isBig={previewerBig} />
      
        <div id="previewer" ></div>

    </div>
    )
}

export default Previewer