import type { AppProps } from 'next/app'
import Link from 'next/link'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <div id='public-links'>
        <Link href="/"><a>Home</a></Link> | <Link href="/page2"><a>Page2</a></Link>
      </div>
      <Component {...pageProps} />
    </div>
  )
}
export default MyApp
