import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { QueryClient, QueryClientProvider } from "react-query";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import styles from "./app.module.css";
import { UsdcProvider } from "./context/UsdcContext";
import { ClaimCheckerPage } from "./pages/ClaimCheckerPage/ClaimCheckerPage";
import { ClaimIssuerPage } from "./pages/ClaimIssuerPage/ClaimIssuerPage";
import { IdentityViewPage } from "./pages/IdentityViewPage/IdentityViewPage";
import { Login } from "./pages/Login/Login";

const { parent } = styles;

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const queryClient = new QueryClient();

  return (
    <>
      <ThemeProvider theme={darkTheme}>
        <CssBaseline />
        <QueryClientProvider client={queryClient}>
          <div className={parent}>
            <UsdcProvider>
              <Routes>
                <Route
                  exact
                  path="/identityViewPage"
                  element={<IdentityViewPage />}
                />
                <Route
                  exact
                  path="/claimIssuerPage"
                  element={<ClaimIssuerPage />}
                />
                <Route
                  exact
                  path="/claimCheckerPage"
                  element={<ClaimCheckerPage />}
                />
                <Route path="/" element={<Login />} />
              </Routes>
            </UsdcProvider>
          </div>
        </QueryClientProvider>
      </ThemeProvider>
    </>
  );
}

export default App;
