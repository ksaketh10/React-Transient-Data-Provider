import { Subject } from 'rxjs';
import { filter, map } from 'rxjs/operators';

export class TransientDataProvider {
  private static instance: TransientDataProvider;
  private store: Map<string, any> = new Map();
  private subject = new Subject<any>();

  private constructor() {}

  save(key: string, val: any) {
    this.store.set(key, val);
    this.subject.next({ key, val });
  }

  observeOnKey(key: string) {
    return this.subject.pipe(
      filter(data => data.key == key),
      map(data => data.val),
    );
  }

  get(key: string) {
    return this.store.get(key);
  }

  delete(key: string) {
    return this.store.delete(key);
  }

  hasKey(key: string) {
    return this.store.has(key);
  }

  tearDown() {
    this.store.clear();
    this.subject.unsubscribe();
  }

  static getInstance(): TransientDataProvider {
    if (!TransientDataProvider.instance) {
      TransientDataProvider.instance = new TransientDataProvider();
    }
    return TransientDataProvider.instance;
  }
}
