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
import { FormDialog } from "./modalBtn";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "key", headerName: "Keys", width: 190 },
  { field: "purpose", headerName: "Purpose", width: 185 },
  { field: "type", headerName: "Type", width: 195 },
];

const rows = [
  { id: 1, key: "1b1", purpose: "Purpose1", type: "type1" },
  { id: 2, key: "1b2", purpose: "Purpose2", type: "type2" },
];

const columns1 = [
  { field: "claim", headerName: "Claims", width: 130 },
  { field: "data", headerName: "Data", width: 130 },
  { field: "issuer", headerName: "Issuer", width: 130 },
  { field: "status", headerName: "Status", width: 130 },
];

const rows1 = [
  { id: 1, claim: "claim1", data: "Data1", issuer: "Issuer1", status: "OK1" },
  { id: 2, claim: "claim2", data: "Data2", issuer: "Issuer2", status: "OK2" },
];

export const Claim = () => {
  return (
    <>
      <Card>
        {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>
          <Grid container>
            {/* <Grid item xs={12}>
              <Typography component="div" variant="h5">
                Heading
              </Typography>
            </Grid> */}
            <Grid item xs={4} style={{ paddingTop: "1rem" }}>
              <FormDialog/>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <div style={{ height: 250, width: "100%", paddingTop: "2rem" }}>
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
      <Card>
        {/* <Box sx={{ display: "flex", flexDirection: "column" }}> */}
        <CardContent>
          <Grid container></Grid>
          <Grid item xs={12}>
            <div style={{ height: 250, width: "100%" }}>
              <DataGrid
                rows={rows1}
                columns={columns1}
                pageSize={5}
                rowsPerPageOptions={[5]}
              />
            </div>
          </Grid>
        </CardContent>

        {/* </Box> */}
      </Card>
    </>
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
