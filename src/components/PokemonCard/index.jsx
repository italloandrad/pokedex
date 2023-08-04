import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box } from '@mui/material';
import {typeHandler} from '../../utils'

export default function PokemonCard( {name, image, types}) {
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 200 }}
        image={image}
        title="green iguana"
      />
      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography gutterBottom variant="caption" component="div">
          {typeHandler(types)}
        </Typography>
        </Box>
        {/*<Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
  </Typography>*/}
      </CardContent>
     {/*} <CardActions>
        
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
</CardActions>*/}
    </Card>
  );
}