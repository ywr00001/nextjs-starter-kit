import React from 'react'
import type { GetStaticProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <h1>Home page</h1>
      <Link href={'/detail'}>
        <a>Detail page</a>
      </Link>
    </div>
  )
}

export const getStaticProps: GetStaticProps = () => {
  return {
    props: {
      seoProps: {
        title: 'Home',
        description: 'Home page description'
      }
    }
  }
}

export default Home
