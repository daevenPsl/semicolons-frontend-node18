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
import { useDeployButtonState } from "../../store/deployButtonStore";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import axios from "axios";

const columns = [
  { field: "key", headerName: "Keys", width: 187 },
  { field: "purpose", headerName: "Purpose", width: 220 },
  { field: "type", headerName: "Type", width: 192 },
];

const rows = [
  { id: 1, key: "1b1", purpose: "Purpose1", type: "Type1" },
  { id: 2, key: "1b2", purpose: "Purpose2", type: "Type2" },
  { id: 3, key: "1b3", purpose: "Purpose3", type: "Type3" },
];

const columns1 = [
  { field: "services", headerName: "Claim Signer Services", width: 187 },
  { field: "issuer", headerName: "Issuer Icon", width: 220 },
  { field: "claimType", headerName: "Claim Type", width: 192 },
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
  const [selectedOption, setSelectedOption] = React.useState("");
  const [showTextField, setShowTextField] = React.useState(false);

  const handleSelectChange = (event) => {
    setSelectedOption(event.target.value);
    console.log(event.target.value);
    if (event.target.value == "kyc") {
      setShowTextField(true);
    }
  };

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
    // setDeploy(false);
    setDisableDeployButton(false);
  };

  const handleMultipleFunctions = () => {
    handleClose();
    handleTable();
    handleDeploy();
  };

  const getDetails = async () => {
    const formDetails = await axios.get("https://dummyjson.com/products/1");
  };

  const handleFunctionsAtModal = () => {
    handleClickOpen();
    getDetails();
  };

  // const setContractAddress= useContractAddress((state) => state.setContractAddress)
  // const { contractAddress } = useContractAddress((state) => ({ contractAddress: state.contractAddress }))

  const setDisableDeployButton = useDeployButtonState(
    (state) => state.setDisableDeployButton
  );
  const { disableDeployButton } = useDeployButtonState((state) => ({
    disableDeployButton: state.disableDeployButton,
  }));

  // {deploy ? (
  // {showTable ? ( 175
  return (
    <div>
      {disableDeployButton ? (
        <Button
          sx={{ mt: -2.7 }}
          deploy={disableDeployButton}
          style={{ background: "#F2AA4CFF", color: "white" }}
          onClick={handleFunctionsAtModal}
        >
          Get Signing requests
        </Button>
      ) : (
        <div></div>
      )}
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Get Signing requests</DialogTitle>
        <DialogContent>
          <p style={{ fontWeight: 500, fontSize: 17 }}>Name: Name from API</p>
          <p style={{ fontWeight: 500, fontSize: 17 }}>
            Wallet Address: Wallet Address from API
          </p>
          {/* <Button variant="outlined">
            <IconButton color="primary" aria-label="add">
              <GoogleIcon />
            </IconButton>
          </Button>
          <Button variant="outlined" style={{ marginLeft: "1rem" }}>
            <IconButton color="primary" aria-label="add">
              <VpnKeyIcon />
            </IconButton>
          </Button> */}
          {/* <FormControl>
            <FormLabel id="demo-radio-buttons-group-label">
              Trusted Issuer
            </FormLabel>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue="Google"
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Google"
                id="Google"
                control={<Radio />}
                label="Google"
              />
              <FormControlLabel
                value="Facebook"
                id="Facebook"
                control={<Radio />}
                label="Facebook"
              />
            </RadioGroup>
          </FormControl> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="trusted-issuer"
            label="Trusted Issuer"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          {/* <TextField
            autoFocus
            margin="dense"
            id="claim-type"
            label="Claim Type"
            type="text"
            fullWidth
            variant="standard"
          /> */}
          <InputLabel id="demo-simple-select-label">Claim Type</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="role"
            //value={role}
            label="Role"
            //onChange={handleRoleChange}
            value={selectedOption}
            onChange={handleSelectChange}
            fullWidth
          >
            <MenuItem value="kyc">KYC</MenuItem>
            <MenuItem value="google">Google</MenuItem>
          </Select>
          {showTextField && (
            <TextField
              autoFocus
              margin="dense"
              id="aadharNumber"
              label="Aadhar Number"
              type="text"
              fullWidth
              variant="standard"
            />
          )}
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleMultipleFunctions}>Submit</Button>
        </DialogActions>
      </Dialog>

      <Grid item xs={12} showTable={showTable}>
        {!disableDeployButton ? (
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
        ) : (
          <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: "100vh", padding: "2rem" }}
          >
            <Grid item xs={3}>
              <Card
                style={{
                  padding: "0.5rem",
                  background: "#F2AA4CFF",
                  color: "white",
                }}
              >
                NO CLAIMS ADDED
              </Card>
            </Grid>
          </Grid>
        )}
      </Grid>
    </div>
  );
}
