import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import styles from './index.module.css'

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navContent}>
        <Link href="/" className={styles.logoContainer}>
          <Image 
            src="/logo.svg" 
            alt="EasyExcel+" 
            width={136} 
            height={40} 
            priority
          />
        </Link>
        
        <div className={styles.navLinks}>
          <Link href="/docs" className={styles.navLink}>
            使用文档
          </Link>
          <Link href="/contact" className={styles.navLink}>
            联系我们
          </Link>
          <a 
            href="https://github.com/CodePhiliaX/easyexcel-plus" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.navLink}
          >
            Github
          </a>
          <a 
            href="https://chat2db.ai" 
            target="_blank" 
            rel="noopener noreferrer" 
            className={styles.navLink}
          >
            🔥Chat2DB
          </a>
        </div>
      </div>
    </nav>
  )
}

export default Navbar 