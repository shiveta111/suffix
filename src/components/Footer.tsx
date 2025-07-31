'use client';

import React from 'react';
import Image from 'next/image';
import { FaFacebookF, FaLinkedinIn, FaPhoneAlt } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="bg-[#006E81] text-white px-[90px] pt-12 pb-6">
            <div className="max-w-[1440px] mx-auto flex justify-between flex-wrap gap-12">

                <div className="w-[280px]">
                    <div className="mb-6">
                        <Image src="/assets/logo.png" alt="Logo" width={150} height={40} />
                    </div>
                    <p className="text-xs font-semibold mb-3 tracking-wide">CONNECT WITH US</p>
                    <div className="flex items-center gap-3 mb-2">
                        <FaPhoneAlt size={12} />
                        <span className="text-sm">+91 93758 84752</span>
                    </div>
                    <div className="flex items-center gap-3 mb-6">
                        <FaPhoneAlt size={12} />
                        <span className="text-sm">+91 99250 02037</span>
                    </div>
                    <button className="border border-white px-4 py-2 flex items-center gap-2 text-xs font-semibold tracking-wide hover:bg-white hover:text-[#006E81] transition-all">
                        <Image src="/assets/icons/message-icon.png" alt="Message Icon" width={16} height={16} />
                        CONTACT ONLINE
                    </button>
                </div>

                <div className="flex gap-16">
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Quick Link</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Home</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Solution</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Insights</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">About Us</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Careers</a></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-sm mb-4">Help</h4>
                        <ul className="text-sm space-y-2">
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Blog</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Events</a></li>
                            <li><a href="#" className="hover:opacity-80 transition-opacity">Contact Us</a></li>
                        </ul>
                    </div>
                </div>


                <div className="w-[280px]">
                    <h4 className="font-semibold text-sm mb-4">Newsletter</h4>
                    <div className="flex items-center border-b border-white pb-1 mb-6">
                        <input
                            type="email"
                            placeholder="Enter Your Email Address"
                            className="bg-transparent text-white text-sm placeholder:text-white placeholder:opacity-70 focus:outline-none flex-1 pr-4"
                        />
                        <button className="text-xs font-semibold tracking-wide hover:opacity-80 transition-opacity whitespace-nowrap">
                            SUBSCRIBE
                        </button>
                    </div>
                    <p className="text-xs font-semibold mb-3 tracking-wide">FOLLOW US ON SOCIAL MEDIA</p>
                    <div className="flex gap-4">
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <FaFacebookF size={18} />
                        </a>
                        <a href="#" className="hover:opacity-80 transition-opacity">
                            <FaLinkedinIn size={18} />
                        </a>
                    </div>
                </div>
            </div>


            <div className="border-t border-white/30 mt-10 pt-4 text-center text-sm text-white/90">
                © 2025 Suffix, Inc. All rights reserved.
            </div>
        </footer>
    );
};

export default Footer;