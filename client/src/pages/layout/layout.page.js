//MUI
import {Grid} from '@mui/material'
//Component
import MyHomeAppBarComponent from '../../components/appBar/home.appBar.component'
import MyFooterComponent from '../../components/footer/footer.component';
//Imports
import * as React from 'react'
import {Outlet} from 'react-router-dom'

export default function MyLayoutPage() {
    return (
        <Grid sx={{backgroundColor: '#FBF3EA'}}>
            <MyHomeAppBarComponent />
            <Outlet />
            <MyFooterComponent links={['Privacy Policy']} />
        </Grid>
    );
}