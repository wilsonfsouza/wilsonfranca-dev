import { motion, useAnimation, MotionProps } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode, useEffect } from "react";

interface FadeInWhenVisibleProps extends MotionProps {
    children: ReactNode;
}

export function FadeInWhenVisible({ children, ...rest }: FadeInWhenVisibleProps) {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start("visible");
        }
    }, [controls, inView]);

    return (
        <motion.div
            ref={ref}
            animate={controls}
            initial="hidden"
            transition={{ duration: 0.5 }}
            variants={{
                visible: { opacity: 1, scale: 1 },
                hidden: { opacity: 0, scale: 0.9 }
            }}
            style={{ width: '100%', flex: '1 0 auto' }}
            {...rest}
        >
            {children}
        </motion.div>
    );
}