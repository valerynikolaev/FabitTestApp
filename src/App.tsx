import "./App.css";
import TestComponent from "./components/TestComponent/TestComponent";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div>
        <TestComponent />
      </div>
    </QueryClientProvider>
  );
}

export default App;
