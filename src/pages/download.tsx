import React, {useEffect} from 'react';

export default function PageRedirect(): JSX.Element {
    useEffect(() => {
        // replace() so “Back” doesn’t land here again
        window.location.replace('https://drive.google.com/drive/folders/1qlMSLMCHQ6xGWxkSN7LUMiECTXHj2-Rb?usp=drive_link');
    }, []);

    return (
        <noscript>
        JavaScript is required to redirect—please click{' '}
        <a href="https://drive.google.com/drive/folders/1qlMSLMCHQ6xGWxkSN7LUMiECTXHj2-Rb?usp=drive_link">here</a>.
        </noscript>
    );
}
