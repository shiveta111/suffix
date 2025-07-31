import { ChevronLeft, ChevronRight } from "lucide-react";

export default function HeroSection() {
    return (
        <section className="relative text-white h-[500px] overflow-hidden">

            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: "url('/hero-image.png')" }}
            >
                <div className="absolute inset-0 bg-black/20"></div>
            </div>

            <div className="relative z-10 h-full flex items-center">
                <div className="w-full pl-16">

                    <div className="max-w-xl space-y-6">
                        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
                            Empowering BFSI with<br />
                            Smarter, Secure Solutions
                        </h1>
                        <p className="text-lg leading-relaxed opacity-90">
                            At Suffix, we combine advanced technology with expert human insight to streamline your processes, enhance compliance, and drive measurable business growth — all under one trusted roof.
                        </p>
                        <button className="bg-white text-[#006E81] px-8 py-3 rounded-md hover:bg-gray-100 font-semibold shadow-lg transition-colors">
                            Learn More
                        </button>
                    </div>
                </div>
            </div>


            <button className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition-colors">
                <ChevronLeft className="w-6 h-6 text-white" />
            </button>
            <button className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition-colors">
                <ChevronRight className="w-6 h-6 text-white" />
            </button>
        </section>
    );
}