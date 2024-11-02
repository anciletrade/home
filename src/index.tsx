// src/index.tsx
import React from 'react';
import {createRoot} from 'react-dom/client';
import LandingPage from './LandingPage';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
// import CssBaseline from '@mui/material/CssBaseline';
import './index.css';



const root = createRoot(document.getElementById('root') as HTMLElement);
root.render(
    <React.StrictMode>
        {/*<ThemeProvider theme={AppTheme}>*/}



                    <Router  basename='/ancile'>
                        <Routes>
                            {/*<Route path="/" element={<Dashboard currentUser={user as AuthUser} />}/>*/}
                            <Route index element={<LandingPage/>}/>
                            {/* Add a callback route if using Hosted UI */}
                            <Route path="*" element={<LandingPage/>}/>
                            {/*<Route path="*" element={<NoMatch/>}/>*/}
                        </Routes>

                    </Router>

    </React.StrictMode>
);


