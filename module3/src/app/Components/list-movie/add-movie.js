import React from "react";
import { Dialog, DialogTitle,DialogContent, DialogContentText, TextField, DialogActions, Button, IconButton } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';

export const AddMovieComponent = ({open, closeModal}) => {

    return(
        <Dialog open={open} className="add-movie">
        <DialogTitle>ADD MOVIE
        {closeModal ? (
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
      ) : null}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={closeModal}>Cancel</Button>
          <Button onClick={closeModal}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    )
}