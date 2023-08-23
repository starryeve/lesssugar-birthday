import '@/styles/globals.css'
import { isMobile } from '@/utils/client'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { use, useEffect, useState } from 'react'
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import { TouchBackend } from 'react-dnd-touch-backend'

export default function App({ Component, pageProps }: AppProps) {
  const [source, setSource] = useState('pc')

  useEffect(() => {
    if(isMobile()) {
      setSource('mobile')
    } else {
      setSource('pc')
    }
  }, [])

  return <DndProvider backend={source === 'pc' ? HTML5Backend : TouchBackend}>
    <Head>
      <title>少糖，生日快乐！</title>
      <meta name="description" content="Hi~，被你发现了什么？这里本来藏着一些不能说出口的话，但现在它们只可能会在某个时刻出现了。如果不小心看到了，你可别告诉网站的拥有者[嘘]" />
    </Head>
    <Component {...pageProps} />
  </DndProvider>
}
