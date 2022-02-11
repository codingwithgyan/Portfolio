import { Button, Card, Box,CardActions,IconButton , CardContent, CardMedia, Typography } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import "./Projects.css"
export function Projects()
{
    const theme = useTheme();
    return <div className="projects">
             <div className="border_group"></div>
                 <h1 className="header2">Projects</h1>
                <div className="group_card">
                <Card sx={{ width: "500px" }} variant="outlined">
                <CardMedia component="img" height="250" className='project_img1'
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">Purpple</Typography>
                        <Typography gutterBottom variant="p" component="div">Ecommerce website to buy grooming products both for men and women.</Typography>
                    </CardContent>
                    <CardActions> 
                        <Button variant="outlined" variant="outlined">Github</Button>
                        <Button variant="outlined" variant="outlined">Website</Button>
                        <Button variant="outlined" variant="outlined">Demo</Button>
                    </CardActions>
                </Card> 

                 <Card sx={{ width: "500px" }} variant="outlined">
                <CardMedia component="img" height="250" image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
                        alt="green iguana"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h4" component="div">Purpple</Typography>
                        <Typography gutterBottom variant="p" component="div">Ecommerce website to buy grooming products both for men and women.</Typography>
                    </CardContent>
                    <CardActions>
                        <Button variant="outlined">Github</Button>
                        <Button variant="outlined">Website</Button>
                        <Button variant="outlined">Demo</Button>
                    </CardActions>
                </Card>    
            </div> 
                {/* <Card variant='outlined' sx={{ display: 'flex',maxWidth: 500 }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h5">
          Purpple
          </Typography>
          <Typography gutterBottom variant="p" component="div">Ecommerce website to buy grooming products both for men and women.</Typography>
        </CardContent>
      </Box>
      <CardMedia
        component="img"
        sx={{ width: 151 }}
        image="https://mui.com/static/images/cards/contemplative-reptile.jpg"
        alt="Live from space album cover"
      />
    </Card> */}
               
    </div>;
}