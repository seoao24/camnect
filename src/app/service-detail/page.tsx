import React from 'react'
import ServiceDetailSummary from './summary'
import OptionalService from './optional-service'
import ListService from './list-service'

export default function ServiceDetail() {
    return (
        <div className='flex justify-center'>
            <div className="container mt-5">
                <ServiceDetailSummary />
                <OptionalService />
                <ListService />
            </div>
        </div>
    )
}
