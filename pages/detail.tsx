import React from 'react'
import { GetServerSideProps, NextPage } from 'next'
import styles from '../styles/Home.module.scss'
import Link from 'next/link'

type PageProps = { timestamp: string }

const Detail: NextPage<PageProps> = props => {
  return (
    <div className={styles.container}>
      <h1>Detail page</h1>
      <p>Updated at: {props.timestamp}</p>
      <Link href={'/'}>
        <a>Home page</a>
      </Link>
    </div>
  )
}

export const getServerSideProps: GetServerSideProps<PageProps> = async () => {
  const timestamp = new Date().toLocaleString()
  return {
    props: {
      seoProps: {
        title: 'Detail',
        description: 'Detail page description'
      },
      timestamp
    }
  }
}

export default Detail
