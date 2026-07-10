'use client';

import {Box, createTheme, CssBaseline, ThemeProvider} from "@mui/material";
import * as React from "react";
import {GlobalStyleProvider} from "@/context/GlobalStyleContext";
import ViewportOuterWrapper from "@/components/containers/ViewportOuterWrapper";
import {RouteProvider} from "@/context/RouteContext";
import {AudioPlayerProvider} from "@/context/AudioPlayerContext";

// Implement toggleable dark mode
const darkTheme = createTheme({
    palette: {
        mode: 'dark',
    },
});

export default function ClientLayout({ children }) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Box
                sx={{
                    minWidth: '100vw',
                    maxWidth: '100vw',

                    minHeight: '100vh',
                    maxHeight: '100vh',
                }}
            >
                <GlobalStyleProvider>
                    <RouteProvider>
                        <AudioPlayerProvider>
                            <ViewportOuterWrapper />
                            {children}
                        </AudioPlayerProvider>
                    </RouteProvider>
                </GlobalStyleProvider>
            </Box>
        </ThemeProvider>
    );
}
