import {useEffect, useRef, useState} from "react";

import "./styles.css";


const LoadableImg = ({src, alt}) => {
    const [isLoaded, setIsLoaded] = useState(false);

    const imageRef = useRef(null);
    const containerRef = useRef(null);


    useEffect(() => {
        if (isLoaded) return;
        if (imageRef.current) {
            imageRef.current.onload = () => setIsLoaded(true);
        }
        return () => containerRef.current = null;
    }, [isLoaded]);

    return (
        <div ref={containerRef} className={isLoaded ? 'l_container_loaded' : 'l_container'}>
            <img ref={imageRef} className={isLoaded ? "l_image_loaded" : 'l_image'}
                 src={src}
                 alt={alt}/>
        </div>
    );
};

export default LoadableImg;
