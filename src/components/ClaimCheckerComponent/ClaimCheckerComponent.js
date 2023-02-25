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
  {
    field: "number",
    headerName: "Block",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 100,
  },
  {
    field: "identity",
    headerName: "Identity",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 100,
  },
  {
    field: "claim",
    headerName: "Claim Type",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 150,
  },
  {
    field: "Issuer",
    headerName: "Issuer",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 100,
  },
  {
    field: "result",
    headerName: "Result",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 155,
  },
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
                style={{ background: "#05409e", color: "white" }}
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
                style={{ background: "#05409e", color: "white" }}
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
                sx={{
                  "& .super-app-theme--header": {
                    backgroundColor: "#05409e",
                    textTransform: "uppercase",
                    fontSize: "15px",
                  },
                }}
                rows={rows}
                columns={columns}
                pageSize={5}
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