import packageJson from '../package.json'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import * as React from "react"
import ClientLayout from "./ClientLayout"

const PROJECT_NAME = packageJson.name
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

export const metadata = {
    title: PROJECT_NAME,
    description: `${PROJECT_NAME} - A project management solution for music artists, producers and engineers.`,
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
        title: PROJECT_NAME,
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body>
                <ClientLayout>{children}</ClientLayout>
            </body>
        </html>
    );
}