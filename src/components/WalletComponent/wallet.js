import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
// import CardMedia from '@mui/material/CardMedia';
// import IconButton from '@mui/material/IconButton';
import Typography from "@mui/material/Typography";
// import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
// import PlayArrowIcon from '@mui/icons-material/PlayArrow';
// import SkipNextIcon from '@mui/icons-material/SkipNext';
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import axios from 'axios';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { useState } from "react";



const columns = [
    
    { field: 'currency', headerName: 'Currency', width: 150 },
    {
      field: 'amt',
      headerName: 'Amount',
      type: 'number',
      width: 360,
    },
    
  ];

  const rows = [
    { id: 1, currency: 'ETH', amt: 0.3590980 },
    { id: 2, currency: 'wETH', amt: 42 },
  ];




export const Wallet = () => {

  const [contractAddress,setContractAddress]= useState("")
  const [activateIsClicked, setActivateIsClicked]=useState(false)

  const activateContract= async()=>{
    const contractAddressResponse= await axios.get('https://dummyjson.com/products/1')
    console.log("activate contract address clicked", contractAddressResponse)

    //will have to set the contract address here
    setContractAddress(contractAddressResponse.data.description)

    setActivateIsClicked(true)
    // localStorage.setItem('contract', contractAddress.data.description)
  }


  return (
    <Card sx={{
      border: "none",
      boxShadow: "none"
  }}>
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>

          <Grid container>
            <Grid item xs={8}>
              <Typography component="div" variant="h5">
                Contract
              </Typography>
            </Grid>
            <Grid item xs={4}>
              <Button variant="contained" color="success" onClick={activateContract} disabled={activateIsClicked}>
                Activate 
              </Button>
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
              <Button variant="contained" >
                Send
              </Button>
          </Grid>
          <Grid item xs={2}>
              <Button variant="contained" >
                Receive
              </Button>

          </Grid>
          </Grid>
          <Grid item xs={12}>

          <div style={{ height: 210, width: '100%' , paddingTop: "2rem"}}>
      <DataGrid
        
        sx={{
           
            borderLeft: "none",
            borderRight: "none"
          
        }}
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        options={{
          paging: false
        }}
      />
    </div>
          </Grid>

        </CardContent>
        
      {/* </Box> */}
    </Card>
  );
};


