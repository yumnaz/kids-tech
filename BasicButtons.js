import * as React from "react";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import './button.css';
import { padding } from "@mui/system"; 

export default function BasicButtons() {
  return (
    <div>
    <Stack spacing={2} direction="row">
      <Button variant="text" style={{color:"white"}}>Join</Button>
      <Button variant="text" style={{color:"white"}}>Login</Button>
      <Button variant="text" style={{color:"white"}}>Help</Button>
      <Button variant="text" style={{color:"white"}}>Teach</Button>


      {/* <Button variant="contained">Contained</Button> */}
      {/* <Button variant="outlined">Outlined</Button> */}
    </Stack>
    </div>
    
  );
  // style={{marginBottom:"50px"}}
} 

//  display: "block", margin:"auto",backgroundColor: "blue" justifyContent: "center", alignItems: "center"