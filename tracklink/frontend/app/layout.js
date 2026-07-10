import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import * as React from "react";
import ClientLayout from "./ClientLayout";

export const metadata = {
    title: 'Tracklink',
    description: 'Tracklink',
    icons: {
        icon: [
            { url: '/icon/icon0.svg', type: 'image/svg+xml' },
            { url: '/icon/icon1.png', type: 'image/png' },
        ],
        shortcut: '/icon/favicon.ico',
        apple: '/icon/apple-icon.png',
    },
    manifest: '/icon/manifest.json',
    appleWebApp: {
        title: 'Tracklink',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
        <head>
            <meta name="apple-mobile-web-app-title" content="Tracklink" />
        </head>
        <body>
            <ClientLayout>{children}</ClientLayout>
        </body>
        </html>
    );
}