import "./codecontainer.css"

import {useRef, useEffect, useState} from "react"
import {db} from "../../App"
import {ref, onValue, set} from "firebase/database";

function CodeContainer({opponent}) {
    const textRef = useRef(null);
    const opponentRef = useRef(null);

    const [playerText, setPlayerText] = useState("");
    const [opponentText, setOpponentText] = useState("");

    /* HANDLES EDITOR KEYBOARD INPUT: (E.G) TAB KEY TO TAB CHAR INSTEAD TAB FUNCTION */
    useEffect(() => {
        let element = textRef.current;

        if (element !== null) {
            element.addEventListener('keydown', function(event) {
                if (event.keyCode === 9) {
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

    useEffect(() => {
        const dbPlayerRef = ref(db, '/games/test/player1');
        set(dbPlayerRef, playerText);
    }, [playerText])

    /* DATABASE CALLBACK HOOKS */
    useEffect(() => {
        const dbOpponentRef = ref(db, '/games/test/player1'); 
        onValue(dbOpponentRef, (snapshot) => {
            const data = snapshot.val();
            setOpponentText(data);
        });
    }, []);

    /* UPDATING OPPONENT TEXT HOOKS */
    useEffect(() => {
        const opponentElement = opponentRef.current;
        
        if (opponentElement !== null) {
            opponentElement.value = opponentText;
        }
    }, [opponentText]);

    if (opponent != null) {
        return (
            <div className="code-container box">
                <textarea ref={opponentRef} readOnly id="opponent-text"/>
            </div>
        )
    }
    
    return (
        <div className="code-container box">
            <textarea onChange={() => setPlayerText(textRef.current.value)} ref={textRef} spellCheck="false"/>
        </div>
    )
}

export default CodeContainer;