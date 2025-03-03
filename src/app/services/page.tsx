'use client';
import React from 'react'
import Discount from './discount'
import Search from './search';
import TopPhotographers from './top-photographers';
import HotSearch from './hot-search';
import SearchServiceMobile from '../service-mobile/search-service-mobile';
import DiscountSlideMobile from '../service-mobile/discount-slide';
import HotSearchSlideMobile from '../service-mobile/hot-search-slide';
import TopPhotographerMobile from '../service-mobile/top-photographer-slide';

export default function Service() {
    return (
        <div>
            <div className='md:flex justify-center hidden'>
                <div className="container">
                    <Search />
                    <Discount />
                    <HotSearch />
                    <TopPhotographers />
                </div>
            </div>
            <div className='md:hidden'>
                <SearchServiceMobile />
                <DiscountSlideMobile />
                <HotSearchSlideMobile />
                <TopPhotographerMobile />
            </div>
        </div>
    )
}
