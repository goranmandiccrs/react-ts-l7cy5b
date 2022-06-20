import { types } from 'mobx-state-tree';

export const RootModel = types
  .model({
    someProp: '',
  })
  .actions((self) => {
    return {
      afterCreate() {
        Object.defineProperty(window, 'rootInstance', {
          get() {
            return self;
          },
        });
      },
      setSomeProp(event: any) {
        const value = event.currentTarget.value;
        self.someProp = value;
      },
    };
  })
  .named('RootModel');
