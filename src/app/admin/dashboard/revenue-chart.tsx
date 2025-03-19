'use client';
import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

export default function RevenueChart() {
	const [revenueData, setRevenueData] = useState([]);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState(null);
	const currentYear = new Date().getFullYear();

	useEffect(() => {
		const fetchRevenueData = async () => {
			try {
				const response = await fetch(
					`https://api.camnect.com.vn/api/OrderService/get-total-revenue-in-year?year=${currentYear}`
				);

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				console.log('Revenue data:', data);

				// Map of English month names to Vietnamese
				const monthsInVietnamese = {
					January: 'Tháng 1',
					February: 'Tháng 2',
					March: 'Tháng 3',
					April: 'Tháng 4',
					May: 'Tháng 5',
					June: 'Tháng 6',
					July: 'Tháng 7',
					August: 'Tháng 8',
					September: 'Tháng 9',
					October: 'Tháng 10',
					November: 'Tháng 11',
					December: 'Tháng 12',
				};

				// Format data for chart
				const formattedData = data.map((item) => ({
					month: monthsInVietnamese[item.month] || item.month,
					revenue: item.totalRevenue,
				}));

				setRevenueData(formattedData);
				setLoading(false);
			} catch (err) {
				setError(err.message);
				setLoading(false);
				console.error('Error fetching revenue data:', err);
			}
		};

		fetchRevenueData();
	}, [currentYear]);

	// Format currency
	const formatCurrency = (value) => {
		return new Intl.NumberFormat('vi-VN', {
			style: 'currency',
			currency: 'VND',
			minimumFractionDigits: 0,
		}).format(value);
	};

	if (loading) return <div className='p-4 text-center'>Đang tải dữ liệu doanh thu...</div>;
	if (error) return <div className='p-4 text-center text-red-500'>Lỗi tải dữ liệu: {error}</div>;

	return (
		<div className='bg-white p-4 rounded-lg shadow-md'>
			<h2 className='text-lg font-semibold mb-4'>Tổng doanh thu năm {currentYear}</h2>
			<div className='h-64'>
				<ResponsiveContainer width='100%' height='100%'>
					<AreaChart
						data={revenueData}
						margin={{
							top: 5,
							right: 30,
							left: 20,
							bottom: 5,
						}}
					>
						<CartesianGrid strokeDasharray='3 3' />
						<XAxis dataKey='month' />
						<YAxis
							tickFormatter={(value) => {
								if (value >= 1000000000) return `${(value / 1000000000).toFixed(1)}B`;
								if (value >= 1000000) return `${(value / 1000000).toFixed(1)}M`;
								if (value >= 1000) return `${(value / 1000).toFixed(1)}K`;
								return value;
							}}
						/>
						<Tooltip formatter={(value) => [formatCurrency(value), 'Doanh thu']} />
						<Area
							type='monotone'
							dataKey='revenue'
							stroke='#82ca9d'
							fill='#82ca9d'
							fillOpacity={0.3}
							name='Doanh thu'
						/>
					</AreaChart>
				</ResponsiveContainer>
			</div>
		</div>
	);
}
