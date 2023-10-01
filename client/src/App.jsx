import Layout from "./components/Layout/Layout";
import ScrollToTop from "react-scroll-to-top";
import { useTheme } from "./context/ThemeContext";

function App() {
  const [theme] = useTheme();
  return (
    <>
      <div id={theme}>
        <Layout />
      </div>
      <ScrollToTop
        smooth
        color="#e89b17"
        style={{
          backgroundColor: "#1e2e2a",
          borderRadius: "2rem",
        }}
      />
    </>
  );
}

export default App;
