import React, { useCallback } from 'react'
import { Checkbox, ListItemText, MenuItem } from "@material-ui/core";

function CheckboxComonent({value, id, handleClick,name}) {
  const handleClickCallback = useCallback((event) => { 
    handleClick(id, event);
      },[]);
      
    return (
      <MenuItem key={id} value={id}
      onClick={handleClickCallback}>
        <Checkbox
          checked={(value).includes(id)}
          value={id}
        />
        <ListItemText primary={name}/>
      </MenuItem>
    );
  }

export default React.memo(CheckboxComonent);