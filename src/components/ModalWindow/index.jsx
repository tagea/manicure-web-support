import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogContent from '@material-ui/core/DialogContent';
import { Button } from '../../ui/Button';

import { GroupButtonStyled, DialogTitleStyled } from './styled';

const ModalWindow = (props) => {
  const { open, titleWindow, closeModal, children, view } = props;
  return (
    <Dialog
      open={open}
      maxWidth="lg"
      fullWidth
    >
      <DialogTitleStyled id="dialog">
        <Grid container justify="space-between">
          <Typography variant="h5">{titleWindow}</Typography>
          <GroupButtonStyled variant="subtitle1">
            <Button handleClick={closeModal} color="default" text="Back" />
            { view
              ? <Button variant="contained" color="secondary" text="Edit" />
              : <Button handleClick={closeModal} variant="contained" color="secondary" text="Save" />
            }
          </GroupButtonStyled>
        </Grid>
      </DialogTitleStyled>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

ModalWindow.propTypes = {
  open: PropTypes.bool,
  closeModal: PropTypes.func,
  titleWindow: PropTypes.string,
  children: PropTypes.node,
  view: PropTypes.bool
};

ModalWindow.defaultProps = {
  open: false,
  closeModal: () => false,
  titleWindow: '',
  children: null,
  view: false
};

export { ModalWindow };
