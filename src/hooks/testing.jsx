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

