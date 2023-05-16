import React from 'react'
import { useNavigate } from 'react-router-dom'

function Pricing() {
  const navigate = useNavigate();
  return (
    <section
      className="relative overflow-hidden py-10 mt-6"
    >
      <p className='text-white text-center mb-10 text-3xl'>Pricing</p>
      <div className="relative mx-auto max-w-7xl px-4">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-wrap items-center justify-evenly">
            <div className="w-full lg:-mr-2 lg:w-1/4">
              <div className="mx-auto max-w-sm rounded-md border bg-[#1a1a1a] pb-20 pl-5 pr-8 pt-6 lg:pb-8 max-sm:my-20">
                <span className="mb-2 block text-sm font-semibold text-gray-400">
                  PREMIUM
                </span>
                <span className="flex items-end">
                  <span className="text-4xl font-extrabold leading-none text-white">
                    $150
                  </span>
                  <span className="text-sm font-semibold text-white">/month</span>
                </span>
                <div className="mt-7 border-t border-gray-100 pt-5 text-center">
                  <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        No Discount
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Basic Support
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Ads Banner Free
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Design Style
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Component Library
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        All limited links
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Own analytics platform
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="login-btn"
                    onClick={() => navigate('/pricing')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-4 w-full lg:-mt-0 lg:w-1/3">
              <div className="border pt-22 relative mx-auto max-w-sm rounded-lg bg-[#1a1a1a] px-10 pb-16 "

              >
                <div className="absolute left-1/2 top-0 inline-flex -translate-x-1/2 -translate-y-1/2 transform items-center justify-center rounded-full bg-[#6e25c0] p-1">
                  <div className="flex-shrink-0 rounded-full bg-black px-5 py-4 text-sm font-semibold uppercase text-white hover:c">
                    Most Popular
                  </div>
                </div>
                <span className="mb-2 block pt-10 text-sm font-semibold text-white">
                  GOLD
                </span>
                <span className="flex items-end text-white">
                  <span className="text-4xl font-extrabold leading-none">
                    $100
                  </span>
                  <span className="text-sm font-semibold">/month</span>
                </span>
                <div className="mt-7 border-t pt-5 text-center">
                  <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        No Discount
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Basic Support
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Ads Banner Free
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Design Style
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Component Library
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        All limited links
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Own analytics platform
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="login-btn"
                    onClick={() => navigate('/pricing')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
            <div className="-mt-4 w-full lg:-ml-2 lg:-mt-0 lg:w-1/4">
              <div className="rounded-md lg:rounded-r-5xl mx-auto max-w-sm border bg-[#1a1a1a] pb-8 pl-8 pr-5 pt-12 lg:rounded-b-none lg:pt-6 max-sm:mt-20">
                <span className="mb-2 block text-sm font-semibold text-gray-400">
                  PREMIUM
                </span>
                <span className="flex items-end">
                  <span className="text-4xl font-extrabold leading-none text-white">
                    $150
                  </span>
                  <span className="text-sm font-semibold text-white">/month</span>
                </span>
                <div className="mt-7 border-t border-gray-100 pt-5 text-center">
                  <ul className="mb-10">
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        No Discount
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Basic Support
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Ads Banner Free
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Design Style
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Component Library
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        All limited links
                      </span>
                    </li>
                    <li className="mb-6 flex items-center">
                      <span className="ml-2 text-sm text-white">
                        Own analytics platform
                      </span>
                    </li>
                  </ul>
                  <button
                    type="button"
                    className="login-btn"
                    onClick={() => navigate('/pricing')}
                  >
                    Choose Plan
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Pricing
