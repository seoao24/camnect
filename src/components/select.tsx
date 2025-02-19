import { SelectItem } from '@/types/select'
import React from 'react'

interface SelectCustom {
    options: SelectItem[]
}
export default function SelectCustom(props: SelectCustom) {
    return (
        <select className='rounded-[10px] border-[1px] border-[#BBB9B9] w-full px-2 py-3 text-[#6B716E] my-2'>
            {
                props.options.map(e => (
                    <option value={e.value} key={e.value}>{e.title}</option>
                ))
            }
        </select>
    )
}
