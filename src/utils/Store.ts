import { IUser } from '../api/AuthApi';
import { IGetChat } from '../api/ChatsApi';
import Block from './Block';
import { EventBus } from './EventBus';
import { setter } from './setter';

export interface State {
  user?: IUser;
  chats?: IGetChat[];
}

enum StorageEvent {
  UpdateState = 'update',
}

class Store extends EventBus {
  private state: State = {};

  getState() {
    return this.state;
  }

  set(path: string, value: unknown) {
    setter(this.state, path, value);

    console.log(this.state);

    this.emit(StorageEvent.UpdateState, this.state);
  }
}

export const store = new Store();

export function withStore(mapStateToProps: (state: State) => any) {
  return (Component: typeof Block) => {
    return class extends Component {
      constructor(props: any) {
        super('div', { ...props, ...mapStateToProps(store.getState()) });

        store.on(StorageEvent.UpdateState, () => {
          const propsFromState = mapStateToProps(store.getState());
          this.setProps(propsFromState);
        });
      }
    };
  };
}
