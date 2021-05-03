import React, { useCallback, useState, useMemo } from "react";
import { Button, makeStyles } from "@material-ui/core";
import DropdownComp from "../dropdownComp/DropdownComp";

const useStyles = makeStyles(() => ({
  submitBtn: {
    color: "#67ecbb",
    textTransform: "capitalize",
    marginLeft: "14px",
  }
}));
const UseDropdownHook = (RenderFn) => {
  const [state, setState] = useState([]);
  const classes = useStyles();
  const setValue = useCallback((id) => {
      let selectionAfterRemoval = state;
      if (state.includes(id)) {
        selectionAfterRemoval = selectionAfterRemoval.filter((current) => current !== id);
        setState([...selectionAfterRemoval]);
      } else {
        setState([...state, id]);
      }
    },
    [state]
  );

  const resetAll = useCallback((event) => {
    event.stopPropagation();
    setState([]);
  }, []);

  const ReturnComp = ({ Render, options, type, disabled, selectedState, callback, ...props }) => (
    <DropdownComp state={selectedState} type={type}>
      <RenderFn
        state={state}
        setState={setValue}
        options={options}
        {...props}
      />
      <div className="paper-action">
        <Button
          disabled={disabled}
          className={classes.submitBtn}
          onClick={callback}
        >
          Submit
        </Button>
        <Button size="small" style={{textTransform:"capitalize"}} onClick={resetAll}>
          Clear
        </Button>
      </div>
    </DropdownComp>
  );

  return [state, ReturnComp];
};

export default UseDropdownHook;
