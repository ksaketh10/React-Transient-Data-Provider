import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';
export class TransientDataProvider {
    constructor() {
        this.store = new Map();
        this.subject = new Subject();
    }
    save(key, val) {
        this.store.set(key, val);
        this.subject.next({ key, val });
    }
    observeOnKey(key) {
        return this.subject.pipe(filter(data => data.key == key), map(data => data.val));
    }
    get(key) {
        return this.store.get(key);
    }
    delete(key) {
        return this.store.delete(key);
    }
    hasKey(key) {
        return this.store.has(key);
    }
    tearDown() {
        this.store.clear();
        this.subject.unsubscribe();
    }
    static getInstance() {
        if (!TransientDataProvider.instance) {
            TransientDataProvider.instance = new TransientDataProvider();
        }
        return TransientDataProvider.instance;
    }
}
//# sourceMappingURL=index.js.map