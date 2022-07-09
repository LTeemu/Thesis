import { useState, useEffect } from 'react'
import { BsBorderAll, BsBorder } from 'react-icons/bs'

const ToggleBorder = () => {
  const [bordersVisible, setBordersVisible] = useState(false)

  useEffect(() => {
    let divs = document.querySelectorAll('div')
    bordersVisible
      ? divs.forEach((div) => {
        div.classList.add('toggleBorder')
      })
      : divs.forEach((div) => {
        div.classList.remove('toggleBorder')
      })
  }, [bordersVisible])

  return (
    <button aria-label='Toggle border' onClick={() => setBordersVisible(!bordersVisible)}>
      {bordersVisible ? <BsBorder size={40} color="#ea2e6e" /> : <BsBorderAll size={40} color="#ea2e6e" />}
    </button>
  )
}

export default ToggleBorder
