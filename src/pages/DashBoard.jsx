import React, { useState } from "react";
import Upload from "../components/Upload";
import Card from "../components/Card";

const DashBoard = () => {
  const [addProduct, setAddProduct] = useState(false);
  const [upload,setUpload] = useState(false);
  return (
    <div className="bg-transparent text-white flex flex-col items-center justify-center mt-32"

    >
      <button
        className="home-enter-btn"
        style={{
          display: addProduct || upload ? "none" : "",
        }}
        onClick={(e) => setAddProduct((prev) => !prev)}
      >
        Add Product
      </button>
      <div className="flex flex-col justify-center items-center"
          style={{
            display:upload?"none":""
          }}>
      <div
        className=" grid grid-rows-2 grid-flow-col gap-4"
        style={{
          display: addProduct ? "" : "none",
        }}
      >
       
        
       <Card text={'IMG SHOES'} setproduct={setAddProduct} setupload={setUpload}/>
       <Card text={'IMG CLOTHING'}setproduct={setAddProduct} setupload={setUpload} />
       <Card text={'IMG FURNITURE'} setproduct={setAddProduct} setupload={setUpload} />
       <Card text={'IMG --'} setproduct={setAddProduct} setupload={setUpload}/>
       <Card text={'IMG SHOW PEICES'} setproduct={setAddProduct} setupload={setUpload} />
       <Card text={'IMG MISC'} setproduct={setAddProduct} setupload={setUpload} />
      
        
      </div>
      <button
        className="home-enter-btn mb-5"
        style={{
          display: addProduct ? "" : "none",
        }}
        onClick={(e) => setAddProduct((prev) => !prev)}
      >
        go back
      </button>
      </div>

      {/* upload */}
     <div style={{
      display:upload?"":"none"
     }}
     className="flex flex-col justify-center items-center"
     >
      <Upload />
      <button
        className="home-enter-btn mb-5"
 
        onClick={(e) => setUpload((prev) => !prev)}
      >
        go back
      </button>
     </div>
    </div>
  );
};

export default DashBoard;
