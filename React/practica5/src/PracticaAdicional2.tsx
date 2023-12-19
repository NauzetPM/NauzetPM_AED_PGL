import React, { useEffect, useState } from 'react'

type Props = {}

const PracticaAdicional2 = (props: Props) => {
    const [color, setcolor] = useState(0);
    useEffect(() => {
        setcolor(-5);
    }, [Number(color)>4])
    
  return (
    <div>
        {color}
        <button onClick={()=>setcolor(color+1)}>pulsame</button>
    </div>
  )
}

export default PracticaAdicional2