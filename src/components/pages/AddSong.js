
    import {
        Typography,
        Box,
        makeStyles,
        Grid,
        TextField,
        Button,
      } from "@material-ui/core";
      import { deepPurple, green } from "@material-ui/core/colors";
      // import List from "../song/List";
      import axios from "axios";
      import { useState } from "react";
      import { useHistory } from "react-router-dom";

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
      
      const AddSong = () => {

        const history = useHistory();
      

        const classes = useStyles();

        const [song, setSong] = useState({
          a_name: "",
          a_Bdate: "",
          a_bio: "",
          s_name: "",
          s_dor: "",
          s_image: "",
        });
        const [status, setStatus] = useState();
      
        function onTextFieldChange(e) {
          setSong({
            ...song,
            [e.target.name]: e.target.value,
          });
        }
      
        async function onFormSubmit(e) {
          e.preventDefault();
          try {
            await axios.post(`http://localhost:3333/songs`, song);
            setStatus(true);
            history.push('/')
          } catch (error) {
            console.log("Something is Wrong");
          }
        }
      
        if (status) {
          return <AddSong />;
        }
      
        return (
          <>
            <Box textAlign="center" className={classes.headingColor} p={2} mb={2}>
              <Typography variant="h2">Songs App</Typography>
            </Box>
      
            <Grid container justify="center" spacing={4}>
      
      
             <Grid item md={6} xs={12}>
                <Box textAlign="center" p={2} className={classes.addStuColor} mb={2}>
                  <Typography variant="h4">Add Song</Typography>
                </Box>
      
                <form noValidate>
                  <Grid container spacing={2}>

                    <Grid item xs={12}>
                      <TextField
                        type="name"
                        fullWidth
                        variant="outlined"
                        required
                        name="a_name"
                        id="a_name"
                        label="Song Name"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid>
      
                    <Grid item xs={12}>
                      <TextField
                        type="date"
                        fullWidth
                        variant="outlined"
                        required
                        name="a_Bdate"
                        id="a_Bdate"
                        label=""
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid>
      
                   
      
                    <Grid item xs={12}>
                      <TextField
                        // autoComplete="stuname"
                        name="a_bio"
                        variant="outlined"
                        required
                        fullWidth
                        id="a_bio"
                        label="Bio"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid>
      
                    <Grid item xs={12}>
                      <TextField
                        // autoComplete="stuname"
                        name="s_name"
                        variant="outlined"
                        required
                        fullWidth
                        id="s_name"
                        label="Song Name"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid>
      
                    <Grid item xs={12}>
                      <TextField
                        // autoComplete="email"
                        type="date"
                        name="s_dor"
                        variant="outlined"
                        required
                        fullWidth
                        id="s_dor"
                        // label="Date of Release"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid>

                    {/* <Grid item xs={12}>
                      <TextField
                        // autoComplete="stuname"
                        name="s_name"
                        type="image"
                        variant="outlined"
                        required
                        fullWidth
                        id="s_name"
                        label="Song Name"
                        onChange={(e) => onTextFieldChange(e)}
                      />
                    </Grid> */}


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
              </Grid> 
      
              {/* <Grid item md={6} xs={12}>
                <List />
              </Grid> */}
            </Grid>
            
          </>
        );
      };
      
      export default AddSong;
      