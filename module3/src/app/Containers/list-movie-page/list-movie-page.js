import React, { useState } from "react";
import { ListMoviesComponent } from "../../Components/list-movie/list-movie";
import { ListMenuComponent } from "../../Components/list-movie/list-menu";
import { Box } from '@mui/material';
import '../../Styles/movie.scss';

export const ListMoviePage = () => {
    const listMenu = [
        { label: 'ALL', value: 1 },
        { label: 'DOCUMENTARY', value: 2 },
        { label: 'COMEDY', value: 3 },
        { label: 'HORROR', value: 4 },
        { label: 'CRIME', value: 5 },
    ];

    const listfeature = [
        { label: 'SORT', value: 1},
        { label: 'RELEASE  DATE', value: 2},

    ];

    const listMovies = [
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},
        { name: 'Starter', year: '2018', tag: 'Drama, Music, Action' , img: '../../../../assets/poster/2.ipg'},

    ]

    return (
        <div className="movie-section">
            <Box
                className='menu-section'
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                }}
            >
                <ListMenuComponent listMenu={listMenu}></ListMenuComponent>
                <ListMenuComponent listMenu={listfeature}></ListMenuComponent>
            </Box>

            <ListMoviesComponent listMovies={listMovies}></ListMoviesComponent>
        </div>
    )
}