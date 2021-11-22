import React from 'react';
import { Box } from '@mui/material';
import { ItemMovieComponent } from './ItemMovieComponent';
export const ListMoviesComponent = ({ listMovies }) => {
    const movie = listMovies.map((item, index) => <ItemMovieComponent movie={item} key={index} />)
    return (
        <>
            <h3 className="number-of"> 39 movies found</h3>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignContent: 'flex-start',
                    // p: 1,
                    // m: 1,
                    bgcolor: '#232323',
                    // maxWidth: 380,
                    // height: 200,
                }}>
                {movie}

            </Box>
        </>
    );
}