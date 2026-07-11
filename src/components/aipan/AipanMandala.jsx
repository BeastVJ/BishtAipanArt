import React from 'react';

const AipanMandala = ({ size = 400, animated = true, className = '' }) => {
    const center = size / 2;
    const outerR = size * 0.45;
    const midR = size * 0.3;
    const innerR = size * 0.15;
    const coreR = size * 0.06;

    return (
        <div className={`relative ${className}`}>
            <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`} className={animated ? 'animate-mandala-spin' : ''}>
                {/* Outer ring - dots */}
                <circle cx={center} cy={center} r={outerR} fill="none" stroke="#A83B2C" strokeWidth="1" opacity="0.15" />
                <circle cx={center} cy={center} r={outerR + 5} fill="none" stroke="#A83B2C" strokeWidth="0.5" opacity="0.1" />
                <circle cx={center} cy={center} r={outerR - 5} fill="none" stroke="#A83B2C" strokeWidth="0.5" opacity="0.1" />

                {/* Outer dots pattern */}
                {[...Array(24)].map((_, i) => {
                    const angle = (i * 15 * Math.PI) / 180;
                    const x = center + outerR * Math.cos(angle);
                    const y = center + outerR * Math.sin(angle);
                    return <circle key={`dot-${i}`} cx={x} cy={y} r={2} fill="#A83B2C" opacity="0.3" />;
                })}

                {/* Middle ring - petals */}
                <circle cx={center} cy={center} r={midR} fill="none" stroke="#A83B2C" strokeWidth="0.8" opacity="0.2" />
                {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const x1 = center + (midR - 10) * Math.cos(angle);
                    const y1 = center + (midR - 10) * Math.sin(angle);
                    const x2 = center + (midR + 10) * Math.cos(angle);
                    const y2 = center + (midR + 10) * Math.sin(angle);
                    return (
                        <line key={`petal-${i}`} x1={x1} y1={y1} x2={x2} y2={y2}
                            stroke="#A83B2C" strokeWidth="1.5" opacity="0.25" />
                    );
                })}

                {/* Inner ring */}
                <circle cx={center} cy={center} r={innerR} fill="none" stroke="#A83B2C" strokeWidth="1" opacity="0.3" />
                {[...Array(12)].map((_, i) => {
                    const angle = (i * 30 * Math.PI) / 180;
                    const x = center + innerR * Math.cos(angle);
                    const y = center + innerR * Math.sin(angle);
                    return <circle key={`inner-dot-${i}`} cx={x} cy={y} r={1.5} fill="#A83B2C" opacity="0.4" />;
                })}

                {/* Core */}
                <circle cx={center} cy={center} r={coreR} fill="#A83B2C" opacity="0.6" />
                <circle cx={center} cy={center} r={coreR * 0.5} fill="#C59A52" opacity="0.5" />
                <circle cx={center} cy={center} r={2} fill="#A83B2C" />

                {/* Decorative triangles */}
                {[...Array(8)].map((_, i) => {
                    const angle = (i * 45 * Math.PI) / 180;
                    const r1 = midR + 8;
                    const r2 = midR - 8;
                    const x1 = center + r1 * Math.cos(angle);
                    const y1 = center + r1 * Math.sin(angle);
                    const x2 = center + r2 * Math.cos(angle - 0.2);
                    const y2 = center + r2 * Math.sin(angle - 0.2);
                    const x3 = center + r2 * Math.cos(angle + 0.2);
                    const y3 = center + r2 * Math.sin(angle + 0.2);
                    return (
                        <polygon key={`tri-${i}`} points={`${x1},${y1} ${x2},${y2} ${x3},${y3}`}
                            fill="none" stroke="#A83B2C" strokeWidth="0.5" opacity="0.2" />
                    );
                })}
            </svg>
        </div>
    );
};

export default AipanMandala;
