import { useState } from "react"
import styles from '../../styles/Auth.module.css'

const Auth = () => {
    const [signupPage, setSignupPage] = useState(false)
    const [showPwd, setShowPwd] = useState(false)
    const [loading, setLoading] = useState(false)

    return (
        <>
            <div className="pageContainer">
                {
                    !signupPage ?
                        <div className={styles.authContainer}>
                            <div className={styles.authHead}>
                                Login to Twitter
                            </div>

                            <div className={styles.ipContent}>
                                <div className={styles.ipTitles}>
                                    Email ID
                                </div>
                                <input type="email" placeholder="Email ID..." className={styles.ipBox} />
                            </div>

                            <div className={styles.ipContent}>
                                <div className={styles.ipTitles}>
                                    Password
                                </div>
                                <input type={showPwd ? "text" : "password"} placeholder="Password..." className={styles.ipBox} />
                            </div>

                            <div className={styles.showPwd}>
                                <input type="checkbox" />
                                <div>Show Password</div>
                            </div>
                            {
                                loading ?
                                    <div>Please wait...</div>
                                    :
                                    <div onClick={() => setSignupPage(!signupPage)} className={styles.switchAuth}>
                                        New here?
                                    </div>
                            }
                            <div className={styles.authBtnDiv}>
                                <button className={styles.authBtn}>Log In</button>
                            </div>
                        </div>
                        :
                        <div className={styles.authContainer}>
                            <div className={styles.authHead}>
                                Signup to Twitter
                            </div>
                            <div className={styles.ipContent}>
                                <div className={styles.ipTitles}>
                                    Username
                                </div>
                                <input type="text" placeholder="Username..." className={styles.ipBox} />
                            </div>
                            <div className={styles.ipContent}>
                                <div className={styles.ipTitles}>
                                    Email ID
                                </div>
                                <input type="email" placeholder="Email ID..." className={styles.ipBox} />
                            </div>
                            <div className={styles.ipContent}>
                                <div className={styles.ipTitles}>
                                    Password
                                </div>
                                <input type={showPwd ? "text" : "password"} placeholder="Password..." className={styles.ipBox} />
                            </div>
                            <div className={styles.showPwd}>
                                <input type="checkbox" />
                                <div>Show Password</div>
                            </div>
                            {
                                loading ?
                                    <div>Please wait...</div>
                                    :
                                    <div onClick={() => setSignupPage(!signupPage)} className={styles.switchAuth}>
                                        Already an user?
                                    </div>
                            }
                            <div className={styles.authBtnDiv}>
                                <button className={styles.authBtn}>Sign Up</button>
                            </div>
                        </div>
                }
            </div>
        </>
    )
}

export default Auth