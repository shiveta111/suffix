import Image from "next/image";

const TechAndCollaborationSection = () => {
    return (
        <section className="w-full">

            <div
                className="relative h-[471px] w-full bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: "url('/assets/integrated-tech-banner.png')"
                }}
            >

                <div
                    className="absolute inset-0 flex items-center px-6 md:px-16"
                    style={{
                        background: 'linear-gradient(90deg, rgba(0, 110, 129, 0.8) 0%, rgba(0, 110, 129, 0.3) 60%, rgba(0, 110, 129, 0.1) 100%)'
                    }}
                >
                    <div className="max-w-[650px] text-white">
                        <h2 className="text-[50px] font-bold leading-tight font-['Inter']">
                            Integrated Tech & <br /> Human Solutions
                        </h2>
                        <p className="mt-4 text-[20px] font-normal leading-snug font-['Inter']">
                            At Suffix, we blend advanced automation with skilled manpower to
                            deliver seamless, hybrid process solutions—offering the best of
                            both worlds under one roof.
                        </p>
                    </div>
                </div>
            </div>

            <div className="bg-white py-16">

                <div className="flex items-center gap-4 mb-6">
                    <div className="bg-[#006E81] pl-6 md:pl-16 pr-6 py-3 rounded-r-md">
                        <h3 className="text-[40px] font-semibold text-white font-['Poppins'] tracking-tight leading-[53.82px]">
                            Our Valued Collaborations
                        </h3>
                    </div>
                    <Image
                        src="/assets/collaboration-icon.png"
                        alt="Collab icon"
                        width={90}
                        height={90}
                    />
                </div>

                <div className="px-6 md:px-16">
                    <p className="text-[22px] font-[400] leading-relaxed text-[#000] font-['Open Sans'] max-w-[90%]">
                        At Suffix Process Solutions, our unwavering commitment to excellence
                        has earned the trust of some of the most respected names in the BFSI
                        sector. We are proud to deliver cutting-edge process automation and
                        compliance solutions to a growing list of forward-thinking
                        organizations. Our clients rely on us for our precision, efficiency,
                        and innovation, and we are honored to support their digital
                        transformation journeys.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechAndCollaborationSection;