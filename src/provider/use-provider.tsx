'use client';

import React, {
  type ReactNode,
  type Context,
  createContext,
  useContext,
  useState,
} from 'react';

const initialContext = <T,>() => new Map<string, T>();
const Context = createContext(initialContext());

type ProviderProps = {
  children: ReactNode;
};

export const Provider = ({children}: ProviderProps) => (
  <Context.Provider value={initialContext()}>{children}</Context.Provider>
);

const useContextProvider = <T,>(key: string) => {
  const context = useContext(Context);
  return {
    set value(v: T) {
      context.set(key, v);
    },
    get value() {
      if (!context.has(key)) {
        throw Error(`Context key '${key}' Not Found!`);
      }
      return context.get(key) as T;
    },
  };
};

export const useProvider = <T,>(key: string, initialValue?: T) => {
  const provider = useContextProvider<Context<T>>(key);
  if (initialValue !== undefined) {
    const Context = createContext<T>(initialValue);
    provider.value = Context;
  }
  return useContext(provider.value);
};

export const useSharedState = <T,>(key: string, initialValue?: T) => {
  let state = undefined;
  if (initialValue !== undefined) {
    const _useState = useState;
    state = _useState(initialValue);
  }
  return useProvider(key, state);
};
