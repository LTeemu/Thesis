import { useEffect } from 'react'
import { BsBorderAll, BsBorder } from 'react-icons/bs'

const ToggleBorder = ({ bordersVisible, setBordersVisible }) => {
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
    <button type='button' aria-label='Toggle border' onClick={() => setBordersVisible(!bordersVisible)}>
      {bordersVisible ? <BsBorder style={{ fontSize: '2rem' }} color="#ea2e6e" /> : <BsBorderAll style={{ fontSize: '2rem' }} color="#ea2e6e" />}
    </button>
  )
}

export default ToggleBorder
