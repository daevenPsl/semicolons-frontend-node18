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
/* import { FormDialog } from "./modalBtn"; */

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "key", headerName: "Keys", width: 220 },
  { field: "purpose", headerName: "Purpose", width: 220 },
  { field: "type", headerName: "Type", width: 192 },
];

const rows = [
  { id: 1, key: "1b1", purpose: "Purpose1", type: "Type1" },
  { id: 2, key: "1b2", purpose: "Purpose2", type: "Type2" },
  { id: 3, key: "1b3", purpose: "Purpose3", type: "Type3" },
];

const columns1 = [
  { field: "services", headerName: "Claim Signer Services", width: 220 },
  { field: "issuer", headerName: "Issuer Icon", width: 220 },
  { field: "claimType", headerName: "Claim Type", width: 192 },
];

const rows1 = [
  { id: 1, services: "Name1", issuer: "Issuer1", claimType: "Type1" },
  { id: 2, services: "Name2", issuer: "Issuer2", claimType: "Type2" },
  { id: 3, services: "Name3", issuer: "Issuer3", claimType: "Type3" },
];

export const IdentityViewComponent = () => {
  return (
    <>
      <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
        <div style={{ height: 213, width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterPagination={true}
            hideFooter={true}
          />
        </div>
      </Grid>

      <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
        <div style={{ height: 213, width: "100%", marginTop: "1rem" }}>
          <DataGrid
            rows={rows1}
            columns={columns1}
            pageSize={5}
            rowsPerPageOptions={[5]}
            hideFooterPagination={true}
            hideFooter={true}
          />
        </div>
      </Grid>
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
