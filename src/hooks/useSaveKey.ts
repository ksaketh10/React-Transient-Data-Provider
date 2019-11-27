import { TransientDataProvider } from "../TransientDataProvider";

export function useSaveKey() {
   const transientDataProvider : TransientDataProvider = TransientDataProvider.getInstance();
    return (key: string, val: any) => {
        transientDataProvider.save(key, val);
    }
}