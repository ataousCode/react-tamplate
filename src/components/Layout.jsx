/* eslint-disable react/prop-types */
import { useState } from 'react'
import { Link } from 'react-router-dom'
import {
  FiHome,
  FiPieChart,
  FiLogIn,
  FiFileText,
  FiDatabase,
  FiSearch,
  FiShoppingBag,
  FiBell,
  FiFilter,
  FiSettings,
  FiBook,
  FiCreditCard,
  FiStar,
  FiBox,
  FiList,
  FiMenu,
  FiLinkedin,
  FiInstagram,
  FiMoon,
  FiSun,
} from 'react-icons/fi'
import { useTheme } from '../context/ThemeContext'
import styles from './Layout.module.css'

const navItems = [
  { icon: FiHome, label: 'Templates', version: 'v.0.1' },
  { icon: FiPieChart, label: 'Analytics' },
  { icon: FiLogIn, label: 'Login' },
  { icon: FiFileText, label: 'Forms' },
  { icon: FiDatabase, label: 'Crypto' },
  { icon: FiSearch, label: 'Search' },
  { icon: FiShoppingBag, label: 'Ecommerce' },
  { icon: FiBell, label: 'Notifications' },
  { icon: FiFilter, label: 'Filter' },
  { icon: FiHome, label: 'Home' },
  { icon: FiSettings, label: 'Settings' },
  { icon: FiBook, label: 'Onboarding' },
  { icon: FiCreditCard, label: 'Payments' },
  { icon: FiStar, label: 'Reviews' },
  { icon: FiBox, label: 'Empty State' },
  { icon: FiList, label: 'Orders & Transactions' },
]

export default function Layout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const { isDarkMode, toggleTheme } = useTheme()

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen)
  }

  return (
    <div className={styles.container}>
      <button
        className={styles.mobileMenuButton}
        onClick={toggleSidebar}
        aria-label='Toggle menu'
      >
        <FiMenu size={24} />
      </button>

      <aside
        className={`${styles.sidebar} ${isSidebarOpen ? styles.open : ''}`}
      >
        <div className={styles.logo}>TadalateStudio</div>
        <div className={styles.version}>Templates (v.1.1)</div>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.label} to='/' className={styles.navItem}>
              <item.icon className={styles.navIcon} />
              {item.label}
            </Link>
          ))}
        </nav>

        <div className={styles.socialButtons}>
          <button className={`${styles.button} ${styles.waitlistButton}`}>
            Join waitlist
          </button>
          <button className={styles.button}>
            <FiLinkedin />
            LinkedIn
          </button>
          <button className={styles.button}>
            <FiInstagram />
            Instagram
          </button>
          <button className={styles.button} onClick={toggleTheme}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
            {isDarkMode ? 'Light Mode' : 'Dark Mode'}
          </button>
        </div>
      </aside>

      <main className={styles.main}>
        <div className={styles.mainContent}>{children}</div>
      </main>
    </div>
  )
}
