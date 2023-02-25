import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Grid from "@mui/material/Grid";
import { DataGrid, GridColDef, GridValueGetterParams } from "@mui/x-data-grid";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GoogleIcon from "@mui/icons-material/Google";
import VpnKeyIcon from "@mui/icons-material/VpnKey";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Checkbox from "@mui/material/Checkbox";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

const columns = [
  {
    field: "key",
    headerName: "Keys",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 187,
  },
  {
    field: "purpose",
    headerName: "Purpose",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 220,
  },
  {
    field: "type",
    headerName: "Type",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 185,
  },
];

const rows = [
  { id: 1, key: "1b1", purpose: "Purpose1", type: "Type1" },
  { id: 2, key: "1b2", purpose: "Purpose2", type: "Type2" },
  { id: 3, key: "1b3", purpose: "Purpose3", type: "Type3" },
];

const columns1 = [
  {
    field: "services",
    headerName: "Signer Services",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 170,
  },
  {
    field: "issuer",
    headerName: "Issuer Icon",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
  {
    field: "claimType",
    headerName: "Claim Type",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 140,
  },
  {
    field: "actions",
    headerName: "Actions",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    renderCell: (cellValues) => {
      return (
        <Button
          style={{ background: "#F2AA4CFF", color: "white" }}
          /* onClick={(event) => {
            handleClick(event, cellValues);
          }} */
        >
          Add Claim
        </Button>
      );
    },
    width: 142,
  },
];

const rows1 = [
  { id: 1, services: "Name1", issuer: "Issuer1", claimType: "Type1" },
  { id: 2, services: "Name2", issuer: "Issuer2", claimType: "Type2" },
  { id: 3, services: "Name3", issuer: "Issuer3", claimType: "Type3" },
];

export function FormDialog() {
  const [open, setOpen] = React.useState(false);
  const [showTable, setShowTable] = React.useState(false);
  const [deploy, setDeploy] = React.useState(true);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleTable = () => {
    setShowTable(true);
  };

  const handleDeploy = () => {
    setDeploy(false);
  };

  const handleMultipleFunctions = () => {
    handleClose();
    handleTable();
    handleDeploy();
  };

  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div>
      {deploy ? (
        <Button
          sx={{ mt: -2.7, mb: 2 }}
          deploy={deploy}
          style={{ background: "#F2AA4CFF", color: "white" }}
          onClick={handleClickOpen}
        >
          Request Claim
        </Button>
      ) : (
        <div></div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Enter the Claim Details</DialogTitle>
        <DialogContent>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Name"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          {/* <InputLabel id="demo-simple-select-label">Select the claim issuer</InputLabel> */}
          <Select
            labelId="demo-simple-select-label"
            defaultValue="1"
            id="role"
            //value={role}
            label="Role"
            //onChange={handleRoleChange}
            //value={selectedOption}
            //onChange={handleSelectChange}
            fullWidth
          >
            <MenuItem value="1">Select the Claim Issuer</MenuItem>
            <MenuItem value="kyc">Options from api</MenuItem>
            {/* <MenuItem value="google">Google</MenuItem> */}
          </Select>
          {/* <TextField
            autoFocus
            margin="dense"
            id="claim-type"
            label="Claim Type"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <ToggleButtonGroup
            value={alignment}
            exclusive
            onChange={handleAlignment}
            aria-label="text alignment"
            sx={{ marginTop: "1rem" }}
          >
            <ToggleButton value="google" id="google" aria-label="left aligned">
              <GoogleIcon />
            </ToggleButton>
            <ToggleButton value="kyc" id="kyc" aria-label="centered">
              <VpnKeyIcon />
            </ToggleButton>
          </ToggleButtonGroup>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleMultipleFunctions}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Grid item xs={12}>
        <>
          <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
            <div style={{ height: 213, width: "100%" }}>
              <DataGrid
                sx={{
                  "& .super-app-theme--header": {
                    backgroundColor: "#F2AA4CFF",
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

          <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
            <div style={{ height: 213, width: "100%", marginTop: "1rem" }}>
              <DataGrid
                sx={{
                  "& .super-app-theme--header": {
                    backgroundColor: "#F2AA4CFF",
                    textTransform: "uppercase",
                    fontSize: "15px",
                  },
                }}
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
      </Grid>
    </div>
  );
}
