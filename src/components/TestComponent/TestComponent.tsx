import { observer } from "mobx-react-lite";
import { useState } from "react";
import { useQuery } from "react-query";
import { useGlobalStore } from "../../globalStore";

const TestComponent = () => {
  const [localCounter, setLocalCounter] = useState(0);
  const [localInput, setLocalInput] = useState("title");
  const globalStore = useGlobalStore();

  const getData = () => {
    return new Promise<string>((resolve, reject) => {
      setTimeout(() => resolve("Data from server..."), 2000);
    });
  };

  const { isFetching, data, refetch } = useQuery("fake-query", getData, {
    enabled: false
  });

  return (
    <div>
      <h1>{localInput}</h1>
      <h2>{globalStore.globalTitle}</h2>
      <div>Local Counter: {localCounter}</div>
      <div>Global Counter: {globalStore.globalCounter}</div>
      <div>Global Timer: {globalStore.globalTimer.format("hh:mm:ss")}</div>
      <div>
        <button onClick={() => setLocalCounter(localCounter + 1)}>
          Local incr
        </button>
        <button onClick={() => globalStore.incrementCounter()}>
          Global incr
        </button>
        <button onClick={() => refetch()}>Fetch data from server</button>
      </div>

      <div>
        <input
          value={localInput}
          onChange={(e) => setLocalInput(e.target.value)}
        />
        <input
          value={globalStore.globalTitle}
          onChange={(e) => globalStore.setGlobalTitle(e.target.value)}
        />
      </div>

      <div>Server data: {isFetching ? <b>Fetching data...</b> : data}</div>
    </div>
  );
};

export default observer(TestComponent);
