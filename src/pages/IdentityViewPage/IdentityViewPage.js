import { Wallet } from "../../components/WalletComponent/Wallet";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/NavBarComponent/Navbar";
import { IdentityViewComponent } from "../../components/IdentityViewComponent/IdentityViewComponent";

export const IdentityViewPage = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <Wallet />
        </Grid>
        <Grid item xs={6}>
          {/* <Wallet/> */}
          <IdentityViewComponent />
        </Grid>
      </Grid>
    </>
  );
};
