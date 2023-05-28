'use client'; 

import React from "react";
import AppBar from "@mui/material/AppBar";
import { Toolbar, Typography } from "@mui/material";
import { VOLLEY_VIEW } from "../constants/GlobalConstants";

export default function NavBar() {
    return (
        <React.Fragment>
            <AppBar color="primary">
                <Toolbar>
                    <Typography variant="h6">{VOLLEY_VIEW}</Typography>
                </Toolbar>
            </AppBar>            
        </React.Fragment>
    );
}