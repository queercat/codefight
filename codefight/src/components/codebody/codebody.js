import CodeContainer from '../codecontainer/codecontainer';
import './codebody.css'

function Codebody() {
    var default_text = 
`Given the root of a binary tree, invert the tree, and return its root. 
                    
Classes:
Tree:
    -> value : int
    -> parent : Tree()
    -> left : Tree()
    -> right : Tree()
`

    return (
        <div className="code-field-container box">
            <div className="code-body box">
                <CodeContainer/>
                <div className="code-info">
                    <button>Submit</button>
                </div>
                <CodeContainer opponent/>
            </div>
            
            <div className="prompt-field box">
                <textarea readOnly value={default_text} className="prompt box"></textarea>
            </div>
            
        </div>
    )
}

export default Codebody;