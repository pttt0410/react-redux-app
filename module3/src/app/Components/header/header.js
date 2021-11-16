import ReactDom from 'react-dom';
import Button from '@mui/material/Button'
import '../../Styles/header.scss'
import React, { useState } from 'react';
import { TextField, Box } from '@mui/material';
import { AddMovieComponent } from '../list-movie/add-movie';

export const HeaderComponent = () => {

    const [isOpen, setOpen] = useState(false);

    const openModalAddMovie = () => {
        setOpen(true);
    }

    const closeModal = () => {
        setOpen(false);
    }

    return (
        <>
            <div className="header-title">
            <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        // bgcolor: '#232323',
                    }}
                >
                    <div className="text-header">netflixroulete</div>
                    <Button color='error' variant="contained" onClick={openModalAddMovie}> + ADD MOVIE</Button>
                </Box>
            </div>

            <div className="search-box">
                <h1 className="header-search">FIND YOUR MOVIE</h1>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        p: 1,
                        m: 1,
                        // bgcolor: 'background.paper',
                        // maxWidth: 800,
                    }}
                >
                    <TextField className="input-search" focused fullWidth size="small" label="What do you want to watch" variant="outlined" />
                    <Button color="error" variant="contained">SEARCH</Button>
                </Box>
            </div>

            <AddMovieComponent open={isOpen} closeModal={closeModal}/>
        </>
    )
}