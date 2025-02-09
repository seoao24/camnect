import React from 'react'

interface OutlineInputProps {
    placeholder: string,
}
export default function OutlineInput(props: OutlineInputProps) {
  return (
    <input type="text" placeholder={props.placeholder} className='rounded-[10px] border-[1px] border-[#BBB9B9] w-full px-2 py-3 text-[#6B716E] my-2'/>
  )
}
