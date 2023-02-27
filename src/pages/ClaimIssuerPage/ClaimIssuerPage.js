import { Wallet } from "../../components/WalletComponent/Wallet";
import { ClaimIssuerComponent } from "../../components/ClaimIssuerComponent/ClaimIssuerComponent";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/NavBarComponent/Navbar";

export const ClaimIssuerPage = () => {
  return (
    <>
      <Navbar />
      <Grid container>
        <Grid item xs={6}>
          <Wallet />
        </Grid>
        <Grid item xs={6}>
          <ClaimIssuerComponent />
        </Grid>
      </Grid>
    </>
  );
};
