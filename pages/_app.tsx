import React from 'react'
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Layout from '../components/layout'

function MyApp({ Component, pageProps }: AppProps) {
  const { title, description, icon } = pageProps.seoProps || {}
  return (
    <Layout title={title} description={description} icon={icon}>
      <Component {...pageProps} />
    </Layout>
  )
}

export default MyApp
