import "./About.css";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { borderColor } from "@mui/system";
import {ArrowCircleDown} from '@mui/icons-material';
export function About()
{
    return <div className="container">
                <div className="left">
                    <h1><a> Hi</a> I'M</h1>
                    <h2>GYANESHWAR</h2>
                    <h4>An energetic full-stack web developer with a fluid
understanding of MERN stack. A team
player, who has an experience leading a team as well as work in a team effectively. Looking forward to working in an organization where he
can get hands-on experience.
</h4>
                    <Button target="_blank" href="https://drive.google.com/file/d/1lx11HirQGwSUW5SR-CNExkkMa2EJ0OnO/view?usp=sharing" variant="contained" style={{backgroundColor:'#ef1932',float:"left",marginTop:"15px"}}>Resume &nbsp; <ArrowCircleDown style={{fontSize:"18px"}} /></Button>
                </div>
                <div className="right">
                    <div className="pic"></div>
                </div>
    </div>;
}