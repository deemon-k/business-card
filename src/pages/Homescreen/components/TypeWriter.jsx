import { useState, useEffect } from 'react'

const useTypewriter = ({ words }) => {
  const data = words.map(word => word.title)
  const [displayText, setDisplayText] = useState('')

  useEffect(() => {
    const typer = async words => {
      for (let i = 0; i < 9999; i++) {
        await new Promise(res => {
          let j = 0
          const word = words[i % words.length]
          const typeInterval = setInterval(() => {
            if (j < word.length) {
              setDisplayText(word.substring(0, j + 1))
              j++
            } else {
              clearInterval(typeInterval)
              res()
            }
          }, 100)
        })
        await new Promise(res => setTimeout(res, 3000))
        setDisplayText('')
      }
    }
    typer(data)
  }, [])

  return displayText
}

const TypeWritter = ({ words }) => {
  const displayText = useTypewriter({ words })
  return <b>{displayText}</b>
}

export default TypeWritter
