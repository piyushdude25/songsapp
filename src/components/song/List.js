import { Typography, Box, makeStyles, TableContainer, Table, TableBody, TableCell, TableHead, TableRow, Paper, IconButton, Tooltip } from "@material-ui/core"
import { orange } from '@material-ui/core/colors';
import VisibilityIcon from '@material-ui/icons/Visibility';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
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
})

const List = () => {
 const classes = useStyles();
 const [songs, setSongs] = useState([]);

//  async function getAllsong() {
    const getAllsong = async()=> {
    try {
     const songs = await axios.get("http://localhost:3333/songs")
     // console.log(songs.data);
     setSongs(songs.data);
    } catch (error) {
     console.log("Something is Wrong");
    }
   }

 useEffect(() => {
 
  getAllsong();
 }, [])

 const handleDelete = async id => {
  await axios.delete(`http://localhost:3333/songs/${id}`);
  var newsong = songs.filter((item) => {
   // console.log(item);
   return item.id !== id;
  })
  setSongs(newsong);
 }


 return (
  <>
   <Box textAlign="center" p={2} className={classes.stuListColor}>
    <Typography variant="h4">Songs List</Typography>
   </Box>
   <TableContainer component={Paper}>
    <Table>
     <TableHead>
      <TableRow style={{ backgroundColor: "#616161" }}>
       <TableCell align="center" className={classes.tableHeadCell}>No</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artwork</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Song</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Date of Relese</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Artist</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Rate</TableCell>
       <TableCell align="center" className={classes.tableHeadCell}>Options</TableCell>
      </TableRow>
     </TableHead>
     <TableBody>
      {
       songs.map((song, i) => {
        return (
         <TableRow key={i}>

          <TableCell align="center">{i + 1}</TableCell>
          <TableCell align="center">{song.s_image}</TableCell>
          <TableCell align="center">{song.s_name}</TableCell>
          <TableCell align="center">{song.s_dor}</TableCell>
          <TableCell align="center">{song.a_name}</TableCell>
          <TableCell align="center">{song.rate} rating ****</TableCell>



           <TableCell align="center">
           <Tooltip title="View">
            <IconButton><Link to={`/view/${song.id}`}><VisibilityIcon color="primary" /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Edit">
            <IconButton><Link to={`/edit/${song.id}`}><EditIcon /></Link></IconButton>
           </Tooltip>
           <Tooltip title="Delete">
            <IconButton onClick={() => handleDelete(song.id)}><DeleteIcon color="secondary" /></IconButton>
           </Tooltip>
          </TableCell> 

         </TableRow>
        )
       })
      }

     </TableBody>
    </Table>
   </TableContainer>
  </>
 )
}

export default List






