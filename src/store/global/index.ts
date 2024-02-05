import { Provider, atom, useAtom, useSetAtom } from 'jotai';

export type Todo = {
  name: string;
  text: string;
};

const globalAtom = atom<Todo | null>(null);

export { globalAtom };
