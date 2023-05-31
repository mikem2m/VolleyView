'use client'; 

import React from "react";
import AppBar from "@mui/material/AppBar";
import { Button, IconButton, Toolbar, Typography } from "@mui/material";
import SportsVolleyballIcon from '@mui/icons-material/SportsVolleyball';
import Link from "next/link";
import { useRouter } from "next/router";
import { NAVIGATION_BAR_LEFT_HEADER, NAVIGATION_BAR_RIGHT_BUTTON_LABEL, PRIMARY_COLOR_RGB } from "../constants";

const NavBar = () => {

    const router = useRouter();

    const disableLoginButton = router.pathname === '/login';

    return (
        <React.Fragment>
            <AppBar color="primary" position="static" >
                <Toolbar>
                    <Link href="/">
                        <IconButton color="primary" sx={{ color: 'white' }}>
                            <SportsVolleyballIcon/>
                        </IconButton>
                    </Link>
                    <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center' }}>
                        {NAVIGATION_BAR_LEFT_HEADER}
                    </Typography>
                    <Link href="/login">
                        <Button color="inherit" sx={{ color: PRIMARY_COLOR_RGB }} variant="contained" disabled={disableLoginButton}>
                        {NAVIGATION_BAR_RIGHT_BUTTON_LABEL}
                        </Button>
                    </Link>
                </Toolbar>
            </AppBar>
        </React.Fragment>            
    )
}

export default NavBar;