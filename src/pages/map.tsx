import React, {useEffect} from 'react';

export default function PageRedirect(): JSX.Element {
    useEffect(() => {
        // replace() so “Back” doesn’t land here again
        window.location.replace('https://map.ogcraft.org/');
    }, []);

    return (
        <noscript>
        JavaScript is required to redirect—please click{' '}
        <a href="https://map.ogcraft.org/">here</a>.
        </noscript>
    );
}
