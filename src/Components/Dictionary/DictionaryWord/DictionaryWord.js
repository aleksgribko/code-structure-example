import React from 'react'
import { useSelector } from "react-redux";

export default function DictionaryWord() {

  const word = useSelector((state) => state.global.word);

 

  const wordRes = word?.results[0]

console.log(word)
  console.log(wordRes)
  if(!wordRes) return <div></div>



  return (
    <div>
      <h2>WORD:{wordRes.word}</h2>
      <p>Description:{wordRes.lexicalEntries[0]?.entries[0]?.etymologies[0]}</p>
    </div>
  )
}
