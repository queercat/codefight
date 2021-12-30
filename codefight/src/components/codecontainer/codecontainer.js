import "./codecontainer.css"

import {useRef, useEffect} from "react"

function CodeContainer({opponent}) {
    const textRef = useRef(null)
    useEffect(() => {
        let element = textRef.current;

        if (element != null) {
            element.addEventListener('keydown', function(event) {
                if (event.keyCode == 9) {
                    event.preventDefault();
                    let orig = element.selectionStart;
                    element.value = [
                        element.value.slice(0, element.selectionStart),
                        '\t',
                        element.value.slice(element.selectionStart)
                    ].join('');

                    element.selectionStart = orig + 1;
                    element.selectionEnd = orig + 1;
                }
            });
        }
    }, [textRef])

    if (opponent != null) {
        return (
            <div className="code-container box">
                <textarea readOnly id="opponent-text"/>
            </div>
        )
    }
    
    return (
        <div className="code-container box">
            <textarea ref={textRef} spellCheck="false"/>
        </div>
    )
}

export default CodeContainer;