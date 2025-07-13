import { motion, useMotionTemplate, useMotionValue, animate } from "framer-motion";
import { useEffect, useState } from "react";

// Array of colors to be animated
const COLORS_LIGHT = ["#FFD9CF", "#DCEEFF", "#FFEFC1", "#D0C7FF"];
const COLORS_DARK = ["#0B8062", "#0F355E", "#6A3F6E", "#741F33"];

export const AuroraBackground = () => {
    const [isDark, setIsDark] = useState(false);

    useEffect(() => {
        const observer = new MutationObserver(() => {
            setIsDark(document.documentElement.classList.contains("dark"));
        })

        observer.observe(document.documentElement, {attributes: true, attributeFilter: ["class"]});

        return () => observer.disconnect();
    }, [])
    
    // https://medium.com/design-bootcamp/beautiful-aurora-gradient-with-react-framer-motion-9ab40674b5fb
    // extended above bg using framer motion

    // Initialize motion value with the first color
    const colors = isDark ? COLORS_DARK : COLORS_LIGHT

    const color = useMotionValue(colors[0]);
    const color1 = useMotionValue(colors[1]);
    
    useEffect(() => {
        // Animate the color changes in a loop
        animate(color, colors, {
            ease: "easeIn",  // Easing function for smooth transitions
            duration: 10,       // Duration for the entire color transition cycle
            repeat: Infinity,   // Repeat the animation infinitely
            repeatType: "mirror", // Reverses the animation direction on each cycle
        });

        animate(color1, [...colors.slice(1),colors[0]], {
            ease: "easeOut",  // Easing function for smooth transitions
            duration: 15,       // Duration for the entire color transition cycle
            repeat: Infinity,   // Repeat the animation infinitely
            repeatType: "reverse", // Reverses the animation direction on each cycle
            delay: 5,        
        });
    }, [colors, color, color1]);

    // Use motion template to create a dynamic background gradient
    const backgroundImage = useMotionTemplate`linear-gradient(45deg, ${isDark ? "#121214" : "#fafaf8" } 10%, ${color1} 40%, ${color} 60%, ${isDark ? "#121214" : "#fafaf8" } 100%)`;

    return (
        <motion.section
            style={{ backgroundImage }}
            className="absolute inset-0 -z-10"
        >
            {/* Additional content can be added here */}
        </motion.section>
    );
}