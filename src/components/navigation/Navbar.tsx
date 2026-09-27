import { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, ChevronDown, Menu, X } from 'lucide-react'
import vkaLogo from '../../assets/vka-logo.png'
import { servicesData } from '../../data/services'

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const dropdownTimeoutRef = useRef<number | null>(null)
  const location = useLocation()

  const isServicesActive = location.pathname.startsWith('/services')

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true)
      } else {
        setIsScrolled(false)
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menus on route change
  useEffect(() => {
    setMenuOpen(false)
    setDropdownOpen(false)
  }, [location.pathname])

  const handleMouseEnter = () => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current)
    }
    setDropdownOpen(true)
  }

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = window.setTimeout(() => {
      setDropdownOpen(false)
    }, 200)
  }

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="nav-wrap">
      <nav className={`nav ${isScrolled ? 'scrolled-nav' : ''}`}>
        <Link to="/" className="brand" onClick={closeMenu}>
          <img src={vkaLogo} alt="VKA Capital Bridge" className="brand-logo" />
        </Link>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={closeMenu} className={location.pathname === '/' ? 'active-link' : ''}>
            Home
          </Link>
          <Link
            to="/about"
            onClick={closeMenu}
            className={location.pathname === '/about' ? 'active-link' : ''}
          >
            About
          </Link>

          {/* Desktop & Mobile Services Link with Dropdown */}
          <div
            className={`nav-dropdown-item ${dropdownOpen ? 'show-dropdown' : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className={`services-nav-link-wrap ${isServicesActive ? 'active-link' : ''}`}>
              <Link
                to="/services"
                className="services-nav-link"
                onClick={closeMenu}
              >
                Services
              </Link>
              <button 
                className="dropdown-toggle-btn"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setDropdownOpen(!dropdownOpen);
                }}
                aria-label="Toggle Services Menu"
              >
                <ChevronDown size={16} className={`dropdown-chevron ${dropdownOpen ? 'rotate-180' : ''}`} />
              </button>
            </div>

            <div className="nav-dropdown-menu">
              <Link to="/services" className="dropdown-link view-all-link" onClick={closeMenu}>
                <span className="dropdown-title">All Services Overview</span>
                <span className="dropdown-desc">Explore all 6 strategic capabilities</span>
              </Link>
              <div className="dropdown-divider" />
              {servicesData.map((svc) => (
                <Link
                  key={svc.slug}
                  to={`/services/${svc.slug}`}
                  className={`dropdown-link ${location.pathname === `/services/${svc.slug}` ? 'dropdown-active' : ''}`}
                  onClick={closeMenu}
                >
                  <span className="dropdown-title">{svc.title}</span>
                </Link>
              ))}
            </div>
          </div>

          <Link to="/why-vka" onClick={closeMenu} className={location.pathname === '/why-vka' ? 'active-link' : ''}>
            Why VKA
          </Link>
          <Link to="/contact" onClick={closeMenu} className={location.pathname === '/contact' ? 'active-link' : ''}>
            Contact
          </Link>

          <Link className="nav-cta mobile-only" to="/contact" onClick={closeMenu}>
            Start a conversation <ArrowUpRight size={15} />
          </Link>
        </div>

        <Link className="nav-cta desktop-only" to="/contact">
          Start a conversation <ArrowUpRight size={15} />
        </Link>

        <button
          className="menu-btn"
          aria-label="Toggle navigation menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>
    </header>
  )
}
