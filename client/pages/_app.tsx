import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ContextProvider } from '../context/context'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  )
}

export default MyApp
