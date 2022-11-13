// useReducer Hook test???

import { 
    useState, 
    useEffect, 
    useContext, 
    useReducer,
    useCallback,
    useMemo,
    useRef
} from 'react';

const reducer = (state, action) => {
    switch (action.type) {
        case '':
          return state;
        case '':
          return state;
        default:
          throw new Error();
      }
    
};

export const useSaveReducer = (initialArg) => {
    const [state, dispatch] = useReducer(reducer, initialArg);
    

    return [state, dispatch];
};


// useTable
const tableTemplate = {
    className: "table",
    dataObj: [
        {company: "Alfreds Futterkiste", contact: "Maria Anders", country: "Germany"},
        {company: "Centro comercial Moctezuma", contact: "Francisco Chang", country: "Mexico"}
    ]
};

export const useTable = (tableInfo = tableTemplate) => {

    return (
        <table className={tableInfo.className}>
            <tr>
                {tableInfo.dataObj.keys().map((header)=> {
                    return <th> {header} </th>
                })}
            </tr>
            {tableInfo.dataObj.map((objItem) => {
                return (
                    <tr>
                        {objItem.map((info) => {
                            return <td> {info} </td>
                        })}
                    </tr>
                )
            })}
        </table>
    )
};

// useUList
const listTemplate = ["item", "item", "item", "item"];
// Pointless? --> just make it as a component
export const useUList = (listArray = listTemplate, customStyle) => {
    // How do you want to handle the styles?
    // CSS or styleObj
    const style = {};
    return (
        <ul style={customStyle? customStyle: style}>
            {listArray.map((item) => {
                return <li> {item} </li>
            })}
        </ul>
    )
};

// useOList
export const useOList = (listArray = listTemplate, customStyle) => {
    // How do you want to handle the styles?
    const style = {};
    return (
        <ol style={customStyle? customStyle: style}>
            {listArray.map((item) => {
                return <li> {item} </li>
            })}
        </ol>
    )
};