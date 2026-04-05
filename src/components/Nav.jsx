import React, { useEffect, useState } from 'react'
import { NavLink, useLocation } from 'react-router'

const breakpoint = 768

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const route = useLocation()
    const [isMobile, setIsMobile] = useState(false)
  
    useEffect(() => {
      const checkMobile = () => setIsMobile(window.innerWidth <= breakpoint);
      checkMobile();
      window.addEventListener('resize', checkMobile);
      return () => window.removeEventListener('resize', checkMobile);
    }, [breakpoint])

  return (
    <nav className={`nav-bar ${route.pathname === "/" ? 'homepage' : ''}`}>
      <div className="container">
        <div className='menu'>
          <div>
            <NavLink to={'/'} className={({ isActive }) => `${isActive ? 'active' : ''} header-lg`}>
              <div className="logo-icon">
                <img src={'/icon.png'} alt="" />
              </div>
              세부클럽
            </NavLink></div>
          <div className='btn' onClick={() => setIsMenuOpen(true)}>메뉴</div>
        </div>
        <ul className={`${isMenuOpen ? "open" : ""}`}>
          <div className="close" onClick={() => setIsMenuOpen(false)}>&times;</div>
          <li><NavLink to={'/'} className={({ isActive }) => `${isActive ? 'active' : ''} header-pc`}>
            {!isMobile && <div className="logo-icon">
              <img src={'/icon.png'} alt="" />
            </div>}
            세부클럽</NavLink></li>
          <li><NavLink to={'/cebu-club'} className={({ isActive }) => isActive ? 'active' : ''}>세부클럽•세부KTV•세부JTV</NavLink></li>
          <li><NavLink to={'/tip-culture'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀 팁문화</NavLink></li>
          <li><NavLink to={'/philippine-local-food'} className={({ isActive }) => isActive ? 'active' : ''}>필리핀 현지 대표 음식</NavLink></li>
          <li><NavLink to={'/inquiry'} className={({ isActive }) => isActive ? 'active' : ''}>1:1문의</NavLink></li>
        </ul>
        <h2 className='logo'>세부클럽 • 세부KTV • 세부JTV</h2>
      </div>
    </nav>
  )
}

export default Nav