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
import { FormDialog } from "./ModalBtn";

import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

export const ClaimIssuerComponent = () => {
  return (
    <>
      <Card>
        <CardContent>
          <Grid container>
            <Grid item xs={12} style={{ paddingTop: "1rem" }}>
              <FormDialog />
            </Grid>
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
