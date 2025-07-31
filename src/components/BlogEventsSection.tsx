'use client';
import Image from 'next/image';
import React from 'react';

const BlogEventsSection = () => {
    return (
        <section className="w-full bg-white px-6 py-12">
            <div className="max-w-7xl mx-auto">


                <p className="text-sm text-black mb-2">Blog & Events</p>


                <div className="flex items-center gap-3">
                    <h2 className="text-[32px] font-bold text-[#006E81]">Events That Matter</h2>
                    <Image src="/assets/icons/events-icon.png" alt="icon" width={24} height={24} />
                </div>


                <p className="text-sm text-black mt-2 max-w-[800px]">
                    From industry conferences to exclusive launches, these are the events that define our journey, connect us with innovators, and shape meaningful collaborations across the globe.
                </p>


                <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8">

                    <div className="relative">
                        <Image
                            src="/events blog1.png"
                            alt="Scalable Digital Solutions"
                            width={600}
                            height={350}
                            className="w-full h-auto rounded object-cover"
                        />
                        <div className="absolute bottom-4 left-4 text-white">
                            <h3 className="font-bold text-lg mb-1">The Future of Scalable Digital Solutions</h3>
                            <span className="text-sm border-b border-white">Read the blog →</span>
                        </div>
                    </div>


                    <div className="flex flex-col gap-6">

                        <div className="flex gap-4 items-start">
                            <Image
                                src="/events blog2.png"
                                alt="Custom Development"
                                width={180}
                                height={186}
                                className="rounded object-cover"
                            />
                            <div>
                                <h4 className="font-['Poppins'] text-[24px] font-semibold leading-[32px] text-black">
                                    Why Custom Development Beats One-Size-Fits-All Tools
                                </h4>
                                <p className="text-[#006E81] text-sm mt-2">Read the blog →</p>
                            </div>
                        </div>


                        <div className="flex gap-4 items-start">
                            <Image
                                src="/closeup-pretty-young-woman-checking-email.png"
                                alt="Collaboration"
                                width={180}
                                height={186}
                                className="rounded object-cover"
                            />
                            <div>
                                <h4 className="font-['Poppins'] text-[24px] font-semibold leading-[32px] text-black">
                                    Building Better Digital Experiences Through Collaboration
                                </h4>
                                <p className="text-[#006E81] text-sm mt-2">Read the blog →</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BlogEventsSection;
