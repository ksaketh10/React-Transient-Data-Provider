import { TransientDataProvider } from "../TransientDataProvider";
import React from 'react';

interface state {
    value: any;
}

export function useObserveOnKey(key: string) {
    const transientDataProvider: TransientDataProvider = TransientDataProvider.getInstance();
    const [state, setState] = React.useState<state>({
        value: null
    });
    transientDataProvider.observeOnKey(key).subscribe(value => {
        setState({ value })
    });
    return state.value;
}