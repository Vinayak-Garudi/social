import React, { useEffect, useState } from 'react'
import styles from '../styles/Error.module.css'
import { useRouter } from 'next/router'

const errorPage = () => {
    const router = useRouter()
    const [counter, setCounter] = useState(10)

    useEffect(() => {
        setTimeout(() => {
            router.back()
        }, 10000)
    }, [])

    setTimeout(() => {
        setCounter(counter - 1)
    }, 1000)

    return (
        <>
            <div className={styles.errorContainer}>
                <div style={{color:"red",fontSize:"xx-large",fontWeight:"bold"}}>404 ERROR</div>
                <div className={styles.errorText}>
                    This Page was not found!
                </div>
                <div onClick={() => router.back()} className={styles.backLink}>
                    Go back to previous page
                </div>
                <div style={{ display: "flex" }} className={styles.counterDiv}>
                    <div className={styles.counterLine}>
                        You will be redirected to the previous page in
                    </div>
                    <div style={{ color: "darkblue", marginLeft: "1rem", fontWeight:"bold" }} className={styles.counterValue}>{counter}</div>
                </div>
            </div>
        </>
    )
}

export default errorPage