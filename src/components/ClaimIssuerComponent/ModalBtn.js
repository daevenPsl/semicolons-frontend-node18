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
import { ButtonGroup, ToggleButton } from "@material-ui/core";
import { useGetData } from "../../hooks/useGetData";
import { useAddClaimButtonState } from "../../store/addClaimButtonStore";
// const columns = [
//   {
//     field: "key",
//     headerName: "Keys",
//     headerClassName: "super-app-theme--header",
//     headerAlign: "center",
//     width: 187,
//   },
//   {
//     field: "purpose",
//     headerName: "Purpose",
//     headerClassName: "super-app-theme--header",
//     headerAlign: "center",
//     width: 220,
//   },
//   {
//     field: "type",
//     headerName: "Type",
//     headerClassName: "super-app-theme--header",
//     headerAlign: "center",
//     width: 192,
//   },
// ];
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
    headerName: "Category",
    headerClassName: "super-app-theme--header",
    headerAlign: "center",
    width: 192,
  },
];
const rows = [
  {
    id: 1,
    key: "0x1ebaa930b8e9130423c183bf38b0564b0103180b7dad301013b18e59880541ae",
    purpose: "MANAGEMENT",
    type: "ECDSA",
  },
];
const rows1 = [
  { id: 1, services: "Name1", issuer: "KYC Provider" },
  { id: 2, services: "Name1", issuer: "Google" },
];
export function FormDialog() {
  const columns1 = [
    {
      field: "issuer",
      headerName: "Issuer",
      headerClassName: "super-app-theme--header",
      headerAlign: "center",
      width: 187,
    },
  ];
  const setAddClaimButton = useAddClaimButtonState(
    (state) => state.setAddClaimButton
  );
  const { addClaim } = useAddClaimButtonState((state) => ({
    addClaim: state.addClaim,
  }));
  const handleAddClaim = () => {
    setAddClaimButton(false);
  };
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
  /* const {
    data: tableData,
    refetch: refetchTables,
    isLoading: isLoadingTables,
    isSuccess: isSuccessTable,
  } = useGetData({
    cacheTime: 3600000,
    staleTime: 3600000,
  }); */
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
    //refetchTables();
    setTimeout(() => {
      handleClose();
      handleTable();
      handleDeploy();
    }, "1000");
  };
  const getDetails = async () => {
    const formDetails = await axios.get("https://dummyjson.com/products/1");
  };
  const handleFunctionsAtModal = () => {
    handleClickOpen();
    //getDetails();
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
      <Button
        sx={{ mt: -2.7 }}
        deploy={disableDeployButton}
        style={{ background: "#05409e", color: "white" }}
        onClick={handleFunctionsAtModal}
      >
        Get Signing Requests
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Signing Requests</DialogTitle>
        <DialogContent>
          <p style={{ fontWeight: 500, fontSize: 17 }}>Name: Nick</p>
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
            size="small"
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
          <Button
            onClick={handleClose}
            style={{ background: "#05409e", color: "white" }}
          >
            Cancel
          </Button>
          <Button
            onClick={handleMultipleFunctions}
            style={{ background: "#05409e", color: "white" }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
      <Grid item xs={12} showTable={showTable}>
        <>
          <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
            <div
              style={{
                height: 162,
                width: "100%",
              }}
            >
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
          <Grid item xs={12} sx={{ marginX: "0.2rem" }}>
            <div style={{ height: 160, width: "100%", marginTop: "1rem" }}>
              <DataGrid
                sx={{
                  "& .super-app-theme--header": {
                    backgroundColor: "#05409e",
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
