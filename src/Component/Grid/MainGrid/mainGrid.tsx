import React, { ReactNode } from 'react'

const Max_Numbers = 4
function MainGrid({images,getImages}:
    {
        images:SearchResult[]
        getImages:(imagedata:SearchResult)=>ReactNode
    }) {
        function getColumn(col_index:number){
            return images.filter((resources,idx)=>idx%Max_Numbers===col_index)
        }
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 py-2'>
            {[getColumn(0),getColumn(1),getColumn(2),getColumn(3)].map((current,idx)=>(
                <div key={idx} className='flex flex-col'>
                    {current.map(getImages)}
                </div>
            ))}
        </div>
    )
}

export default MainGrid