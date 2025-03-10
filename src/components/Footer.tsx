import { LogoIcon } from "./Icons"
import Link from "next/link"

export const Footer = () => {
  return (
    <footer id="footer">
      <hr className="w-11/12 mx-auto" />

      <section className="container py-20 grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-x-12 gap-y-8">
        <div className="col-span-full xl:col-span-3">
          <Link href="/" className="font-bold text-xl flex">
            <LogoIcon />
            <h1>OnePass Platform</h1>
          </Link>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Follow US</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Github
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Twitter
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              LinkedIn
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">Products</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Web
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Mobile
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Desktop
            </a>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <h3 className="font-bold text-lg">About</h3>
          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Features
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              Pricing
            </a>
          </div>

          <div>
            <a href="#" className="opacity-60 hover:opacity-100">
              FAQ
            </a>
          </div>
        </div>
      </section>
    </footer>
  )
}
