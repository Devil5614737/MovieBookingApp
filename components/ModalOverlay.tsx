import React, { ReactNode } from 'react';

interface PropsI{
    children:ReactNode
}


export const ModalOverlay = ({children}:PropsI) => {
  return (
    <div
    className='top-0 fixed z-50 bg-overlay grid place-content-center w-[100vw] h-[100vh]'
    >{children}</div>
  )
}
