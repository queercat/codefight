import "./codecontainer.css"

function CodeContainer({opponent}) {
    if (opponent != null) {
        return (
            <div className="code-container box">
                <textarea readOnly id="opponent-text"/>
            </div>
        )
    }
    
    return (
        <div className="code-container box">
            <textarea/>
        </div>
    )
}

export default CodeContainer;