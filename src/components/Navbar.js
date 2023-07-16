import React from 'react'
//import { Link } from "react-router-dom";
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import { useEffect } from 'react';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Collapse from '@mui/material/Collapse';
import Select from "@mui/material/Select";
import {Popover, Button} from '@mui/material';

const duration = 300;

const styles = {
  form : { width   : "98vw",marginLeft:"1vw", backgroundColor : "#edf2fa",gap:"8px",height : "40px",borderRadius: "24px",display:"flex",alignItems:"center"},
  dropdown : {gridColumnStart:"2",gridRowStart:"2",marginLeft:"5px",fontSize:"14px",letterSpacing: ".2px"},

  dropdownElement : {marginLeft:"15px",cursor:"pointer"}
}



function Menu(props) {
  return (
    <span data-bs-toggle="dropdown" aria-expanded="false" style={styles.dropdownElement} >{props.item}</span>
  );
}


export default function Navbar(props) {

 
    const [zoom, setZoom] = React.useState(65);
    const [font, setFont] = React.useState(11);
    const [fontStyle, setFontStyle] = React.useState("arial");
    const [hideMenus, setHideMenus] = React.useState(false);
    const [fontsize, setFontsize] = React.useState(11);

  const handleChangeZoom = (event) => {
    setZoom(event.target.value);
  };

  const handleChangeFont = (event) => {
    setFont(event.target.value);
  };

  const handleChangeFontStyle = (event) => {
    setFontStyle(event.target.value);
  };

  const handleClickFontsize=(e)=>{
    let a = fontsize;
    if(a===11 && a+e<11) setFontsize(a);
    else{
      a = a+e;
      setFontsize(a);
    } 
    if(e===-1)  props.fontControlsub();
    else props.fontControladd();
  }

  const handleMenus=()=>{
    if(hideMenus===false) setHideMenus(true);
    else setHideMenus(false);
  }

  const fontVariable = (<Box sx={{ minWidth: 140 }} >
    <FormControl fullWidth>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={font}
        onChange={handleChangeFont}
        sx={{"& fieldset": { border: "none" }}}
        onClick={
          useEffect(() => {
            props.fontSize(font.toString()+"pt")
          }, [font])
          
        }
        
      >
        <MenuItem value={11} >Normal text</MenuItem>
        <MenuItem value={26}>Title</MenuItem>
        <MenuItem value={15}>Subtitle</MenuItem>
        <MenuItem value={20}>Heading 1</MenuItem>
        <MenuItem value={16}>Heading 2</MenuItem>
        <MenuItem value={14}>Heading 3</MenuItem>
      </Select>
    </FormControl>
  </Box>)

const zoomVariable = <Box sx={{ minWidth: 100 }} >
<FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={zoom}
    //label="Age"
    onChange={handleChangeZoom}
    onClick={
      useEffect(() => {
        props.textarea(zoom<100?(zoom.toString()+"vw"):(zoom.toString()+"px"))
      }, [zoom])
      }
    sx={{"& fieldset": { border: "none"}}}
  >
    <MenuItem  value={92}>Fit</MenuItem>
    <MenuItem value={45}>50%</MenuItem>
    <MenuItem  value={55}>75%</MenuItem>
    <MenuItem  value={60}>90%</MenuItem>
    <MenuItem  value={65}>100%</MenuItem>
    <MenuItem value={75}>125%</MenuItem>
    <MenuItem  value={85}>150%</MenuItem>
    <MenuItem  value={95}>200%</MenuItem>
  </Select>
</FormControl>
</Box>

const fontStyleVariable = <Box sx={{ minWidth: 130 }} >
<FormControl fullWidth>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={fontStyle}
    onChange={handleChangeFontStyle}
    onClick={
      useEffect(() => {
        props.fontfamily(fontStyle)
      }, [fontStyle])
    }  //here useEffect is must & should..........otherwise format options will not work
    sx={{"& fieldset": { border: "none" }}}
  >
    <MenuItem value={"arial"} >Arial</MenuItem>
    <MenuItem value={"Comic Sans MS, Comic Sans"}>Comic Sans</MenuItem>
    <MenuItem value={"Inter"}>Inter</MenuItem>
    <MenuItem value={"cursive"}>Cursive</MenuItem>
    <MenuItem value={"Courier New"}>Courier New</MenuItem>
    <MenuItem value={"serif"}>serif</MenuItem>
  </Select>
</FormControl>
</Box>

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  function Color(props) {
    return (
      <span className="color" style={{width:"20px",height:"20px",borderRadius:"50%",backgroundColor:`${props.color}`,border:"1px solid grey",cursor:"pointer"}} onClick={props.func}> </span>
    );
  }

  function Icon(props) {
    return (
      <span className="material-symbols-rounded" onClick={props.func}  style={{marginLeft:"8px",fontSize:"20px",color:"rgba(0,0,0,.7)",cursor:"pointer"}}>{props.icon}</span>
    );
  }
 
/*  const [anchor, setAnchor] = React.useState(null);

 const handleLogout=(event)=>{
  setAnchor(event.currentTarget);
 }
 const handleCloseLogout = () => {
  setAnchor(null);
};

const Open = Boolean(anchor);
const Id = Open ? 'simple-popover' : undefined;
*/
    
return (
    <>
    <Collapse  in={!hideMenus} timeout={duration} unmountOnExit>

        <div style={{display:"grid",backgroundColor:"#f9fbfd",gridTemplateColumns:"5vw 72vw 20vw",margin:"auto",gridTemplateRows:"40px 30px"}}>
                <img style={{height:"60px",marginTop:"5px",marginLeft:"3px"}} alt="Google Doc Icon"src="https://static.vecteezy.com/system/resources/previews/017/395/386/original/google-document-icon-free-png.png" ></img>
                <div className="docName" style={{color:"rgb(82 76 76)",backgroundColor:"#f9fbfd",fontSize:"18px",marginLeft:"5px",gridColumnStart:"2",gridRowStart:"1",justifySelf:"left",alignSelf:"center",border:"1px solid transparent"}}> Untitled document </div>
                <div className="dropdown" style={styles.dropdown}>
                    {/*<Button variant="text" data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:"pointer"}}>File</Button>*/}
                    <span data-bs-toggle="dropdown" aria-expanded="false" style={{cursor:"pointer"}}>File</span>
                    <Menu item={"Edit"}/>        <Menu item={"View"}/>      <Menu item={"Insert"}/>
                    <Menu item={"Format"}/>      <Menu item={"Tools"}/>     <Menu item={"Extensions"}/>
                    <Menu item={"Help"}/>
                    <ul className="dropdown-menu">
                    <li><a className="dropdown-item" to="/">Action</a></li>
                    <li><a className="dropdown-item" to="/">Another action</a></li>
                    <li><a className="dropdown-item" to="/">Something else here</a></li>
                    </ul>
                </div>
                <div style={{marginLeft:"auto",alignSelf:"center",marginTop:"25px",}}>
                <span style={{fontSize:"15px",padding:"8px 30px",cursor:"pointer",fontFamily:"Open Sans,sans-serif",fontWeight:"500",borderRadius:"25px",backgroundColor:"#c2e7ff"}} onClick={props.share}> 
                    Share
                </span>
                <img src={props.profile.picture} alt="user image" /*onClick={handleLogout}*/ style={{marginLeft:"20px",cursor:"pointer",height:"35px",width:"35px",borderRadius:"50%"}} />
               </div>
          </div>

      </Collapse>

        
      {hideMenus===false?"":<div style={{marginTop:"10px"}}></div>}


      <div className="form" style={styles.form}>
                  <Icon icon="undo" func={props.undo}/>
                  <Icon icon="redo" func={props.redo}/>
                  <Icon icon="print" func={props.print}/>
                  {zoomVariable}
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px"}}>|</span>
                  {fontVariable}
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px"}}>|</span>
                  {fontStyleVariable}
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px"}}>|</span>
                  <span className="material-symbols-rounded" onClick={()=>{handleClickFontsize(-1)}} style={{fontSize:"20px",color:"rgba(0,0,0,.7)",cursor:"pointer"}}>remove</span>
                  <TextField /*id="outlined-basic"data-bs-toggle="dropdown" aria-expanded="false"*/  value={fontsize}  sx={{width:"40px"}} size="small" variant="outlined" inputProps={{style:{height:"10px",padding:"8px"},}} />
                {/*  <Select
                    options={optionList}
                    placeholder="Select color"
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable={true}
                    isMulti
                  />
                */}
                  <span className="material-symbols-rounded" onClick={()=>{handleClickFontsize(1)}} style={{fontSize:"20px",color:"rgba(0,0,0,.7)",cursor:"pointer"}}>add</span>
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px"}}>|</span>
                  <Icon icon="format_bold"  func={props.bold}/>       <Icon icon="format_italic" func={props.italic}/>          <Icon icon="format_underlined" func={props.underline}/>
                 {/* <Icon icon="format_color_text" func={props.textcolor}/> */}
                 
                  <span className="material-symbols-rounded" onClick={handleClick}  style={{marginLeft:"8px",fontSize:"20px",color:"rgba(0,0,0,.7)",cursor:"pointer"}}>format_color_text</span>

      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
      >
          <div style={{display:"grid",gridTemplateRows:"repeat(8, 1fr)",gridTemplateColumns:"repeat(10, 1fr)",gap:"1.5px",height:"180px",width:"219px",margin:"10px",backgroundColor:"#f9fbfd"}}>
            
                    <Color  color="black" func={()=>props.textcolor("black")}/>         
                    <Color  color="#434343" func={()=>props.textcolor("#434343")}/> 
                    <Color  color="#666666" func={()=>props.textcolor("#666666")}/> 
                    <Color  color="#999999" func={()=>props.textcolor("#999999")}/>
                    <Color  color="#b7b7b7" func={()=>props.textcolor("#b7b7b7")}/>
                    <Color  color="#cccccc" func={()=>props.textcolor("#cccccc")}/>
                    <Color  color="#d9d9d9" func={()=>props.textcolor("#d9d9d9")}/>
                    <Color  color="#efefef" func={()=>props.textcolor("#efefef")}/>
                    <Color  color="#f3f3f3" func={()=>props.textcolor("#f3f3f3")}/>
                    <Color  color="#ffffff" func={()=>props.textcolor("#ffffff")}/>


                    <Color  color="#980000" func={()=>props.textcolor("#980000")}/> 
                    <Color  color="#ff0000" func={()=>props.textcolor("#ff0000")}/> 
                    <Color  color="#ff9900" func={()=>props.textcolor("#ff9900")}/> 
                    <Color  color="#ffff00" func={()=>props.textcolor("#ffff00")}/>
                    <Color  color="#00ff00" func={()=>props.textcolor("#00ff00")}/>
                    <Color  color="#00ffff" func={()=>props.textcolor("#00ffff")}/>
                    <Color  color="#4a86e8" func={()=>props.textcolor("#4a86e8")}/>
                    <Color  color="#0000ff" func={()=>props.textcolor("#0000ff")}/>
                    <Color  color="#9900ff" func={()=>props.textcolor("#9900ff")}/>
                    <Color  color="#ff00ff" func={()=>props.textcolor("#ff00ff")}/>

                    <Color  color="#e6b8af" func={()=>props.textcolor("#e6b8af")}/> 
                    <Color  color="#f4cccc" func={()=>props.textcolor("#f4cccc")}/> 
                    <Color  color="#fce5cd" func={()=>props.textcolor("#fce5cd")}/> 
                    <Color  color="#fff2cc" func={()=>props.textcolor("#fff2cc")}/>
                    <Color  color="#d9ead3" func={()=>props.textcolor("#d9ead3")}/>
                    <Color  color="#d0e0e3" func={()=>props.textcolor("#d0e0e3")}/>
                    <Color  color="#c9daf8" func={()=>props.textcolor("#c9daf8")}/>
                    <Color  color="#cfe2f3" func={()=>props.textcolor("#cfe2f3")}/>
                    <Color  color="#d9d2e9" func={()=>props.textcolor("#d9d2e9")}/>
                    <Color  color="#ead1dc" func={()=>props.textcolor("#ead1dc")}/>

                    <Color  color="#dd7e6b" func={()=>props.textcolor("#dd7e6b")}/> 
                    <Color  color="#ea9999" func={()=>props.textcolor("#ea9999")}/> 
                    <Color  color="#f9cb9c" func={()=>props.textcolor("#f9cb9c")}/> 
                    <Color  color="#ffe599" func={()=>props.textcolor("#ffe599")}/>
                    <Color  color="#b6d7a8" func={()=>props.textcolor("#b6d7a8")}/>
                    <Color  color="#a2c4c9" func={()=>props.textcolor("#a2c4c9")}/>
                    <Color  color="#a4c2f4" func={()=>props.textcolor("#a4c2f4")}/>
                    <Color  color="#9fc5e8" func={()=>props.textcolor("#9fc5e8")}/>
                    <Color  color="#b4a7d6" func={()=>props.textcolor("#b4a7d6")}/>
                    <Color  color="#d5a6bd" func={()=>props.textcolor("#d5a6bd")}/>


                    <Color  color="#cc4125" func={()=>props.textcolor("#cc4125")}/> 
                    <Color  color="#e06666" func={()=>props.textcolor("#e06666")}/> 
                    <Color  color="#f6b26b" func={()=>props.textcolor("#f6b26b")}/> 
                    <Color  color="#ffd966" func={()=>props.textcolor("#ffd966")}/>
                    <Color  color="#93c47d" func={()=>props.textcolor("#93c47d")}/>
                    <Color  color="#76a5af" func={()=>props.textcolor("#76a5af")}/>
                    <Color  color="#6d9eeb" func={()=>props.textcolor("#6d9eeb")}/>
                    <Color  color="#6fa8dc" func={()=>props.textcolor("#6fa8dc")}/>
                    <Color  color="#8e7cc3" func={()=>props.textcolor("#8e7cc3")}/>
                    <Color  color="#c27ba0" func={()=>props.textcolor("#c27ba0")}/>


                    <Color  color="#a61c00" func={()=>props.textcolor("#a61c00")}/> 
                    <Color  color="#cc0000" func={()=>props.textcolor("#cc0000")}/> 
                    <Color  color="#e69138" func={()=>props.textcolor("#e69138")}/> 
                    <Color  color="#f1c232" func={()=>props.textcolor("#f1c232")}/>
                    <Color  color="#6aa84f" func={()=>props.textcolor("#6aa84f")}/>
                    <Color  color="#45818e" func={()=>props.textcolor("#45818e")}/>
                    <Color  color="#3c78d8" func={()=>props.textcolor("#3c78d8")}/>
                    <Color  color="#3d85c6" func={()=>props.textcolor("#3d85c6")}/>
                    <Color  color="#674ea7" func={()=>props.textcolor("#674ea7")}/>
                    <Color  color="#a64d79" func={()=>props.textcolor("#a64d79")}/>


                    <Color  color="#85200c" func={()=>props.textcolor("#85200c")}/> 
                    <Color  color="#990000" func={()=>props.textcolor("#990000")}/> 
                    <Color  color="#b45f06" func={()=>props.textcolor("#b45f06")}/> 
                    <Color  color="#bf9000" func={()=>props.textcolor("#bf9000")}/>
                    <Color  color="#38761d" func={()=>props.textcolor("#38761d")}/>
                    <Color  color="#134f5c" func={()=>props.textcolor("#134f5c")}/>
                    <Color  color="#1155cc" func={()=>props.textcolor("#1155cc")}/>
                    <Color  color="#0b5394" func={()=>props.textcolor("#0b5394")}/>
                    <Color  color="#351c75" func={()=>props.textcolor("#351c75")}/>
                    <Color  color="#741b47" func={()=>props.textcolor("#741b47")}/>


                    <Color  color="#5b0f00" func={()=>props.textcolor("#5b0f00")}/> 
                    <Color  color="#660000" func={()=>props.textcolor("#660000")}/> 
                    <Color  color="#783f04" func={()=>props.textcolor("#783f04")}/> 
                    <Color  color="#7f6000" func={()=>props.textcolor("#7f6000")}/>
                    <Color  color="#274e13" func={()=>props.textcolor("#274e13")}/>
                    <Color  color="#0c343d" func={()=>props.textcolor("#0c343d")}/>
                    <Color  color="#1c4587" func={()=>props.textcolor("#1c4587")}/>
                    <Color  color="#073763" func={()=>props.textcolor("#073763")}/>
                    <Color  color="#20124d" func={()=>props.textcolor("#20124d")}/>
                    <Color  color="#4c1130" func={()=>props.textcolor("#4c1130")}/>

            </div>
      </Popover>
  
                  <Icon icon="format_ink_highlighter" func={props.highlight}/>
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px",marginLeft:"10px"}}>|</span>
                  <Icon icon="image" func={props.image}/>                 <Icon icon="format_align_left" func={props.leftAlign}/>      <Icon icon="format_align_center" func={props.centerAlign}/>
                  <Icon icon="format_align_right" func={props.rightAlign}/>    <Icon icon="format_align_justify" func={props.justifyAlign}/>   <Icon icon="format_line_spacing"/>
                  <Icon icon="checklist"/>             <Icon icon="format_list_bulleted" func={props.bullet}/>   <Icon icon="format_list_numbered" func={props.numberList}/>
                  <span style={{color:"grey",fontWeight:"lighter",marginBottom:"5px",marginLeft:"auto"}}>|</span>
                  <span className="material-symbols-rounded" onClick={handleMenus} style={{fontSize:"20px",color:"rgba(0,0,0,.7)",cursor:"pointer",marginRight:"20px"}}>{hideMenus===false?"expand_less":"expand_more"}</span>
         </div>
    </>
  )
}


