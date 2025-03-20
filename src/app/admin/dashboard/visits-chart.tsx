'use client';
import React, { useState, useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function VisitsChart() {
	const [visitData, setVisitData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchVisitData = async () => {
			try {
				const response = await fetch('https://api.tapta.online/api/v1/logger/total-visits-per-day');

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();

				const formattedData = data.map((item: { date: string | number | Date }) => ({
					...item,
					dateLabel: new Date(item.date).toLocaleDateString('vi-VN', {
						month: 'short',
						day: 'numeric',
					}),
				}));

				setVisitData(formattedData);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
				console.error('Error fetching visit data:', err);
			}
		};

		fetchVisitData();
	}, []);

	if (loading) return <div className='p-4 text-center'>Loading visit data...</div>;
	if (error) return <div className='p-4 text-center text-red-500'>Error loading data: {error}</div>;

	return (
		<div className='bg-white p-4 rounded-lg shadow-md'>
			<h2 className='text-lg font-semibold mb-4'>Thống kê lượt truy cập website</h2>
			<div className='h-64'>
				<ResponsiveContainer width='100%' height='100%'>
					<LineChart
						data={visitData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='dateLabel' />
						<YAxis />
						<Tooltip
							formatter={(value) => [`${value} visits`, 'Total Visits']}
							labelFormatter={(label) => `Date: ${label}`}
						/>
						<Line
							type='monotone'
							dataKey='totalVisits'
							stroke='#8884d8'
							strokeWidth={2}
							dot={{ r: 6 }}
							activeDot={{ r: 8 }}
							name='Visits'
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
