import React from 'react'

function Loading() {
  return (
    <div className="p-3 mt-5 flex flex-row flex-wrap gap-3 md:gap-5 justify-center items-center">
          {[1, 2, 3, 4, 5,6, 7, 8].map((index) => (
            <div
              key={index}
              className="w-[135px] md:w-[200px] h-[240px] md:h-[290px] rounded-md backdrop-blur-sm bg-white/5 animate-pulse"/>
             ))}
    </div>
  )
}

export default Loading
