import React, { useState } from "react";
import {
  Dialog, DialogTitle, DialogContent,
  DialogContentText, TextField, DialogActions, Button, IconButton,
  ListItemText, Checkbox,
  Grid, InputLabel, FormControl, Select, MenuItem
} from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import DatePicker from '@mui/lab/DatePicker';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import AdapterDateFns from '@mui/lab/AdapterDateFns';

export const AddMovieComponent = ({ open, closeModal }) => {

  const [time, setTime] = useState(null);
  const [genre, setGenre] = React.useState([]);

  const listMenu = [
    { label: 'ALL', value: 1 },
    { label: 'DOCUMENTARY', value: 2 },
    { label: 'COMEDY', value: 3 },
    { label: 'HORROR', value: 4 },
    { label: 'CRIME', value: 5 },
  ];

  const handleChange = (event) => {
    const { target: { value } } = event;
    setGenre(
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  const renderValueGenre = (event) => {
    console.log(event);

    const listLabel = [];
    event.map(e => 
      listMenu.filter(item => {
        if (item.value === e) {
          listLabel.push(item.label);
        }
      })
    );

    return listLabel.toString();
  }

  return (
    <Dialog open={open} className="add-movie">
      <DialogTitle>ADD MOVIE
        <IconButton
          aria-label="close"
          onClick={closeModal}
          sx={{
            position: 'absolute',
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent>
        <Grid container spacing={2}>
          <Grid item xs={6}>
            <TextField label="Title" variant="outlined" size="small" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DatePicker
                label="Release Date"
                value={time}
                onChange={(newValue) => {
                  setTime(newValue);
                }}
                renderInput={(params) => <TextField {...params} size="small" />}
              />
            </LocalizationProvider>
          </Grid>
          <Grid item xs={6}>
            <TextField label="Movie URL" variant="outlined" size="small" fullWidth />
          </Grid>
          <Grid item xs={6}>
            <TextField label="Rating" variant="outlined" size="small" fullWidth />
          </Grid>

          <Grid item xs={6}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label" size="small">Genre</InputLabel>
              <Select
                value={genre}
                label="Genre"
                size="small"
                multiple
                onChange={handleChange}
                renderValue={renderValueGenre}

              >
                {listMenu.map(item =>
                  <MenuItem key={item.value} value={item.value}>
                    <Checkbox />
                    <ListItemText primary={item.label} />
                  </MenuItem>
                )}
              </Select>
            </FormControl>
          </Grid>

          <Grid item xs={6}>
            <TextField label="Runtime" variant="outlined" size="small" fullWidth />
          </Grid>

          <Grid item xs={12}>
            <TextField
              label="Multiline"
              multiline
              rows={4}
              fullWidth
            />
          </Grid>

        </Grid>

      </DialogContent>
      <DialogActions>
        <Button onClick={closeModal} color="error" variant="outlined" >RESET</Button>
        <Button onClick={closeModal} variant="contained" color="error">SUBMIT</Button>
      </DialogActions>
    </Dialog>
  )
}