export default function Products() {
  return (
    <div className="container mx-auto">
      <div className="container mt-10 m-auto grid lg:grid-cols-2 gap-2">
        <div>
          <div className="flex flex-row justify-evenly">
            <img
              className="w-1/3 h-1/3"
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
            <img
              className="w-1/3 h-1/3"
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
          <div className="mt-5 flex flex-row justify-evenly">
            <img
              className="w-1/3 h-1/3"
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
            <img
              className="w-1/3 h-1/3"
              src="https://images.pexels.com/photos/4158/apple-iphone-smartphone-desk.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="product"
            />
          </div>
        </div>
        <div className="flex flex-col" style={{ marginTop: '100px' }}>
          <h3 className="text-[#864bc9] text-2xl font-bold mb-4">Products</h3>
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
