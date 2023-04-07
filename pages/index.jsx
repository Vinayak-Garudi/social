import styles from '@/styles/Home.module.css'
import { useState } from 'react'

const index = () => {

  const [post, setPost] = useState("")

  const quesChanged = (key) => {
    const textArea = document.querySelector("textarea")
    textArea.addEventListener("keydown", e => {
      textArea.style.height = `auto`
      let scHeight = e.target.scrollHeight
      textArea.style.height = `${scHeight}px`
    })
    setPost(key)
  }
  return (
    <>
      <div style={{ width: "60vw" }} className="pageContainer">
        <div className={styles.quickPost}>
          <div className={styles.userContent}>
            <div className={styles.iconSpace}>
              <div className={styles.userIcon}>V</div>
            </div>
            <div className={styles.userInput}>
              <textarea id="textarea-id" className={styles.contentTextArea} rows="1" onChange={(e) => { quesChanged(e.target.value) }} placeholder={"What's happening..."}></textarea>
            </div>
          </div>
          <div style={{ border: "1px solid #00000073", width: "85%", marginBottom: "0.5rem" }}></div>
          <div className={styles.postContent}>
            <button className={styles.postBtn}>Post</button>
          </div>
        </div>

        <div className={styles.allContent}>
          <div className={styles.singleContent}>
            <div className={styles.userContent}>
              <div className={styles.iconSpace}>
                <div className={styles.userIcon}>V</div>
              </div>
              <div className={styles.userInput}>
                <div className={styles.userName}>vinayak</div>
                <div className={styles.userPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore.</div>
              </div>
            </div>
          </div>

          <div className={styles.singleContent}>
            <div className={styles.userContent}>
              <div className={styles.iconSpace}>
                <div className={styles.userIcon}>V</div>
              </div>
              <div className={styles.userInput}>
                <div className={styles.userName}>vinayak</div>
                <div className={styles.userPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore.</div>
              </div>
            </div>
          </div>

          <div className={styles.singleContent}>
            <div className={styles.userContent}>
              <div className={styles.iconSpace}>
                <div className={styles.userIcon}>V</div>
              </div>
              <div className={styles.userInput}>
                <div className={styles.userName}>vinayak</div>
                <div className={styles.userPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore.</div>
              </div>
            </div>
          </div>

          <div className={styles.singleContent}>
            <div className={styles.userContent}>
              <div className={styles.iconSpace}>
                <div className={styles.userIcon}>V</div>
              </div>
              <div className={styles.userInput}>
                <div className={styles.userName}>vinayak</div>
                <div className={styles.userPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore.</div>
              </div>
            </div>
          </div>

          <div className={styles.singleContent}>
            <div className={styles.userContent}>
              <div className={styles.iconSpace}>
                <div className={styles.userIcon}>V</div>
              </div>
              <div className={styles.userInput}>
                <div className={styles.userName}>vinayak</div>
                <div className={styles.userPost}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci, dolore.</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default index