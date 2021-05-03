import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import { ClickAwayListener, TextField, Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    margin: "48px",
    '& .MuiOutlinedInput-root': {
      '& fieldset': {
        borderColor: '#c5c5c5',
        cursor:"pointer"
      },
      '&:hover fieldset': {
        borderColor: '#c5c5c5',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#c5c5c5',
      },
    },
    "& .MuiOutlinedInput-input": {
      cursor:"pointer"
    }
  },
  paper: {
    border: '1px solid #dcd6d6',
    padding: theme.spacing(1),
    backgroundColor: theme.palette.background.paper,
    borderRadius: "5px",
    marginTop: "10px"
  },
}));

export default function DropdownComp(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const { type, state, children } = props;
  return (
    <div className={classes.root}>
      <TextField
        id="outlined-read-only-input"
        // label={props.type}
        defaultValue={state.length > 0 ? `${type}: ${state.toString()}` : type}
        onClick={handleClick}
        InputProps={{
          readOnly: true,
        }}
        variant="outlined"
      />
      <Popper id={id} open={open} anchorEl={anchorEl} disablePortal>
      <ClickAwayListener onClickAway={handleClick}>
        <div className={classes.paper}>{children}</div>
      </ClickAwayListener>
      </Popper>
    </div>
  );
}

