import { useEffect, useState } from 'react';

function useDebounce(value, delay) {
    const [debounceValue, setDebounceValue] = useState('');

    useEffect(() => {
        const valueTimeout = setTimeout(() => {
            setDebounceValue(value);
        }, delay);
        return () => clearTimeout(valueTimeout);
    });
    return debounceValue;
}

export default useDebounce;
