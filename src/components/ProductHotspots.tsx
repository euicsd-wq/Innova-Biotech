
import React from 'react';

const Hotspot: React.FC<{ top: string; left: string; title: string; children: React.ReactNode }> = ({ top, left, title, children }) => (
    <div className="absolute group" style={{ top, left }}>
        <div className="relative flex items-center justify-center">
            <div className="absolute w-5 h-5 bg-brand-secondary rounded-full opacity-75 animate-ping"></div>
            <div className="w-3 h-3 bg-brand-secondary rounded-full cursor-pointer"></div>
        </div>
        <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 p-3 bg-brand-primary text-white text-xs rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-hover:translate-y-0 translate-y-2 transition-all duration-300 pointer-events-none z-10">
            <h4 className="font-bold text-sm">{title}</h4>
            <p>{children}</p>
            <div className="absolute left-1/2 -translate-x-1/2 top-full w-0 h-0 border-x-8 border-x-transparent border-t-8 border-t-brand-primary"></div>
        </div>
    </div>
);

const ProductHotspots: React.FC = () => {
    return (
        <div className="text-center">
            <h2 className="text-3xl font-extrabold text-text-primary sm:text-4xl">
                Explore the DX-1 Platform
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-text-secondary leading-8">
                Hover over the points below to discover the key features that make our analyzer a powerful tool for point-of-care diagnostics.
            </p>
            <div className="mt-8 relative max-w-2xl mx-auto">
                <img
                    src="https://cdn.innovadx.com/images/fiatest-pro-analyzer-labeled.png"
                    alt="Sleek, modern handheld diagnostic analyzer"
                    className="w-full h-auto object-contain rounded-xl"
                />
                <Hotspot top="45%" left="55%" title="5-Inch Touchscreen">
                    An intuitive, high-resolution color display with guided workflows simplifies operation and minimizes user error.
                </Hotspot>
                 <Hotspot top="70%" left="30%" title="Test Cassette Slot">
                    Simply add the prepared sample to the single-use cassette and insert it here. The analysis begins automatically.
                </Hotspot>
                <Hotspot top="20%" left="80%" title="Built-in Thermal Printer">
                    Immediately print results for patient records or transfer data digitally. Ensures complete traceability at the point of care.
                </Hotspot>
                 <Hotspot top="75%" left="10%" title="Connectivity & Power Ports">
                    Equipped with Wi-Fi, USB, Type-C and LAN ports for seamless integration with LIS/HIS and the InnovaDx Connect cloud platform.
                </Hotspot>
            </div>
        </div>
    );
};

export default ProductHotspots;
