import React, { useState, useEffect } from "react";

const SingleColor = ({ index, rgb, hexColor }) => {
    const [alert, setAlert] = useState(false);

    const bcg = rgb.join(",");
    const hexValue = `#${hexColor}`;

    const handleClick = () => {
        setAlert(true);
        navigator.clipboard.writeText(hexValue);
    };

    useEffect(() => {
        const timer = setTimeout(() => {
            setAlert(false);
        }, 800);
        return () => {
            clearTimeout(timer);
        };
    }, [alert]);

    return (
        <article onClick={handleClick} className={`color ${index > 10 && "color-light"}`} style={{ backgroundColor: `rgb(${bcg})` }}>
            {alert && <p className="alert">copied to clipboard</p>}
        </article>
    );
};

export default SingleColor;
