"use client"

import React from "react"
import { Fredoka } from "next/font/google"
import { MetaMaskProvider } from "metamask-react"
import { ToastContainer } from "react-toastify"
import { Provider } from "react-redux"
import store from "@/store/store"
import { EthersProvider } from "@/hooks/useEthers"
import Footer from "@/components/Footer"
import Header from "@/components/Header"

import "react-toastify/dist/ReactToastify.css"
import { MetamaskContextProvider } from "@/hooks/useConnectMetamask"
import "./globals.css"

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: "variable",
  variable: "--font-fredoka",
})
const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <Provider store={store}>
      <MetaMaskProvider>
        <MetamaskContextProvider>
          <EthersProvider>
            {children}
          </EthersProvider>
        </MetamaskContextProvider>
      </MetaMaskProvider>
    </Provider>
  )
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={fredoka.variable}>
      <title>FUNT STAKING</title>
      <link rel="manifest" href="/site.webmanifest"/>
      <meta name="msapplication-TileColor" content="#915BF7"/>
      <meta name="theme-color" content="#ffffff"/>
      <Providers>
        <body className="min-h-screen flex flex-col font-sans bg-dark antialiased text-white">
          <Header />
          <main className="flex flex-col content-start items-center grow border-y border-solid border-[#454545] md:border-none py-8">
            {children}
          </main>
          <Footer />

          <ToastContainer
            position="bottom-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            theme="dark"
          />
        </body>
      </Providers>
    </html>
  )
}
