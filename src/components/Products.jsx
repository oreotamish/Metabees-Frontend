export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="container mt-10 m-auto grid lg:grid-cols-2 gap-2">
        <img
          className="h-full w-full"
          src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
        />
        <div className=" ml-2 flex flex-col" style={{ marginTop: '100px' }}>
          <h3 className="text-[#864bc9] text-2xl font-bold mb-4 home-heading">
            Products
          </h3>
          <p className="text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            sunt nam perferendis doloremque placeat ullam, ab cumque alias
            iusto. Ea laboriosam nam facilis sed, eum ducimus quidem quae
            repudiandae doloribus.
          </p>
        </div>
      </div>
    </div>
  )
}
