import React, { useCallback, useMemo, useState } from 'react'
import CheckboxComonent from '../dropdownHook/ChekboxComp';
import UseDropdownHook from '../dropdownHook/UseDropdownHook'
const ComponentFilter = () => {
    // const Colors = ["red", "yellow", "green", "blue"];
    const componentsArray = useMemo(() => [{ "title": "Button", "path": "demo-button" },
    { "title": "Selection Control", "path": "demo-selection-control" },
    { "title": "Input", "path": "demo-input" },
    { "title": "Snackbar", "path": "demo-snack-bar" },
    { "title": "Chips", "path": "demo-chips" },
    { "title": "Progress Tabs", "path": "demo-vertical-tabs" },
    { "title": "Typography", "path": "demo-wip" },
    ])

    function List(props) {
        let ret = [];
        props.options.forEach(({ title, path }) => {
            ret.push(
                <CheckboxComonent
                    key={`${path}_${title}`}
                    id={path}
                    value={props.state}
                    handleClick={props.setState}
                    name={title}
                />
            );
        });
        return <>{ret}</>;
    }

    const [state, ComponentsFilter] = UseDropdownHook(List);
    const [selectedState, setselectedState] = useState([])
    
    const disabled = useMemo(() => {
        if (state.length === selectedState.length) {
            return state.length === 0 ? true : state.every((el) => (selectedState).includes(el));
        } else return false;
    }, [state, selectedState]);

    const applyHandler = useCallback(() => { 
        setselectedState(state);
    }, [state]);

    return (
        <div>
            <ComponentsFilter
                options={componentsArray}
                Render={CheckboxComonent}
                disabled={disabled}
                selectedState={selectedState}
                callback={applyHandler}
                type="Components"
            />
        </div>
    )
}

export default React.memo(ComponentFilter)
