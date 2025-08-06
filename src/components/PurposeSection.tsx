import React from 'react';
import Image from 'next/image';

const services = [
    {
        title: "Human-Driven Process Solutions",
        image: "/assets/human-driven.png",
        description:
            "At Suffix Process Solutions Pvt. Ltd, we provide industry-trained manpower tailored specifically for BFSI operational workflows...",
    },
    {
        title: "RPA Solutions",
        image: "/assets/rpa-card.png",
        description:
            "Our Robotic Process Automation (RPA) services streamline manual, rule-based, and time-consuming tasks across...",
    },
    {
        title: "Automation Tools",
        image: "/assets/automation.png",
        description:
            "Our intelligent automation tools harness AI, NLP, and advanced rule-based engines to deliver capabilities for...",
    },
];

const PurposeSection = () => {
    return (
        <section className="bg-[#F9FAFB] py-16">
            <div className="max-w-7xl mx-auto px-6 lg:px-12">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                    <div className="space-y-8">
                        <div>
                            <h1 className="text-6xl md:text-7xl font-bold text-[#006B81] uppercase leading-tight tracking-tight">
                                PURPOSE
                            </h1>
                            <p className="text-2xl font-light text-[#000000] mt-4">
                                Built Solutions for the BFSI Sector
                            </p>
                        </div>

                        <div className="text-[#333] space-y-6 text-base leading-7 font-normal">
                            <p>
                                At Suffix Process Solutions Pvt. Ltd., we empower Banking, Financial Services, and Insurance (BFSI) institutions to thrive in a rapidly evolving, Phygital landscape by delivering intelligent, secure, and comprehensive process solutions. Our unique strength lies in seamlessly integrating manpower-driven services, cutting-edge automation tools, and Robotic Process Automation (RPA)&mdash;providing both tech and non-tech solutions under one unified roof.
                            </p>
                            <p>
                                In a world increasingly defined by digital precision and human insight, we passionately believe in the synergy of technology&rsquo;s accuracy with the nuanced wisdom of human expertise. Our philosophy of &ldquo;Hi-tech. Hybrid. Human.&rdquo; drives every solution we deliver, ensuring streamlined workflows, cost reduction, enhanced compliance, and superior service quality.
                            </p>
                            <p>
                                Committed to the highest standards of data security and privacy, our services comply fully with ISO 27001:2022, ISO 27701:2019, and the Digital Personal Data Protection Act (DPDPA)&mdash;guaranteeing trust, transparency, and accountability at all operational levels. At Suffix, we commit to being your trusted partner&mdash;elevating excellence into extraordinary results, turning potential into tangible success, and shaping every effort into your unique hallmark.
                            </p>
                        </div>
                    </div>

                    <div className="space-y-6">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden"
                            >
                                <div className="relative h-48">
                                    <Image
                                        src={service.image}
                                        alt={service.title}
                                        fill
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                        className="object-cover"
                                        priority={index === 0}
                                    />
                                </div>
                                <div className="p-6">
                                    <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                        {service.title}
                                    </h3>
                                    <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                                        {service.description}
                                    </p>
                                    <button className="inline-flex items-center text-[#006B81] font-medium hover:text-[#004d5a] transition-colors text-sm">
                                        <span className="mr-2">Learn more</span>
                                        <svg
                                            className="w-4 h-4"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M9 5l7 7-7 7"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PurposeSection;