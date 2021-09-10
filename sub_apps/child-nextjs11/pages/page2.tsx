import type { NextPage } from 'next'
import Link from 'next/link'
import styles from '../styles/page2.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.page2Container}>
      <p>next -- page2</p>
      <div>
        <Link href="/react17">
          <a>跳转首页</a>
        </Link>
      </div>
    </div>
  )
}

export default Home
