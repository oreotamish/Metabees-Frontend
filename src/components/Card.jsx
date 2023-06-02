import React from 'react'

function Card({text,setupload,setproduct}) {
  return (
    <div class="main-card" onClick={e=>{
        setproduct(prev=>!prev)
        setupload(prev=>!prev)
        }}>
          <div class="sub-card text-white font-bold">
            <div className="flex flex-col items-center">
              {/* <img className="h-1/2 w-1/2" src={computer} alt="PC" /> */}
              <p className="mt-1">{text}</p>
            </div>
          </div>
        </div>
  )
}

export default Card