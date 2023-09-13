import { ConfigProvider } from "antd";
import LandingPage from "./pages/LandingPage";
// import theme from "./theme/Theme";
import "./styles/main.scss";

function App() {
  return (
    <div className="App">
      <ConfigProvider
        theme={{
          token: {
            colorLink: "#EDEDED",
            colorPrimary: "#A7F46A",
            colorBorderSecondary: "#fff",
          },
          components: {
            Button: {
              borderRadius: "8px",
              fontSize: 16,
            },
            Avatar: {
              groupOverlapping: -24,
              borderRadius: 101,
            },
            Input: {
              colorBgContainer: "transparent",
              colorText: "#fff",
              colorTextPlaceholder: "#fff",
            },
          },
        }}
      >
        <LandingPage />
      </ConfigProvider>
    </div>
  );
}

export default App;
