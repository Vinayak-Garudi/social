import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'

const Navbar = () => {
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.iconDiv}>
          Icon
        </div>
        <div className={styles.navContent}>
          <ul className={styles.listContents}>
            <li className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Home</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Explore</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/profile'}>Profile</Link>
            </li>
            <li className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Auth</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar