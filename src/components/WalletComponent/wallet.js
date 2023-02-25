import * as React from "react";
import {useEffect} from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";
import {
  useActiveButtonState,
  useContractAddress,
} from "../../store/activateContractStore";
import * as walletService from "../../services/ethereum/wallet.service";

const columns = [
  {
    field: "currencyName",
    headerName: "Currency",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 198,
  },
  {
    field: "currencyValue",
    headerName: "Amount",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    type: "number",
    width: 377,
  },
];

const rows = [
  { id: 1, currency: "ETH", amt: 0.359098 },
  { id: 2, currency: "wETH", amt: 42 },
];

export const Wallet = () => {
  const [walletAddress, setWalletAddress] = useState('');
  const [balances, setBalances] = useState([]);
  const [balanceLoading, setBalanceLoading] = useState(false);

  useEffect(() => {
    const walletAddress = localStorage.getItem("walletAddress");
    setWalletAddress(walletAddress);
  }, []);

  useEffect(() => {
    setBalanceLoading(true);
    async function getBalances() {
      if (!walletAddress) {
        setBalanceLoading(false);
        return;
      }
      const balancesForAddress = await walletService.getBalances(walletAddress);
      setBalances(balancesForAddress);
      setBalanceLoading(false);
    }
    getBalances();
  }, [walletAddress])

  const userName = localStorage.getItem("username");

  const setDisableButton = useActiveButtonState(
    (state) => state.setDisableButton
  );
  const { disableButton } = useActiveButtonState((state) => ({
    disableButton: state.disableButton,
  }));

  const activateContract = async () => {
    const contractAddress = localStorage.getItem("walletAddress");
    setWalletAddress(contractAddress);
    setDisableButton({ disableButton: true });
  };

  return (
    <Card
      sx={{
        border: "none",
        boxShadow: "none",
        marginX: "1rem",
      }}
    >
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography component="div" variant="h5">
              Hi, {userName}
            </Typography>
          </Grid>

          <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {/* xxx-fs3434sw-wswed33443 */}
              {walletAddress}
            </Typography>
          </Grid>

          <Grid item xs={2}>
            <Button
              variant="contained"
              style={{ background: "#05409e", color: "white" }}
              sx={{ width: "90px" }}
            >
              Send
            </Button>
          </Grid>
          <Grid item xs={2}>
            <Button
              variant="contained"
              style={{ background: "#05409e", color: "white" }}
            >
              Receive
            </Button>
          </Grid>
          <Grid item xs={4}>
            <Button
              variant="contained"
              style={{
                background: "#05409e",
                color: "white",
                marginLeft: "280px",
              }}
              onClick={activateContract}
              disabled={disableButton}
            >
              Activate
            </Button>
          </Grid>
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 245, width: "100%", paddingTop: "2rem" }}>
            {!balanceLoading && (
              <DataGrid
                sx={{
                  "& .super-app-theme--header": {
                    backgroundColor: "#05409e",
                    textTransform: "uppercase",
                    fontSize: "15px",
                  },
                  borderLeft: "none",
                  borderRight: "none",
                  borderBottom: "none",
                }}
                rows={balances}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                hideFooterPagination={true}
              />
            )}
          </div>
        </Grid>
      </CardContent>

    </Card>
  );
};
