import CodeContainer from '../codecontainer/codecontainer';
import './codebody.css'

function Codebody() {
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
                <textarea readOnly className="prompt box">
                    Given the root of a binary tree, invert the tree, and return its root. 
                    
                    Classes:
                    Tree:
                        -> value : int
                        -> parent : Tree()
                        -> left : Tree()
                        -> right : Tree()
                </textarea>
            </div>
            
        </div>
    )
}

export default Codebody;