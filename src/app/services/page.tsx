'use client';
import React from 'react'
import Discount from './discount'
import Search from './search';
import TopPhotographers from './top-photographers';
import HotSearch from './hot-search';

export default function Service() {
    return (
        <div className='flex justify-center'>
            <div className="container">
                <Search />
                <Discount />
                <HotSearch />
                <TopPhotographers />
            </div>
        </div>
    )
}
