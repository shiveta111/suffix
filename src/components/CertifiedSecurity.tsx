import Image from 'next/image';
import React from 'react';

const CertifiedSecurity = () => {
    return (
        <section className="relative w-full h-[471px] flex items-center overflow-hidden">

            <div className="absolute inset-0 w-full h-full">
                <Image
                    src="/assets/SecurityImage.png"
                    alt="Security Representative"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            <div className="absolute inset-0 bg-gradient-to-r from-[#006E81] via-[#006E81]/70 to-[#006E81]/20" />
            <div className="relative z-10 w-full flex items-center">
                <div className="max-w-[455px] ml-[146px] text-white">
                    <h2 className="text-[50px] font-bold leading-[100%] font-['Inter'] mb-4">
                        Certified Data<br />Security & Privacy
                    </h2>
                    <p className="text-sm leading-snug font-['Inter']">
                        Our ISO 27001 & 27701 certifications and strict compliance<br />
                        with data privacy laws ensure your sensitive information<br />
                        remains protected at every stage.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default CertifiedSecurity;