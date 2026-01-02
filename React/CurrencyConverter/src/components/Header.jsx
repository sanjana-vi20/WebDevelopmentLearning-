import React from 'react'
import { HiCurrencyRupee } from "react-icons/hi";
import { HiMiniCurrencyDollar } from "react-icons/hi2";
import { HiMiniCurrencyEuro } from "react-icons/hi2";
import { HiMiniCurrencyPound } from "react-icons/hi2";

function Header() {
  return (
    <>
    <div className='bg-blue-700 font-bold flex justify-center gap-4 items-center text-4xl text-amber-50 text-center p-4'>
        <HiCurrencyRupee className='animate-bounce' />
        <HiMiniCurrencyDollar className='animate-bounce'/>
        Currency Converter
        <HiMiniCurrencyEuro className='animate-bounce' />
        <HiMiniCurrencyPound className='animate-bounce' />
    </div>
    </>
  )
}

export default Header