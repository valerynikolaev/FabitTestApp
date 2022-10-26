import dayjs from "dayjs";
import { action, makeObservable, observable } from "mobx";
import React from "react";

class GlobalStore {
  constructor() {
    makeObservable(this);
    this.runTimer();
  }

  @observable
  globalCounter = 0;

  @observable
  globalTitle = "global title";

  @observable
  globalTimer = dayjs();

  @action
  incrementCounter = () => {
    this.globalCounter = this.globalCounter + 1;
  };

  @action
  setGlobalTitle = (title: string) => {
    this.globalTitle = title;
  };

  @action
  refreshTimerValue = () => {
    this.globalTimer = dayjs();
  };

  runTimer = () => {
    setInterval(() => {
      this.refreshTimerValue();
    }, 500);
  };
}

const globalStore = new GlobalStore();

const GlobalStoreContext = React.createContext(globalStore);

export const useGlobalStore = () => React.useContext(GlobalStoreContext);

export default GlobalStore;
