import { TransientDataProvider } from "../TransientDataProvider";
export function useSaveKey() {
    const transientDataProvider = TransientDataProvider.getInstance();
    return (key, val) => {
        transientDataProvider.save(key, val);
    };
}
//# sourceMappingURL=useSaveKey.js.map