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

import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';


const columns = [
    
    { field: 'number', headerName: 'Block', width: 100 },
    { field: "identity", headerName: "Identity", width: 100 },
    { field: "claim", headerName: "Claim Type", width: 150 },
    { field: "Issuer", headerName: "Issuer", width: 100 },
    { field: "result", headerName: "Result", width: 100 },
   
   
  ];

  const rows = [
    { id: 1, number: "9", identity: "Nick", claim: "Has Facebook",Issuer: "Origin",result: "Invalid"},
  ];


export const ClaimCheckerComponent = () => {

  return (
      
    <Card >
      {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>

          <Grid container>
            <Grid item xs={8}>
              <Typography component="div" variant="h5">
              Property Listing
              </Typography>
            </Grid>
                        
         
            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              > 
              </Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography
                variant="subtitle1"
                color="text.secondary"
                component="div"
              >
               
              </Typography>
            </Grid>
            <Grid item xs={2}>

              <Button variant="contained" >
                Verified!
              </Button>
              
          </Grid>
         
          </Grid>
          <Grid item xs={12}>

          <div style={{ height: 200, width: '100%' , paddingTop: "2rem"}}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
      />
    </div>
          </Grid>

        </CardContent>
        
      {/* </Box> */}
    </Card>
  );
};


// checkboxSelection
// {
//     field: 'fullName',
//     headerName: 'Full name',
//     description: 'This column has a value getter and is not sortable.',
//     sortable: false,
//     width: 160,
//     valueGetter: (params) =>
//       `${params.row.firstName || ''} ${params.row.lastName || ''}`,
//   },
/* <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
            <IconButton aria-label="previous">
              {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
            </IconButton>
            <IconButton aria-label="play/pause">
              <PlayArrowIcon sx={{ height: 38, width: 38 }} />
            </IconButton>
            <IconButton aria-label="next">
              {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
            </IconButton>
          </Box> */
