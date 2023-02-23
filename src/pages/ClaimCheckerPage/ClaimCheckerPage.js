import { Wallet } from "../../components/WalletComponent/wallet";
import Grid from "@mui/material/Grid";
import {ClaimCheckerComponent} from "../../components/ClaimCheckerComponent/ClaimCheckerComponent";
import Navbar from "../../components/NavBarComponent/Navbar";

export const ClaimCheckerPage=()=>{
    return(
        <>
        <Navbar/>
        
        <Grid container>
            <Grid item xs={6}>
                <Wallet/>
            </Grid>
            <Grid item xs={6}>
                <ClaimCheckerComponent/>
            </Grid>
        </Grid>

        
        
        </>
    )
}