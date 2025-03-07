'use client';
import React from 'react'
import RequestPayment from './request-payment'
import AdminSummary from './summary'

export default function Dashboard() {
    return (
        <div>
            <AdminSummary/>
            <RequestPayment />
        </div>
    )
}
