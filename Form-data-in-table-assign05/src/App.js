import logo from "./logo.svg";
import "./App.css";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";

function App() {
  const [searchData, setSearchData] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [addedUser, setAddedUser] = useState("");
  const [addUpdateBtn, setAddUpdateBtn] = useState("Add");
  const [allUsers, setAllUsers] = useState([]);
  const [editUserId, setEditUserId] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleAddressChange = (event) => {
    setAddress(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSearch = () => {
    if (searchData) {
      let userData = localStorage.getItem("currentUser");
      console.log(userData);
      if (
        userData.name == searchData ||
        userData.address == searchData ||
        userData.city == searchData
      ) {
        alert("userData: " + userData);
      } else {
        alert("No data found!");
      }
    } else {
      alert("Please enter text to search.");
    }
  };

  let countArr = [1];
  let count = 1;
  let usersArray = [];
  const handleAddData = () => {
    if (addUpdateBtn == "Update") {
      let userToEdit = JSON.parse(localStorage.getItem("user" + editUserId));
      userToEdit.name = name;
      userToEdit.address = address;
      userToEdit.city = city;
      localStorage.setItem("user" + editUserId, JSON.stringify(userToEdit));
      setAddUpdateBtn("Add");
      setName("");
      setAddress("");
      setCity("");
    } else {
      if (name && address && city) {
        let currentUser = {
          // id: "",
          // name: "",
          // address: "",
          // city: "",
        };

        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
          localStorage.clickcount = 1;
        }
        console.log(localStorage.clickcount);
        currentUser.id = localStorage.clickcount; //countArr[countArr.length - 1];
        currentUser.name = name;
        currentUser.address = address;
        currentUser.city = city;

        localStorage.setItem(
          "user" + localStorage.clickcount,
          JSON.stringify(currentUser)
        );

        //let getUser = localStorage.getItem("currentUser");
        //setAddedUser(JSON.stringify(getUser));
        setAddedUser(currentUser);
        usersArray[usersArray.length] = currentUser;
        setAllUsers(usersArray);
        console.log("AllUsers: " + usersArray);
        console.log("addedUsr: " + JSON.stringify(addedUser));

        countArr.push(countArr[countArr.length - 1] + 1);
        console.log("countArr: " + countArr);

        setName("");
        setAddress("");
        setCity("");
        setAddUpdateBtn("Add");
      } else {
        alert("Please fill the required fields!");
      }
    }
  };

  useEffect(() => {}, [allUsers]);

  const handleEditData = (event) => {
    setAddUpdateBtn("Update");
    console.log("user" + event.target.value);
    let foundUser = localStorage.getItem("user" + event.target.value);
    let editUser = JSON.parse(foundUser);
    console.log("foundUser: " + editUser);
    setName(editUser.name);
    setAddress(editUser.address);
    setCity(editUser.city);
    setEditUserId(editUser.id);
  };

  useEffect(() => {}, [addUpdateBtn]);

  const handleDeleteData = (event) => {
    localStorage.removeItem("user" + event.target.value);
    setAddedUser("");
  };

  const handleSearchChange = (event) => {
    setSearchData(event.target.value);
  };

  const handleClearData = () => {
    localStorage.clear();
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>

      <div className="search-stack">
        <Stack direction="row" spacing={2}>
          <TextField
            id="filled-search"
            label="Search field"
            type="search"
            variant="filled"
            onChange={handleSearchChange}
          />
          <Button variant="contained" onClick={handleSearch}>
            Search
          </Button>
        </Stack>
      </div>

      <hr></hr>
      <div className="form-stack">
        <div className="form-inputs">
          <TextField
            id="outlined-basic"
            label="Name"
            variant="outlined"
            value={name}
            required
            onChange={handleNameChange}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            value={address}
            required
            onChange={handleAddressChange}
          />
          <FormControl sx={{ m: 1, minWidth: 220 }}>
            <InputLabel id="demo-simple-select-helper-label">City</InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="city-select-helper"
              value={city}
              label="City"
              required
              onChange={handleCityChange}
            >
              <MenuItem value="">
                <em>Select City</em>
              </MenuItem>
              <MenuItem value={"Islamabad"}>Islamabad</MenuItem>
              <MenuItem value={"Lahore"}>Lahore</MenuItem>
              <MenuItem value={"Karachi"}>Karachi</MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className="add-update-btn">
          <Button
            variant="contained"
            color="success"
            className="add-btn"
            type="submit"
            onClick={handleAddData}
          >
            {addUpdateBtn}
          </Button>
        </div>
      </div>
      <div className="clear-all">
        <Button
          variant="contained"
          color="error"
          className="clear-btn"
          onClick={handleClearData}
        >
          Clear All
        </Button>
      </div>
      <hr></hr>
      <div className="table-data">
        <table>
          <thead>
            <tr className="table-head">
              <th>Id</th>
              <th>Name</th>
              <th>Address</th>
              <th>City</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* {allUsers && allUsers.map((item) => <p>{item}</p>)} */}
            {addedUser && (
              <tr>
                <td>{addedUser.id}</td>
                <td>{addedUser.name}</td>
                <td>{addedUser.address}</td>
                <td>{addedUser.city}</td>
                <td>
                  <Button
                    variant="contained"
                    className="edit-btn"
                    value={addedUser.id}
                    onClick={handleEditData}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    className="delete-btn"
                    value={addedUser.id}
                    onClick={handleDeleteData}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
