import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage";
import theme from "./theme/Theme";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={theme}
      >
        <LandingPage />
      </ConfigProvider>
    </div>
  );
}

export default App;
