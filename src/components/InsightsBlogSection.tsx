'use client';

import React from 'react';
import Image from 'next/image';

const blogData = [
    {
        image: '/assets/blog1.jpg',
        title: 'Five big benefits to automating and digitizing your mailroom',
        link: '#',
    },
    {
        image: '/assets/blog2.png',
        title: 'Preventing $26.8M in erroneous spend for a global manufacturer with FastCap® Finance Analytics',
        link: '#',
    },
    {
        image: '/assets/blog3.png',
        title: 'Three critical strategies for a smooth Medicaid pharmacy deployment',
        link: '#',
    },
];

const InsightsBlogSection = () => {
    return (
        <section className="bg-[#F1F5F9] py-16 px-[90px]">
            <div className="max-w-[1440px] mx-auto flex gap-12">

                <div className="w-[30%]">
                    <p className="text-gray-700 text-sm mb-2">Blogs</p>
                    <h2 className="text-[24px] font-bold text-[#000] leading-tight mb-4">
                        Custom Solutions, Real Impact: <br /> Why Tailored Solutions Win
                    </h2>
                    <p className="text-[#333] mb-6 text-[16px] leading-snug">
                        Custom-coded solutions are designed to fit your exact business needs—no compromises. At Suffix, we build software that delivers real, lasting impact.
                    </p>
                    <button className="bg-[#006E81] text-white px-5 py-2 text-sm font-medium hover:opacity-90">
                        View all
                    </button>
                </div>


                <div className="grid grid-cols-3 gap-6 w-[70%]">
                    {blogData.map((blog, index) => (
                        <div key={index} className="bg-white shadow-sm p-4">
                            <Image
                                src={blog.image}
                                alt={blog.title}
                                width={400}
                                height={200}
                                className="w-full h-[170px] object-cover mb-3"
                            />
                            <p className="text-sm text-[#222] leading-snug mb-3">{blog.title}</p>
                            <a href={blog.link} className="text-[#006E81] text-sm font-medium hover:underline">
                                Learn more
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InsightsBlogSection;
