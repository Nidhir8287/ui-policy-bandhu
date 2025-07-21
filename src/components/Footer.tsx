import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <footer className="bg-[#7979DC] pt-20 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8 px-20">
        <div className="text-center md:text-center">
            <img src="/white-logo.png" className='h-10 w-44' />
        </div>

        <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 md:mb-4 text-[#FFFFFF]">
            Quick Links
            </h4>
            <div className="space-y-2 text-sm">
            <Link
                className="text-[#FFFFFF] hover:text-primary transition-colors min-h-[44px] block py-1 w-fit"
                to="./privacy-policy"
            >
                Privacy Policy
            </Link>
            <div>
                <Link
                className="text-[#FFFFFF] hover:text-primary transition-colors min-h-[44px] block py-1 w-fit"
                to="./terms-and-services"
                >
                Terms & Condition
                </Link>
            </div>
            <div>
                <Link
                className="text-[#FFFFFF] hover:text-primary transition-colors min-h-[44px] block py-1 w-fit"
                to="./disclaimer"
                >
                Disclaimer
                </Link>
            </div>
            <div>
                <Link
                className="text-[#FFFFFF] hover:text-primary transition-colors min-h-[44px] block py-1 w-fit"
                to="./refund-policy"
                >
                Refund Policy
                </Link>
            </div>
            </div>
        </div>

        <div className="text-center md:text-left">
            <h4 className="font-semibold mb-3 md:mb-4 text-[#FFFFFF]">Contact</h4>
            <div className="text-sm text-mid space-y-2">
            <div className='text-[#FFFFFF]'>care@policybadhu.info</div>
            </div>
        </div>
        </div>
        <div className="pt-6 md:pt-8 pl-10">
            <div className="text-left text-sm text-[#FFFFFF]">
                ©2025 PolicyBadhu. All rights reserved.
            </div>
        </div>
    </footer>
  )
}

export default Footer