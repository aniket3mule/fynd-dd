import React, { useCallback, useMemo, useState } from 'react'
import CheckboxComonent from '../dropdownHook/ChekboxComp';
import UseDropdownHook from '../dropdownHook/UseDropdownHook'

const ColorFilters = () => {
    const Colors = ["red", "yellow", "green", "blue"];

    function List(props) {
        let ret = [];
        props.options.forEach((name, i) => {
            ret.push(
                <CheckboxComonent
                    key={`${name}_${i}`}
                    id={name}
                    value={props.state}
                    handleClick={props.setState}
                    name={name}
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
                options={Colors}
                Render={CheckboxComonent}
                disabled={disabled}
                selectedState={selectedState}
                callback={applyHandler}
                type="Colors"
            />
        </div>
    )
}
export default ColorFilters
