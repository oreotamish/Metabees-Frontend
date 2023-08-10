import neptaverse from '../assets/neptaverse.jpg'

export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="container mt-10 m-auto grid lg:grid-cols-2 gap-2">
        <img className="h-full w-full" src={neptaverse} alt="" />
        <div className=" ml-2 flex flex-col" style={{ marginTop: '100px' }}>
          <h3 className="text-[#864bc9] text-2xl font-bold mb-5 home-heading">
            Neptaverse
          </h3>
          <p className="text-white">
            Harnessing the immense capability of virtual reality is the core
            purpose of our product. The Neptaverse brings brands to target
            audiences and larger demographics.
            <br />
            <br />
            Our subscribers can showcase their products in virtual worlds that
            will in turn be made available to their customers.
            <br />
            <br />
            Equipped with an oculus and a corresponding mobile device, one can
            access these worlds from the comfort of their home.
          </p>
        </div>
      </div>
    </div>
  )
}
