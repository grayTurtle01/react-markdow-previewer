const ToolBar = ({title, resize, isBig})=>{
    return(
        <div className="toolbar">
          <div>
            <i className="fab fa-markdown"></i> {title}
          </div>
            {
              isBig ?
              <i className="fa fa-compress" onClick={resize}></i> : 
              <i className="fa fa-arrows-alt" onClick={resize}></i>
            }
        </div>
    )
}

export default ToolBar;