/* eslint-disable jsx-a11y/anchor-is-valid */
import linkedin from '../../assets/linkedin.svg'
import instagram from '../../assets/instagram.svg'
import twitter from '../../assets/twitter.svg'

function Footer() {
  return (
    <section className="relative overflow-x-hidden bg-[#15041f] w-full mb-0 sm:flex-col">
      <div className="container relative z-10 mx-auto px-4">
        <div className=" flex flex-wrap items-center justify-between">
          <div className="w-auto p-8">
            <a href="#">
              <div className="inline-flex items-center text-white font-bold hover:text-[#19A7CE]">
                Metabees
              </div>
            </a>
          </div>
          <div className="w-auto p-8">
            <ul className="-m-5 flex flex-wrap items-center max-sm:flex-row">
              <li className="p-5">
                <a
                  className="font-medium text-white hover:font-bold hover:text-[#19A7CE]"
                  href="/about"
                >
                  About
                </a>
              </li>
              <li className="p-5">
                <a
                  className="font-medium text-white hover:font-bold hover:text-[#19A7CE]"
                  href="/contact"
                >
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
          <div className="w-auto p-8">
            <div className="-m-1.5 flex flex-wrap ">
              <div className="w-auto p-1.5">
                <a href="https://www.linkedin.com/company/metabees-in/">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src={linkedin} alt="linkedin" />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src={instagram} alt="instagram" />
                  </div>
                </a>
              </div>
              <div className="w-auto p-1.5">
                <a href="#">
                  <div className="flex h-8 w-8 items-center justify-center">
                    <img src={twitter} alt="twitter" />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Footer
