import { Frame, Navigation, TopBar } from "@shopify/polaris";
import {
  CalendarTickMajor,
  RefreshMajor,
  CodeMajor,
  CustomersMajor,
} from "@shopify/polaris-icons";
import {
  Navigate,
  Route,
  Routes,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useState, useCallback } from "react";
import PostList from "./PostList";
import Profile from "./Profile";

const AppFrame = () => {
  const location = useLocation();

  const [mobileNavigationActive, setMobileNavigationActive] = useState(false);
  const toggleMobileNavigationActive = useCallback(
    () =>
      setMobileNavigationActive(
        (mobileNavigationActive) => !mobileNavigationActive
      ),
    []
  );

  const navigate = useNavigate();

  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const toggleIsUserMenuOpen = useCallback(
    () => setIsUserMenuOpen((isUserMenuOpen) => !isUserMenuOpen),
    []
  );

  const userMenuMarkup = (
    <TopBar.UserMenu
      actions={[
        {
          // eslint-disable-next-line react-hooks/exhaustive-deps
          items: [
            {
              onAction: useCallback(() => navigate("/profile"), []),
              content: "View profile",
              icon: CustomersMajor,
            },
          ],
        },
        {
          items: [
            {
              onAction: useCallback(
                () =>
                  window
                    .open(
                      "https://github.com/ritchiexia/Spacestagram",
                      "_blank"
                    )
                    .focus(),
                []
              ),
              content: "Github repo",
              icon: CodeMajor,
            },
          ],
        },
      ]}
      name="User"
      initials="U"
      open={isUserMenuOpen}
      onToggle={toggleIsUserMenuOpen}
    />
  );

  const getDate = () => {
    var d = new Date();
    d.setDate(d.getDate() - 9);

    var month = "" + (d.getMonth() + 1),
      day = "" + d.getDate(),
      year = d.getFullYear();

    if (month.length < 2) month = "0" + month;
    if (day.length < 2) day = "0" + day;

    return [year, month, day].join("-");
  };

  return (
    <Frame
      showMobileNavigation={mobileNavigationActive}
      onNavigationDismiss={toggleMobileNavigationActive}
      topBar={
        <TopBar
          showNavigationToggle
          onNavigationToggle={toggleMobileNavigationActive}
          userMenu={userMenuMarkup}
        />
      }
      navigation={
        <Navigation location={location.pathname}>
          <Navigation.Section
            items={[
              {
                url: "/recent",
                label: "Recent",
                icon: CalendarTickMajor,
              },
              {
                url: "/random",
                label: "Random",
                icon: RefreshMajor,
              },
            ]}
          />
        </Navigation>
      }
    >
      <Routes>
        <Route
          path="/recent"
          element={<PostList parameters={{ start_date: getDate() }} />}
        />
        <Route
          path="/random"
          element={<PostList parameters={{ count: 10 }} />}
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/*" element={<Navigate to="/recent" replace />} />
      </Routes>
    </Frame>
  );
};

export default AppFrame;
