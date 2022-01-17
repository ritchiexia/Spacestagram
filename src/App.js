import { BrowserRouter } from 'react-router-dom'
import enTranslations from '@shopify/polaris/locales/en.json';
import { AppProvider } from '@shopify/polaris'
import AppFrame from "./components/AppFrame";

function App() {
  const theme = {
    logo: {
      width: 124,
      topBarSource: '/logo.png',
      url: '/recent',
      accessibilityLabel: 'My Website'
    }
  }

  return (
      <BrowserRouter>
        <AppProvider theme={theme} i18n={enTranslations}>
          <AppFrame />
        </AppProvider>
      </BrowserRouter>
  );
}

export default App;
