import {
  Typography,
  Box,
  makeStyles,
  Grid,
//   TextField,
//   Button,
} from "@material-ui/core";
import { deepPurple, green, red } from "@material-ui/core/colors";
// import List from "../song/List";
// import axios from "axios";
// import { useState } from "react";
// import { Link } from "react-router-dom";

import { useHistory } from "react-router-dom";
import List from "../song/List";


const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },

  AddSongBtn:{
    // backgroundColor: green[400],
    // width: 20,
    height: 30,
    margin: 15,
  }

});

const Home = () => {

    const history = useHistory();

    const handleAddSong = ()=>{
        history.push('/addsong')
    }

  const classes = useStyles();
//   const [song, setSong] = useState({
//     stuname: "",
//     email: "",
//     date: "",
//   });
//   const [status, setStatus] = useState();

//   function onTextFieldChange(e) {
//     setSong({
//       ...song,
//       [e.target.name]: e.target.value,
//     });
//   }

//   async function onFormSubmit(e) {
//     e.preventDefault();
//     try {
//       await axios.post(`http://localhost:3333/songs`, song);
//       setStatus(true);
//     } catch (error) {
//       console.log("Something is Wrong");
//     }
//   }

//   if (status) {
//     return <Home />;
//   }

  return (
    <>
      <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
        <Typography variant="h2">Songs App</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>


        {/* <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Add song</Typography>
          </Box>

          <form noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  type="name"
                  name="stuname"
                  id="stuname"
                  label="Song Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  type="date"
                  name="date"
                  id="date"
                  label=""
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>

             

              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="stuname"
                  name="stuname"
                  variant="outlined"
                  required
                  fullWidth
                  id="stuname"
                  label="Name"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="email"
                  variant="outlined"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                Add
              </Button>
            </Box>
          </form>
        </Grid> */}


 <button className={classes.AddSongBtn} onClick={handleAddSong}>Add Song</button>


        <Grid item md={6} xs={12}>
          {/* <List /> */}
          <List/>
        </Grid>
      </Grid>
      
     
    </>
  );
};

export default Home;
