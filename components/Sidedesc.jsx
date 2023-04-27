import styles from '@/styles/Sidedesc.module.css'

const Sidedesc = () => {

  return (
    <>
      <div className={styles.sideContainer}>
        <div className={styles.centerContent}>
          <div className={styles.userProfile}>
            <div className={styles.userLogo}>V</div>
            <div className={styles.userName}>
              @vinayak
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Sidedesc