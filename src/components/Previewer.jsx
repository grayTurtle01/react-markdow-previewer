const Previewer = ({resizePreviewer, previewerBig})=> {
    return(
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
      
        <div id="previewer" ></div>

      </div>
    )
}

export default Previewer