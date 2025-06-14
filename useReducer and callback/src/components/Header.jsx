import {memo} from 'react'

export default memo(function Header() {
  console.log('header render edildi')
  return(
    <header>baslik</header>
  )
})