const items = [
    {
        icon: "/assets/icons/hybrid.png",
        text: "Hybrid Approach Combining Human Expertise and Automation",
    },
    {
        icon: "/assets/icons/bfsi.png",
        text: "Tailored Solutions for the BFSI Sector",
    },
    {
        icon: "/assets/icons/process.png",
        text: "Process Centralization and Efficiency Optimization",
    },
    {
        icon: "/assets/icons/security.png",
        text: "Advanced Data Security and Compliance",
    },
    {
        icon: "/assets/icons/automation.png",
        text: "Comprehensive Automation Capabilities",
    },
    {
        icon: "/assets/icons/expertise.png",
        text: "Proven Expertise with Established Clients",
    },
];

const ClientDeliverySection = () => {
    return (
        <section className="bg-[#006E81] text-white px-6 md:px-10 py-16 md:flex md:justify-between md:items-start">
            <div className="md:w-1/3 mb-10 md:mb-0">
                <h2 className="text-[34px] leading-[39.78px] font-semibold font-['Poppins'] mb-4">
                    Delivering for our <br /> clients at scale
                </h2>
                <p className="text-[15px] leading-[16.8px] font-light font-['Poppins']">
                    We deliver consistent, high-quality solutions tailored to our clients' needs—at any scale.
                </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 md:w-[65%]">
                {items.map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                        <img
                            src={item.icon}
                            alt={`icon-${index + 1}`}
                            className="w-10 h-10 flex-shrink-0"
                        />
                        <p className="text-white text-sm leading-snug font-['Poppins']">
                            {item.text}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default ClientDeliverySection;
