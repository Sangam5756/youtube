import React from 'react'
import { useSelector } from 'react-redux'

const SideBar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    if(!isMenuOpen) return null;

  return (
    <div className='p-6 py-5  shadow-lg w-48  '>

        
            <ul className='mb-2'>    
                <li>Home</li>
                <li>Shorts</li>
                <li>Videos</li>
                <li>Live</li>
            </ul>
                <hr />
        <h1 className='font-bold pt-5'>Subscriptions</h1>
            <ul className='mb-2'>    
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>z
            <hr />
        <h1 className='font-bold pt-5'>Watch Later</h1>
            <ul>    
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>

    </div>
  )
}

export default SideBar