import { forwardRef, useState } from 'react';
import image from '~/assets/images';
import styles from './Image.module.scss';
import classNames from 'classnames';

const Images = forwardRef(({ src, alt, className, fallback: customfallback = image.no_image, ...props }, ref) => {
    const [fallback, setFallback] = useState('');

    const handleErrorImage = () => {
        setFallback(customfallback);
    };

    return (
        <img
            ref={ref}
            alt={alt}
            src={fallback || src}
            className={classNames(styles.wrapper, className)}
            {...props}
            onError={handleErrorImage}
        />
    );
});

export default Images;
