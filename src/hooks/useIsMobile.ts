import {useEffect, useState} from "react";


export const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const mediaQuery = window.matchMedia('(max-width: 1260px)');
            setIsMobile(mediaQuery.matches);
            const handleMediaChange = (e: MediaQueryListEvent) => {
                setIsMobile(e.matches);
            };
            mediaQuery.addEventListener('change', handleMediaChange)
            return () => mediaQuery.removeEventListener('change', handleMediaChange);
        }
    }, []);

    return isMobile;
}