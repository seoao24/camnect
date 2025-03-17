'use client';
import Feedback from './home/feedback';
import FQA from './home/FQA';
import HomeHere from './home/hero';
import Introduction from './home/introduction';
// import MobilePage from './mobile-home/mobile-page';
import Reason from './home/reason';
import SearchPhotographers from './home/search';

export default function Home() {
	return (
		<div className='relative'>
			<div className=''>
				<HomeHere />
				<Introduction />
				<Reason />
				<SearchPhotographers />
				<FQA />
				<Feedback />
			</div>
			{/* <div className='md:hidden'>
				<MobilePage />
			</div> */}
		</div>
	);
}
