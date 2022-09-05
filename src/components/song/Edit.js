import {
  Typography,
  Box,
  makeStyles,
  Grid,
  TextField,
  Button,
} from "@material-ui/core";
import { deepPurple, green } from "@material-ui/core/colors";
import { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import axios from "axios";
const useStyles = makeStyles({
  headingColor: {
    backgroundColor: deepPurple[400],
    color: "white",
  },
  addStuColor: {
    backgroundColor: green[400],
    color: "white",
  },
});

const Edit = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();
  const [song, setSong] = useState({
    a_name: "",
    a_Bdate: "",
    a_bio: "",
    s_name: "",
    s_dor: "",
    s_image: "",
  });
  useEffect(() => {
    async function getsong() {
      try {
        const song = await axios.get(`http://localhost:3333/songs/${id}`);
        // console.log(song.data);
        setSong(song.data);
      } catch (error) {
        console.log("Something is Wrong");
      }
    }
    getsong();
  }, [id]);

  function onTextFieldChange(e) {
    setSong({
      ...song,
      [e.target.name]: e.target.value,
    });
  }

  async function onFormSubmit(e) {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:3333/songs/${id}`, song);
      history.push("/");
    } catch (error) {
      console.log("Something is Wrong");
    }
  }
  function handleClick() {
    history.push("/");
  }


  return (
    <>
      <Box textAlign="center" p={2} className={classes.headingColor} mb={2}>
        <Typography variant="h2">React CRUD with API Call</Typography>
      </Box>

      <Grid container justify="center" spacing={4}>
        <Grid item md={6} xs={12}>
          <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
            <Typography variant="h4">Edit song</Typography>
          </Box>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="id"
                  name="id"
                  variant="outlined"
                  required
                  fullWidth
                  id="id"
                  label="ID"
                  autoFocus
                  value={id}
                  disabled
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                //   autoComplete="stuname"
                  name="a_name"
                  type="text"
                  variant="outlined"
                  required
                  fullWidth
                  id="a_name"
                  label="Artst Name"
                  value={song.a_name}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>

              <Grid item xs={12}>
                <TextField
                //   autoComplete="email"
                type="date"
                  name="a_Bdate"
                  variant="outlined"
                  required
                  fullWidth
                  id="a_Bdate"
                //   label="Email Address"
                  value={song.a_Bdate}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="a_bio"
                  variant="outlined"
                  required
                  fullWidth
                  id="a_bio"
                  label="Bio"
                  value={song.a_bio}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoComplete="email"
                  name="s_name"
                  variant="outlined"
                  required
                  fullWidth
                  id="s_name"
                  label="Song Name"
                  value={song.s_name}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                //   autoComplete="email"
                type="date"
                  name="s_dor"
                  variant="outlined"
                  required
                  fullWidth
                  id="s_dor"
                  label="Email Address"
                  value={song.s_dor}
                  onChange={(e) => onTextFieldChange(e)}
                />
              </Grid>
            </Grid>
            <Box m={3}>
              <Button
                type="button"
                variant="contained"
                color="primary"
                fullWidth
                onClick={(e) => onFormSubmit(e)}
              >
                {" "}
                Update{" "}
              </Button>
            </Box>
          </form>
          <Box m={3} textAlign="center">
            <Button variant="contained" color="primary" onClick={handleClick}>
              Back to Home
            </Button>
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default Edit;
