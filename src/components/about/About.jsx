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
                    <h4>A Full Stack Web Developer based in India. A creative coder who specializes in MERN stack. I make it my mission to design pixel-perfect websites or applications with optimized code that run blazing fast.</h4>
                    <Button variant="contained" style={{backgroundColor:'#ef1932',float:"left",marginTop:"15px"}}>Resume &nbsp; <ArrowCircleDown style={{fontSize:"18px"}} /></Button>
                </div>
                <div className="right">
                    <div className="pic"></div>
                </div>
    </div>;
}