import { createContext, useContext, useEffect, useState } from "react";

const NavigationContext = createContext();

export const useNav = () => useContext(NavigationContext);

export const NavigationProvider = ({ children }) => {
    const [navActive, setNavActive] = useState(false);

    const toggleNav = () => {
        setNavActive(prevNavActive => !prevNavActive);
    };

    const closeMenu = () => {
        setNavActive(false);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 1200) {
                closeMenu();
            }
        };

        // Add event listener
        window.addEventListener("resize", handleResize);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []); // Empty dependency array means this effect only runs once after the first render

    return (
        <NavigationContext.Provider value={{ navActive, toggleNav, closeMenu }}>
            {children}
        </NavigationContext.Provider>
    );
};
