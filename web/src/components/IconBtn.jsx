import React from 'react'

export default function IconBtn({children, props, onclick}) {
  return (
    <button onClick={onclick} className='iconBtn' {...props}>{children}</button>
  )
}
