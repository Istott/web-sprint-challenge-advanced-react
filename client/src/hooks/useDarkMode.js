import { useEffect, useState } from "react";


export const useDarkMode = (key, initialValue) => {
    const [someValue, setSomeValue] = useState(key, initialValue);

    useEffect(() => {
        someValue === true ? document.body.classList.add('dark-mode') : document.body.classList.remove('dark-mode')

    }, [someValue])

    return [someValue, setSomeValue];
};
