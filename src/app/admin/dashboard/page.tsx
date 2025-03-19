'use client';
import React from 'react';
import RequestPayment from './request-payment';
import AdminSummary from './summary';
import VisitsChart from './visits-chart';
import RevenueChart from './revenue-chart';

export default function Dashboard() {
	return (
		<div className='space-y-6'>
			<AdminSummary />

			<div className='grid grid-cols-1 gap-3'>
				<VisitsChart />
				<RevenueChart />
			</div>

			<RequestPayment />
		</div>
	);
}
