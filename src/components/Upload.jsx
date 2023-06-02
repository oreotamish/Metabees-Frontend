import React,{useState} from 'react'

const Upload = ({type}) => {
    const [file,setFile] = useState();

  return (

    <div className='p-1 rounded-lg hover:bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'>
   
    <label class="w-72 h-72 flex flex-col items-center px-4 py-6 bg-[#1a1a1a] text-blue rounded-lg shadow-lg tracking-wide uppercase cursor-pointer h">
        <div className='border-dashed border-2 border-indigo-600 h-3/4 w-full mb-5 text-center flex flex-col justify-evenly items-center'>
        <svg class="w-24 h-24" fill="#1D267D" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
            <path d="M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z" />
        </svg>
           {file?file:'Browse File to upload!'}
        </div>
        <span class="mt-2 text-base leading-normal">
            {file?"selected!":"select"}
        </span>
        <input type='file' class="hidden" onChange={e=>setFile(e.target.value)} />
    </label>
    </div>

  )
}

export default Upload