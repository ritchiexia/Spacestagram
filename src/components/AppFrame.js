import { Frame, Navigation, TopBar } from "@shopify/polaris";
import { CalendarTickMajor, RefreshMajor } from '@shopify/polaris-icons';
import { Navigate, Route, Routes, useLocation } from 'react-router-dom'
import { useState, useCallback } from 'react'
import PostList from "./PostList";

const AppFrame = () => {
  const location = useLocation()

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false)
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  return (
    <Frame
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      topBar={
        <TopBar
          showNavigationToggle
          onNavigationToggle={toggleMobileNavigationActive}
        />
      }
      navigation={
        <Navigation location={location.pathname}>
          <Navigation.Section
            items={[
              {
                url: "/recent",
                label: "Recent",
                icon: CalendarTickMajor
              },
              {
                url: "/random",
                label: "Random",
                icon: RefreshMajor
              },
            ]}
          />
        </Navigation>
      }
    >
      <Routes>
        <Route path="/recent" element={<PostList parameters={{ start_date: "2022-01-08" }} />} />
        <Route path="/random" element={<PostList parameters={{ count: 3 }} />} />
        <Route path="/*" element={<Navigate to="/recent" replace />} />
      </Routes>
    </Frame>
  )
}

export default AppFrame
