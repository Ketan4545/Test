
import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import GridOnIcon from "@mui/icons-material/GridOn";
import EditIcon from "@mui/icons-material/Edit";
import { ListItemButton } from "@mui/material";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import ShowChartIcon from '@mui/icons-material/ShowChart';
import AddchartIcon from '@mui/icons-material/Addchart';
import MultilineChartIcon from '@mui/icons-material/MultilineChart';
import { Link,BrowserRouter, Route, useNavigate } from "react-router-dom";
import Chip from '@mui/material/Chip';
import axios from 'axios'

export default function ReportThree() {
    const navigate = useNavigate();
  const [arr, setArr] = React.useState([])
  const [data, setData] = React.useState("");

  async function getProcName(){
    const  res = await axios.get(`http://localhost:8081/chartlistFetch`)
      const  result = res.data
       setArr(result)
 }
  getProcName()
   

  function createReport(){
  navigate("create")
  }

  return (
    <div>
       
      <Grid>
        <Box sx={{ pb: 2, pl: 5, pt:2 }}>
          
          <Chip icon={<AddIcon />} label="Create" color="primary" variant="outlined"  onClick={createReport}/>
        </Box>
        <Stack direction="row" spacing={10}>
          <Box component="span">
              
            <List
              sx={{
                width: "100%",
                maxWidth: 360,
                bgcolor: "background.paper",
                position: "relative",
                overflow: "auto",
                maxHeight: "80vh",
                "& ul": { padding: 0 }
              }}
            >
        
              {arr.map((row) => (
               
                  <ListItemButton key={row}  component={Link} to={`${row}`} value={row}>
                    <ListItemAvatar size="small">
                      <MultilineChartIcon color="primary" />
                    </ListItemAvatar>
                    <ListItemText primary={row}  />
                  </ListItemButton>
            
              ))}
            </List>
           
          </Box>
          
        </Stack>
      </Grid>
      
    </div>
  );
}
