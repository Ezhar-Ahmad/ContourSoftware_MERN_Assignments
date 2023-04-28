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
  const getLocalList = () => {
    let localList = localStorage.getItem("list");
    if (localList) {
      return JSON.parse(localList);
    } else {
      return [];
    }
  };

  const [searchData, setSearchData] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  //const [addedUser, setAddedUser] = useState("");
  const [addUpdateBtn, setAddUpdateBtn] = useState("Add");
  const [editUserIndex, setEditUserIndex] = useState("");
  const [list, setList] = useState(getLocalList());
  //const [editUserId, setEditUserId] = useState("");

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
      list[editUserIndex][1] = name;
      list[editUserIndex][2] = address;
      list[editUserIndex][3] = city;

      setList([...list]);

      setName("");
      setAddress("");
      setCity("");
      setEditUserIndex("");
      setAddUpdateBtn("Add");
    } else {
      if (name && address && city) {
        let currentUser = {};

        if (localStorage.clickcount) {
          localStorage.clickcount = Number(localStorage.clickcount) + 1;
        } else {
          localStorage.clickcount = 1;
        }
        currentUser.id = localStorage.clickcount;
        currentUser.name = name;
        currentUser.address = address;
        currentUser.city = city;

        setList([...list, [localStorage.clickcount, name, address, city]]);

        setName("");
        setAddress("");
        setCity("");
        setAddUpdateBtn("Add");
      } else {
        alert("Please fill the required fields!");
      }
    }
  };

  useEffect(() => {
    localStorage.setItem("list", JSON.stringify(list));
  }, [list]);

  const handleEditData = (index) => {
    setAddUpdateBtn("Update");

    setName(list[index][1]);
    setAddress(list[index][2]);
    setCity(list[index][3]);
    setEditUserIndex(index);
  };

  const handleDeleteData = (index) => {
    list.splice(index, 1);
    setList([...list]);
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
            {list.map((item, ind) => (
              <tr>
                <td>{item[0]}</td>
                <td>{item[1]}</td>
                <td>{item[2]}</td>
                <td>{item[3]}</td>
                <td>
                  <Button
                    variant="contained"
                    className="edit-btn"
                    onClick={() => handleEditData(ind)}
                  >
                    Edit
                  </Button>
                </td>
                <td>
                  <Button
                    variant="contained"
                    color="error"
                    className="delete-btn"
                    onClick={() => handleDeleteData(ind)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default App;
