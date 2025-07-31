import Image from "next/image";

export default function TrustedPartnershipsSection() {
    return (
        <section
            className="w-full py-12"
            style={{
                background: "linear-gradient(to right, #419DB4, #FCFCFC)",
            }}
        >
            <div className="px-6 md:px-16">
                <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-12 items-center justify-between">

                    <div className="text-white flex-shrink-0" style={{ marginLeft: '-4rem' }}>
                        <h4 className="text-xs font-medium uppercase mb-1 text-white opacity-80 tracking-wider">
                            Our Clients
                        </h4>
                        <h2 className="w-[610px] h-[136px] text-[50px] font-bold leading-[100%] text-white font-['Open_Sans'] mb-4">
                            Driving Success Through Trusted Partnerships
                        </h2>
                        <p className="w-[614px] h-[150px] text-[22px] font-normal leading-[100%] text-white font-['Open_Sans']">
                            At Suffix Process Solutions Pvt. Ltd., our clients are at the heart
                            of everything we do. We take pride in collaborating with leading
                            BFSI organizations, delivering tailored solutions that drive
                            efficiency, security, and growth. Their continued trust fuels our
                            commitment to innovation and excellence.
                        </p>
                    </div>


                    <div className="flex-1 max-w-[700px]">
                        <div className="grid grid-cols-4 gap-3 items-center justify-items-center">

                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/lic.png"
                                    alt="LIC"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/reliance.png"
                                    alt="Reliance"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/icici.png"
                                    alt="ICICI Lombard"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/magma.png"
                                    alt="MAGMA"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>

                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/tata.png"
                                    alt="TATA"
                                    width={100}
                                    height={70}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/shriram.png"
                                    alt="Shriram"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/bajaj.png"
                                    alt="Bajaj Allianz"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                            <div className="flex items-center justify-center h-[120px] w-[160px]">
                                <Image
                                    src="/clients/indusind.png"
                                    alt="IndusInd Bank"
                                    width={140}
                                    height={100}
                                    className="object-contain"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 