'use client';
import { Geist, Geist_Mono } from 'next/font/google';
import '../globals.css';
import AppHeader from '@/layout/app-header';
import { ToastContainer } from 'react-toastify';
import Cookies from 'js-cookie';
import { usePathname } from 'next/navigation';
import { Suspense, useEffect, useState } from 'react';
import { Provider } from 'react-redux';
import { store } from '@/redux/store';
import Footer from '@/layout/footer';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export default function ClientLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname();
	// Client-side only code
	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
		// You can move the cookie check here
		const accessKey = Cookies.get('access-key');
		if (!accessKey) {
			// router.push("/sign-in")
		}
	}, []);

	// Return early loading state while not mounted
	if (!mounted) {
		return (
			<html lang='en'>
				<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F8F8] text-black`}>
					<div className='w-full'>
						{/* Show a minimal loading state without Redux */}
						<div>Loading...</div>
					</div>
				</body>
			</html>
		);
	}

	// Client-side only rendering after mount
	const isAdminPage = pathname.includes('/admin');

	return (
		<html lang='en'>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#F9F8F8] text-black`}>
				<Provider store={store}>
					{!isAdminPage ? (
						<div className='w-full'>
							<AppHeader />
							<div className='p-0 m-0'>
								<Suspense>{children}</Suspense>
							</div>
							<Footer />
							<ToastContainer />
						</div>
					) : (
						<div className='w-full'>
							<Suspense>{children}</Suspense>
						</div>
					)}
				</Provider>
			</body>
		</html>
	);
}
