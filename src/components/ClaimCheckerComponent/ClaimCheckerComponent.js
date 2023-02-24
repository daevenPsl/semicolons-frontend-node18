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
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";

const columns = [
  { field: "number", headerName: "Block", width: 100 },
  { field: "identity", headerName: "Identity", width: 100 },
  { field: "claim", headerName: "Claim Type", width: 150 },
  { field: "Issuer", headerName: "Issuer", width: 100 },
  { field: "result", headerName: "Result", width: 155 },
];

const rows = [
  {
    id: 1,
    number: "9",
    identity: "Nick",
    claim: "Has Facebook",
    Issuer: "Origin",
    result: "Invalid",
  },
];

export const ClaimCheckerComponent = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [deploy, setDeploy] = React.useState(true);

  const handleTable = () => {
    setShowTable(true);
  };

  const handleDeploy = () => {
    setDeploy(false);
  };

  const handleMultipleFunctions = () => {
    handleTable();
    handleDeploy();
  };

  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography component="div" variant="h5">
              Property Listing
            </Typography>
          </Grid>

          {deploy ? (
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{ marginTop: "2.5rem", mx: "-405px" }}
                style={{ background: "#F2AA4CFF", color: "white" }}
                onClick={handleMultipleFunctions}
              >
                Verify
              </Button>
            </Grid>
          ) : (
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{ marginTop: "2.5rem", mx: "-405px" }}
                style={{ background: "#F2AA4CFF", color: "white" }}
              >
                Verified
              </Button>
            </Grid>
          )}
        </Grid>

        {showTable ? (
          <Grid item xs={12}>
            <div style={{ height: 125, width: "100%", paddingTop: "1rem" }}>
              <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                rowsPerPageOptions={[5]}
                rowsPerPageOptions={[5]}
                hideFooterPagination={true}
                hideFooter={true}
              />
            </div>
          </Grid>
        ) : (
          <div></div>
        )}
      </CardContent>
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
