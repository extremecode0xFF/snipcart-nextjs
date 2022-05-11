import Header from './Header'
import Footer from './Footer'
import React, { PropsWithChildren } from 'react'
import Promotion from './Promotion'

export default function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <>
      <Header />
      <Promotion />
      {children}
      <Footer />
    </>
  )
}
