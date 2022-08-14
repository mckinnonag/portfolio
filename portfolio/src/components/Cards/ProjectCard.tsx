import * as React from 'react';
import Project from './Interfaces';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Stack from '@mui/material/Stack';

// Inserts a chip to render languages and technologies in the card
const chip = (
    <Stack direction="row" spacing={1}>
        <Chip label="Chip Outlined" variant="outlined" />
    </Stack>
);

const ProjectCard = (props: Project) => {
  const technologies = props.languages.map((language) => 
    <>
        <Chip label={language} variant="outlined" />
    </>  
  );

  return (
    <Card sx={{ minWidth: 275, margin: '10px', maxWidth: '5%' }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        <Stack direction="row" spacing={1}>
            {technologies}
        </Stack> 
        </Typography>
        <Typography variant="body2">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}

export default ProjectCard;
