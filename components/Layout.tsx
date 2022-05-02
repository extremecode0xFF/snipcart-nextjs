import Header from './Header'
import Footer from './Footer'
import React, { PropsWithChildren } from 'react'

export default function Layout({
  children,
}: PropsWithChildren<Record<string, unknown>>) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}
