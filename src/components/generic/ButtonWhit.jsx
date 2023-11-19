import React from 'react'

const ButtonWhit = ({text, url}) => {
  return (
    <a className="btn-transparent" href={url}>
        {text}
        <i className="fa-solid fa-right-to-bracket"></i>
    </a>
  )
}

export default ButtonWhit