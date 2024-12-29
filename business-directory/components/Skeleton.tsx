import React from 'react'

function Skeleton() {
  return (
    <div>
        <div className='shadow-md rounded-md p-4 max-w-sm w-full mx-auto'>
            <div className='animate-pulse flex flex-col space-x-4'>
                <div className='rounded-md bg-slate-200 h-[150px] w-full'>
                    <div className='flex-1 space-y-6 py-1'>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skeleton