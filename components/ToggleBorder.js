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

  return bordersVisible ? (
    <BsBorder onClick={() => setBordersVisible(!bordersVisible)} size={30} color="#ea2e6e" className="my-auto cursor-pointer" />
  ) : (
    <BsBorderAll onClick={() => setBordersVisible(!bordersVisible)} size={30} color="#ea2e6e" className="my-auto cursor-pointer" />
  )
}

export default ToggleBorder
