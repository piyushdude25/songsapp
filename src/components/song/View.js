import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, Button } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import { useParams, useHistory } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
const useStyles = makeStyles({
 stuListColor: {
  backgroundColor: orange[400],
  color: "white"
 },
 tableHeadCell: {
  color: "white",
  fontWeight: "bold",
  fontSize: 16
 },
});
const View = () => {
 const classes = useStyles();
 const { id } = useParams();
 const [song, setSong] = useState([]);
 const history = useHistory();
 useEffect(() => {
  async function getsong() {
   try {
    const song = await axios.get(`http://localhost:3333/songs/${id}`)
    // console.log(song.data);
    setSong(song.data);
   } catch (error) {
    console.log("Something is Wrong");
   }
  }
  getsong();
 }, [id])

 function handleClick() {
  history.push("/")
 }
 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Songs Detail</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>ID</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artist</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Date Of Birth</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Songs</TableCell>
       {/* <TableCell align="center" className={classes.tableHeadCell}>Email</TableCell> */}
      </TableRow>
     </TableHead>
     <TableBody>
      <TableRow>
       <TableCell align="center">{song.id}</TableCell>
       <TableCell align="center">{song.a_name}</TableCell>
       <TableCell align="center">{song.a_Bdate}</TableCell>
       <TableCell align="center">{song.a_bio}</TableCell>
       {/* <TableCell align="center">{song.email}</TableCell> */}
      </TableRow>
     </TableBody>
    </Table>
   </TableContainer>
   <Box m={3} textAlign="center">
    <Button variant="contained" color="primary" onClick={handleClick}>Back to Home</Button>
   </Box>
  </>
 )
}

export default View
