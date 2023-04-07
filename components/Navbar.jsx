import styles from '@/styles/Navbar.module.css'
import Link from 'next/link'
import Image from 'next/image'
import { useRouter } from 'next/router'

const Navbar = () => {
  const router = useRouter()
  return (
    <>
      <div className={styles.navContainer}>
        <div className={styles.iconDiv}>
          Twitter
          <Image src={'/post2.png'} style={{ marginLeft: "1rem" }} width={25} height={25} />
        </div>
        <div style={{ fontSize: "large", fontWeight: "600" }} className={styles.navContent}>
          <ul className={styles.listContents}>
            <li id={router.asPath == '/' ? styles.selectedNav : ""} onClick={() => router.push('/')} className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Home</Link>
            </li>
            {/* <li className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Explore</Link>
            </li> */}
            <li id={router.asPath == '/profile' ? styles.selectedNav : ""} onClick={() => router.push('/profile')} className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/profile'}>Profile</Link>
            </li>
            <li id={router.asPath == '/auth' ? styles.selectedNav : ""} onClick={() => router.push('/auth')} className={styles.listItem}>
              <Link className={styles.listItemLink} href={'/'}>Auth</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Navbar