import { Wallet } from "../../components/WalletComponent/wallet";
import { Claim } from "../../components/ClaimComponent/claim";
import Grid from "@mui/material/Grid";
import Navbar from "../../components/NavBarComponent/Navbar";



export const ClaimIssuerPage=()=>{
    return(
        <>
        <Navbar/>
        <Grid container>
            <Grid item xs={6}>
                <Wallet/>
            </Grid>
            <Grid item xs={6}>
                <Claim/>
            </Grid>
        </Grid>
        
        </>
    )
}