import React, { useMemo } from 'react';
import './AnimatedBackground.css';

const AnimatedBackground = () => {
    // Generate organized stars using a grid system (8x8 = 64 stars)
    const stars = useMemo(() => {
        const rows = 8;
        const cols = 8;
        const starArray = [];

        for (let r = 0; r < rows; r++) {
            for (let c = 0; c < cols; c++) {
                // Base position based on grid cell
                const baseTop = (r / rows) * 100;
                const baseLeft = (c / cols) * 100;

                // Random offset within the cell ensuring no overlap or clumping
                const offsetTop = Math.random() * (100 / rows) * 0.8; // Use 80% of cell height
                const offsetLeft = Math.random() * (100 / cols) * 0.8; // Use 80% of cell width

                starArray.push({
                    id: `${r}-${c}`,
                    top: `${baseTop + offsetTop}%`,
                    left: `${baseLeft + offsetLeft}%`,
                    animationDelay: `${Math.random() * 5}s`,
                    opacity: Math.random() * 0.5 + 0.3,
                    size: Math.random() * 2 + 1
                });
            }
        }
        return starArray;
    }, []);

    return (
        <div className="ocean-background">
            {stars.map((star) => (
                <div
                    key={star.id}
                    className="star"
                    style={{
                        top: star.top,
                        left: star.left,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: star.animationDelay,
                        opacity: star.opacity
                    }}
                ></div>
            ))}
        </div>
    );
};

export default AnimatedBackground;
