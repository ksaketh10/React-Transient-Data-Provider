import { TransientDataProvider } from "../TransientDataProvider";
import React from 'react';
export function useObserveOnKey(key) {
    const transientDataProvider = TransientDataProvider.getInstance();
    const [state, setState] = React.useState({
        value: null
    });
    transientDataProvider.observeOnKey(key).subscribe(value => {
        setState({ value });
    });
    return state.value;
}
//# sourceMappingURL=useObserveOnKey.js.map