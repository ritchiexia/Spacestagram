import { BrowserRouter as Router } from "react-router-dom";
import enTranslations from "@shopify/polaris/locales/en.json";
import { AppProvider } from "@shopify/polaris";
import AppFrame from "./components/AppFrame";

function App() {
  const theme = {
    logo: {
      width: 200,
      topBarSource: "/logo.png",
      url: "/recent",
      accessibilityLabel: "My Website",
    },
    colors: {
      surface: "#111213",
      onSurface: "#111213",
      interactive: "#2e72d2",
      secondary: "#111213",
      primary: "#3b5998",
      critical: "#d82c0d",
      warning: "#ffc453",
      highlight: "#5bcdda",
      success: "#008060",
      decorative: "#ffc96b",
    },
  };

  return (
    <Router>
      <AppProvider theme={theme} i18n={enTranslations}>
        <AppFrame />
      </AppProvider>
    </Router>
  );
}

export default App;
