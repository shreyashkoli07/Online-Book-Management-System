import React, { useState } from 'react'
// import { appBar, Tabs, Tap, Toolbar, Typography } from '@mui/material'
import { AppBar, Tabs, Tab, Toolbar, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom';
import LibraryBooksOutlineIcon from '@mui/icons-material/LibraryBooksOutlined'


// Tab-for single element-ready mate  from material ui

const Header = () => {

    const [value, setvalue] = useState();
    return (
        <>
            <AppBar sx={{ backgroundColor: '#6B5B95' }} position='sticky'>

                <Toolbar>
                    <Typography>
                        <LibraryBooksOutlineIcon />
                    </Typography>
                    <Tabs sx={{ m: "auto" }}
                        textColor={'white'}
                        value={value}
                        onChange={(e, val) => setvalue(val)}>

                        <Tab LinkComponent={NavLink} to='/add' label='Add Book' />
                        <Tab LinkComponent={NavLink} to='/books' label='Books' />
                        <Tab LinkComponent={NavLink} to='/' label='Home' />
                        <Tab LinkComponent={NavLink} to='/about' label='About' />
                        
                    </Tabs>

                </Toolbar>

            </AppBar>

        </>
    )
}

export default Header