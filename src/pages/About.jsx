'use client'

import TeamCard from '../components/TeamCard'
import { useNavigate } from 'react-router-dom'

function About() {
  const navigate = useNavigate()

  return (
    <div>
      <div className="mx-auto max-w-7xl px-4">
        {/* Hero Map */}
        <div className="flex flex-col space-y-8 pb-10 pt-12 md:pt-24">
          <div className="max-w-max rounded-full  bg-[#6e25c0] p-1 px-3">
            <p className="text-xs font-semibold text-white leading-normal md:text-sm">
              About Us
            </p>
          </div>
          <p className="text-2xl font-bold text-[#8547cc] md:text-3xl md:leading-10 home-h1">
            VR is the future and we will help you build on it.
          </p>
          <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
            Metabees aims to become an enabler for other thriving companies and
            businesses. New grounds are being broken and Metabees is opening the
            door to the future (and hey we’re taking everyone with us!).
          </p>
          <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
            Our biggest milestone is to revolutionize the workings of the
            consumer market and pave a new path to bring businesses closer to
            their customers
          </p>
        </div>
        <div className="w-full space-y-4"></div>
        {/* greetings */}
        <div className="mt-16 flex items-center">
          <div className="space-y-6 md:w-3/4">
            <p className="text-2xl font-bold text-[#8547cc] md:text-3xl md:leading-10 home-h1">
              Meet our team
            </p>
            <p className="max-w-4xl text-base text-[#edd8f7] md:text-xl">
              Here at Metabees, our group is one of pioneers, explorers and
              artists.
              <br />
              <br />
              Built on the foundation of trust, diligence and integrity, our
              team thrives on collaboration and a healthy work ethic.
              <br />
              <br />
              They have expressed themselves by incorporating their unique style
              to the projects they have worked on.
            </p>
            <div></div>
          </div>
        </div>
        {/* TEAM */}
        <div className="grid grid-cols-1 gap-4 gap-y-6 border-b border-[#b865db] py-12 pb-20 md:grid-cols-2 lg:grid-cols-4">
          <TeamCard
            name="Jordi Santiago"
            role="Front-end developer"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Kerim Fahri"
            role="Back-end developer"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Deepika Ramesh"
            role="Front-end developer"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Thilde Olaisen"
            role="Marketing Lead"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Sadie Lewis"
            role="Sales"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Gabrielle Fernandez"
            role="Sales"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Kerim Fahri"
            role="Back-end developer"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
          <TeamCard
            name="Kerim Fahri"
            role="Back-end developer"
            linkedinlink="https://www.linkedin.com/company/metabees-in/"
          />
        </div>
        {/* Hiring Banner */}
        <div className="flex flex-col items-center gap-x-4 gap-y-4 py-16 md:flex-row">
          <div className="space-y-6">
            <p className="text-sm font-semibold md:text-base">
              Join our team &rarr;
            </p>
            <p className="text-3xl font-bold md:text-4xl">
              We&apos;re just getting started
            </p>
            <p className="text-base text-[#edd8f7] md:text-lg">
              Our philosophy is simple — hire a team of diverse, passionate
              people and foster a culture that empowers you to do your best
              work.
            </p>
            <button
              type="button"
              className="rounded-md bg-[#642b7c] px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-[#e7caf3] hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
              onClick={() => navigate('/waitlist')}
            >
              Apply Here
            </button>
          </div>
          <div className="md:mt-o mt-10 w-full">
            <img
              src="https://images.unsplash.com/photo-1605165566807-508fb529cf3e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2340&q=80"
              alt="Getting Started"
              className="rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
