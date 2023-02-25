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
import { useGetBalance } from "../../hooks/useGetBalance";
import styles from "./wallet.module.css";

// const columns = [

//     { field: 'currency', headerName: 'Currency', width: 150 },
//     {
//       field: 'amt',
//       headerName: 'Amount',
//       type: 'number',
//       width: 360,
//     },

//   ];

const columns = [
  {
    field: "brand",
    headerName: "Currency",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 198,
  },
  {
    field: "discountPercentage",
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

  useEffect(() => {
    const walletAddress = localStorage.getItem("walletAddress");
    setContractAddress({ contractAddress: walletAddress });
  }, []);

  // const [contractAddress,setContractAddress]= useState("")
  const [activateIsClicked, setActivateIsClicked] = useState(false);
  const userName = localStorage.getItem("username");

  // const setShowModal = useModalState((state) => state.setShowModal)
  // const { showModal } = useModalState((state) => ({ showModal: state.showModal }))
  const { sendButton } = styles;
  const setDisableButton = useActiveButtonState(
    (state) => state.setDisableButton
  );
  const { disableButton } = useActiveButtonState((state) => ({
    disableButton: state.disableButton,
  }));

  const setContractAddress = useContractAddress(
    (state) => state.setContractAddress
  );
  const { contractAddress } = useContractAddress((state) => ({
    contractAddress: state.contractAddress,
  }));

  const {
    data: balance,
    refetch,
    isLoading,
    isSuccess,
  } = useGetBalance({
    cacheTime: 3600000,

    staleTime: 3600000,
  });

  const activateContract = async () => {
    const contractAddress = localStorage.getItem("walletAddress");

    //will have to set the contract address here
    // setContractAddress(contractAddressResponse.data.description)
    // setShowModal({ showModal:true })

    setContractAddress({
      contractAddress: contractAddress,
    });

    setDisableButton({ disableButton: true });

    refetch();
    console.log("balance is", balance);
    setActivateIsClicked(true);
    // localStorage.setItem('contract', contractAddress.data.description)
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
              {contractAddress}
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
          {/* <Grid item xs={4} display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="success"
              onClick={activateContract}
              disabled={disableButton}
            >
              Activate
            </Button>
          </Grid> */}

          {/* <Grid item xs={12}>
            <Typography
              variant="subtitle1"
              color="text.secondary"
              component="div"
            >
              {contractAddress}
            </Typography>
          </Grid> */}

          {/* <Grid item xs={2} style={{ marginTop: "1rem" }}>
            <Button style={{ background: "#F2AA4CFF", color: "white" }}>
              Send
            </Button>
          </Grid>
          <Grid item xs={2} style={{ marginTop: "1rem" }}>
            <Button style={{ background: "#F2AA4CFF", color: "white" }}>
              Receive
            </Button>
          </Grid> */}
        </Grid>
        <Grid item xs={12}>
          <div style={{ height: 245, width: "100%", paddingTop: "2rem" }}>
            {isSuccess && (
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
                rows={balance.products}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                // options={{
                //   paging: false
                // }}
                hideFooterPagination={true}
              />
            )}
          </div>
        </Grid>
      </CardContent>

      {/* </Box> */}
    </Card>
  );
};

// rows={rows}
//balance.products
// {isSuccess && disableButton && ( 197

{
  /* 
///herereer

          <div style={{ height: 220, width: '100%' , paddingTop: "2rem"}}>
      {isSuccess && activateIsClicked &&<DataGrid
        
        sx={{
           
            borderLeft: "none",
            borderRight: "none",
            borderBottom: "none"
        }}
        rows={balance.products}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        // options={{
        //   paging: false
        // }}
        hideFooterPagination={true}
      />}
    </div>
    //herer */
}
