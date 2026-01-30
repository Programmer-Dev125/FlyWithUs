import { useRef, useState, useEffect } from "react";
export default function TextGenerator({finalString, styles, type, lastNumber}){
    
    const [text, setText] = useState(""); 
    const [number, setNumber] = useState(0);  
    const currentIndex = useRef(0);
    const numberRef = useRef(0);
    const timeoutRef = useRef(null);


    useEffect(() =>{

        function recursiveFn(){

            if(type == "text"){
                
                if(currentIndex.current < finalString.length){

                    setText((prev) => {
                        const mainText = prev + finalString[currentIndex.current];
                        currentIndex.current++;
                        return mainText;
                    });

                    timeoutRef.current = setTimeout(recursiveFn, 50);
                }
            }else if(type == "number"){
                if(numberRef.current < lastNumber){
                    numberRef.current++;
                    setNumber(numberRef.current);
                    timeoutRef.current = setTimeout(recursiveFn, 50);                    
                }
            }

        }

        recursiveFn();

        return () => {
            clearTimeout(timeoutRef.current);
            currentIndex.current = 0;
        }
    }, []);

    return(
        <h2 className={`${styles || ""}`}>{type == "text" ? text : type == "number" ? number : ""}</h2>
    )
}