import type { ComponentProps } from "react"
import Link from "next/link"
import Socials from "./Socials"
import Hr from "@/components/Hr"

const NavLink = (props: ComponentProps<typeof Link>) => (
  <Link
    {...props}
    className="hover:text-purple transition-colors"
  />
)

const Footer = () => (
  <footer className="container flex flex-col content-between items-center gap-2 mx-auto py-6 md:pb-10 md:pt-0 md:px-3 lg:gap-6 lg:flex-row">
    <Socials className="lg:order-4" />
    <Hr className="hidden lg:block lg:order-2" />
    <p className="text-base md:text-lg lg:order-1">
      <span className="font-bold">FUNT</span>
      {" "}
      <span className="font-light">STAKING</span>
      {" "}
      <span className="font-normal">&copy; FUNT COIN 2024</span>
    </p>
  </footer>
)

export default Footer
