import { Button,Grid,ButtonGroup,useMediaQuery ,SvgIcon,CardActionArea, Card, Box,CardActions,IconButton , CardContent, CardMedia, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import "./Projects.css";
export function Projects()
{
    return <div className="projects" id="project">
             <div className="border_group"></div>
                <h1 className="header">Projects</h1>
                <div className="group_card">

                <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center"
  style={{ width: '100%' }}>
                <Card className='card_1' variant="outlined">
                <CardActionArea className='card_area'>
                <CardMedia component="img" sx={{ width: '100%',height:'100%',border:'3px solid #323232',borderRadius:'5px' }} className='project_img1'/>
                </CardActionArea>
                <Box className="card_box">
                    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Typography sx={{textAlign:'center',fontWeight:'bold',color:'#ef1932'}} gutterBottom variant="h4" component="div">Purplle</Typography>
                        <Typography sx={{textAlign:'center'}} gutterBottom variant="p" component="div">Ecommerce website to buy grooming products both for men and women.</Typography>
                        <Box className="svg_group">
                            <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                                <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                            </SvgIcon>
                            <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                                <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
                            </SvgIcon>
                            <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                            <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                            </SvgIcon>
                        </Box>
                    </CardContent>
                    
                    <CardActions> 
                    <ButtonGroup className='btg_group'>
                        <Button className='btn_action' sx={{background:'#08090b'}} href="https://github.com/codingwithgyan/Purplle" variant="contained">Github</Button>
                        <Button className='btn_action' sx={{background:'#08090b'}} href="https://purplle-cw.vercel.app" variant="contained">Website</Button>
                        <Button  className='btn_action'sx={{background:'#08090b'}} variant="contained">Demo</Button>
                    </ButtonGroup>    
                    </CardActions>
                    </Box>       
                </Card> 
                <br/>
                <br/>
                <Card className='card_1'  variant="outlined">
                <CardActionArea className='card_area'>
                <CardMedia component="img" sx={{ width: '100%',height:'100%',border:'3px solid #323232',borderRadius:'5px' }} className='project_img2'/>
                </CardActionArea>
                <Box className="card_box">
                    <CardContent sx={{display:'flex',flexDirection:'column',justifyContent:'space-evenly'}}>
                        <Typography sx={{textAlign:'center',color:'#ef1932',fontWeight:'bold'}} gutterBottom variant="h4" component="div">Strawberry-net</Typography>
                        <Typography sx={{textAlign:'center'}} gutterBottom variant="p" component="div">Ecommerce website to buy grooming products both for men and women.</Typography>
                        <Box className="svg_group">
                        <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                             <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.564-2.438L1.5 0zm7.031 9.75l-.232-2.718 10.059.003.23-2.622L5.412 4.41l.698 8.01h9.126l-.326 3.426-2.91.804-2.955-.81-.188-2.11H6.248l.33 4.171L12 19.351l5.379-1.443.744-8.157H8.531z"></path>
                        </SvgIcon>
                        <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                             <path d="M16.017 21.044v0zM4.743 3.519l2.049 22.981 9.194 2.552 9.22-2.556 2.051-22.977h-22.514zM23 8.775l-0.693 7.767h-0l-0.48 5.359-0.042 0.476-5.781 1.603-5.773-1.603-0.395-4.426h2.829l0.201 2.248 3.142 0.847 0.008-0.002 0.002-0 3.134-0.846 0.329-3.655-6.579 0-0.056-0.633-0.129-1.429-0.067-0.756 7.081-0 0.258-2.886h-10.786l-0.056-0.634-0.129-1.429-0.067-0.756h14.118l-0.068 0.756z"></path>
                        </SvgIcon>
                        <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                        <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
                        </SvgIcon>
                        <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                            <path d="M24 18.588a1.529 1.529 0 01-1.895-.72l-3.45-4.771-.5-.667-4.003 5.444a1.466 1.466 0 01-1.802.708l5.158-6.92-4.798-6.251a1.595 1.595 0 011.9.666l3.576 4.83 3.596-4.81a1.435 1.435 0 011.788-.668L21.708 7.9l-2.522 3.283a.666.666 0 000 .994l4.804 6.412zM.002 11.576l.42-2.075c1.154-4.103 5.858-5.81 9.094-3.27 1.895 1.489 2.368 3.597 2.275 5.973H1.116C.943 16.447 4.005 19.009 7.92 17.7a4.078 4.078 0 002.582-2.876c.207-.666.548-.78 1.174-.588a5.417 5.417 0 01-2.589 3.957 6.272 6.272 0 01-7.306-.933 6.575 6.575 0 01-1.64-3.858c0-.235-.08-.455-.134-.666A88.33 88.33 0 010 11.577zm1.127-.286h9.654c-.06-3.076-2.001-5.258-4.59-5.278-2.882-.04-4.944 2.094-5.071 5.264z"></path>
                        </SvgIcon>
                        <SvgIcon sx={{stroke:"currentColor",fill:"currentColor",strokeWidth:"0",version:"1.1",viewBox:"0 0 32 32",height:"1em",width:"1em"}}>
                            <path d="M22.797 14.562c-0.067-0.774-0.209-1.546-0.407-2.297-0.625-2.369-1.666-4.637-3.134-6.603-0.4-0.536-0.832-1.048-1.294-1.532-0.476-0.499-1.004-0.957-1.336-1.578-0.21-0.393-0.41-0.791-0.614-1.187-0.003 0.124-0.011 0.248-0.011 0.371-0-0.124 0.009-0.248 0.011-0.372-0.038-0.095-0.076-0.191-0.13-0.327-0.022 0.075-0.036 0.101-0.036 0.129-0.017 0.645-0.383 1.083-0.838 1.492-0.512 0.46-0.989 0.959-1.481 1.441 0.017 0.022 0.036 0.044 0.055 0.066-0.019-0.022-0.038-0.043-0.055-0.066-1.463 1.924-2.752 3.981-3.511 6.29-0.221 0.672-0.395 1.359-0.517 2.056-0.259 1.481-0.379 2.92-0.296 4.42 0.046 0.829 0.191 1.645 0.407 2.448 0.785 2.917 2.379 5.336 4.558 7.392 0.405 0.382 0.842 0.729 1.265 1.093 0.001-0.004 0.002-0.007 0.003-0.011-0.001 0.004-0.002 0.007-0.003 0.011 0.062 0.214 0.125 0.428 0.187 0.642 0.058 0.332 0.116 0.664 0.174 0.996 0.028 0.346 0.055 0.693 0.083 1.039-0.001 0.211-0.010 0.423 0.003 0.633 0.003 0.054 0.074 0.104 0.113 0.156 0.001-0.002 0.002-0.004 0.004-0.006-0.001 0.002-0.002 0.004-0.004 0.006 0.118 0.041 0.235 0.083 0.353 0.124 0.106 0.041 0.212 0.083 0.367 0.143-0.023-0.346-0.043-0.635-0.063-0.924-0.001-0.303-0.002-0.607-0.003-0.91-0.006 0.007-0.014 0.014-0.021 0.021 0.007-0.007 0.014-0.014 0.021-0.021 0.042-0.462 0.085-0.924 0.127-1.386 0.031-0.101 0.061-0.201 0.092-0.302 0.088-0.156 0.175-0.311 0.263-0.467 0.325-0.262 0.674-0.499 0.971-0.79 0.536-0.527 1.071-1.060 1.55-1.637 0.622-0.748 1.158-1.565 1.588-2.441 1.223-2.491 1.789-5.269 1.564-8.039-0.002-0.024-0.004-0.049-0.006-0.074z"></path>
                        </SvgIcon>
                        
                       
                        </Box>
                    </CardContent>
                    
                    <CardActions> 
                    <ButtonGroup className='btg_group'>
                        <Button className='btn_action' sx={{background:'#08090b'}} href="https://github.com/codingwithgyan/Strawberry-net" variant="contained">Github</Button>
                        <Button className='btn_action' sx={{background:'#08090b'}} href="https://purplle-cw.vercel.app" variant="contained">Website</Button>
                        <Button className='btn_action' sx={{background:'#08090b'}} variant="contained">Demo</Button>
                    </ButtonGroup>    
                    </CardActions>
                    </Box>       
                </Card> 
                </Grid>
            </div> 
            
               
    </div>;
}