import React from 'react'
import SideMenu from './SideMenu'
import Main from './Main'

export default function Layout() {
  return (
    <div className='pt-[60px] flex w-full'>
        <SideMenu />
        <Main />
    </div>
  )
}
