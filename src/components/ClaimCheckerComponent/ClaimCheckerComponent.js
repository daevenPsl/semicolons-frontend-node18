import * as React from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import DialogActions from "@mui/material/DialogActions";
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
    claim: "KYC",
    Issuer: "KYC Provider",
    result: "Valid",
  },
];
export const ClaimCheckerComponent = () => {
  const [showTable, setShowTable] = React.useState(false);
  const [deploy, setDeploy] = React.useState(true);
  const [isVerified, setisVerified] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  const handleTable = () => {
    setShowTable(true);
  };
  const handleisVerified = () => {
    setisVerified(true);
  };
  const handleDeploy = () => {
    setDeploy(false);
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };
  const handleMultipleFunctions = () => {
    handleClickOpen();
  };
  const handleClosefns = () => {
    handleClose();
  };
  const handleClosefns2 = () => {
    handleClose2();
    handleisVerified();
  };
  const handleSubmitFunctions = () => {
    setTimeout(() => {
      handleisVerified();
      handleClose();
      //handleTable();
      handleDeploy();
    }, "1000");
  };
  const handleSubmitFunctions2 = () => {
    setTimeout(() => {
      setisVerified(false);
      handleClose2();
      handleTable();
    }, "1000");
  };
  const handleVerifyFunctions = () => {
    handleOpen2();
  };
  return (
    <Card>
      <CardContent>
        <Grid container>
          <Grid item xs={8}>
            <Typography component="div" variant="h5"></Typography>
          </Grid>
          {deploy ? (
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{ marginTop: "2.5rem", mx: "-405px" }}
                style={{ background: "#05409e", color: "white" }}
                onClick={handleMultipleFunctions}
              >
                Deploy
              </Button>
            </Grid>
          ) : (
            <div></div>
          )}
          {isVerified ? (
            <Grid item xs={2}>
              <Button
                variant="contained"
                sx={{ marginTop: "2.5rem", mx: "-405px" }}
                style={{ background: "#05409e", color: "white" }}
                onClick={handleVerifyFunctions}
              >
                Verify
              </Button>
            </Grid>
          ) : (
            <div></div>
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
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Choose the Claim Issuer</DialogTitle>
          <DialogContent>
            <Select
              labelId="demo-simple-select-label"
              id="role"
              label="Role"
              fullWidth
              size="small"
            >
              <MenuItem value="kyc">KYC Provider</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClosefns}
              style={{ background: "#05409e", color: "white" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitFunctions}
              style={{ background: "#05409e", color: "white" }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
        <Dialog open={open2} onClose={handleClose2}>
          <DialogTitle>Choose the User to Verify the Claim</DialogTitle>
          <DialogContent>
            <Select
              labelId="demo-simple-select-label"
              id="role"
              label="Role"
              fullWidth
              size="small"
              defaultValue="1"
            >
              <MenuItem value="1">Select the User</MenuItem>
              <MenuItem value="kyc">Nick</MenuItem>
            </Select>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleClosefns2}
              style={{ background: "#05409e", color: "white" }}
            >
              Cancel
            </Button>
            <Button
              onClick={handleSubmitFunctions2}
              style={{ background: "#05409e", color: "white" }}
            >
              Submit
            </Button>
          </DialogActions>
        </Dialog>
      </CardContent>
    </Card>
  );
};
