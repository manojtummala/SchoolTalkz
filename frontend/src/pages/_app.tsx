import '@/styles/globals.css'
// import '@/styles/login.module.css'

// import "../public/css/app.css"
// import "../public/css/index.css"
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
