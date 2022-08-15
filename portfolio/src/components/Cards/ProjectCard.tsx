import * as React from 'react';
import Project from './Interfaces';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import Grid from '@mui/material/Grid';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Stack from '@mui/material/Stack';
import Code from '@mui/icons-material/Code';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';

const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const ProjectCard = (props: Project) => {
  // Iterates through the array of tech/languages and renders each as an icon
  const technologies = props.languages.map((language) => 
    <Grid item>
        <Chip label={language} variant="outlined" />
    </Grid> 
  );

  // State for the modal
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
        <Card sx={{ margin: '10px' }}>
        <CardContent>
            <Typography variant="h5" component="div">
            {props.title}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
                <Grid container spacing={1} justifyContent="center">
                    {technologies}
                </Grid> 
            </Typography>
            <Typography variant="body2">
            {props.description}
            </Typography>
        </CardContent>
        <CardActions>
            <Button size="small" 
                    onClick={handleOpen}
                    >Learn More</Button>
        </CardActions>
        </Card>

        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={open}
            onClose={handleClose}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
            timeout: 500,
            }}
            >
            <Fade in={open}>
                <Box sx={style}>
                    <Typography id="transition-modal-title" variant="h6" component="h2">
                        {props.title}
                    </Typography>
                    <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                        {props.description}
                    </Typography>
                    <Stack spacing={2} direction="row" justifyContent="right" mt="10px">
                        <Button disabled={props.linkDisabled}       variant="outlined">{<OpenInBrowserIcon />}</Button>
                        <Button disabled={props.sourceDisabled}
                        variant="outlined">{<Code />}</Button>
                    </Stack>
                </Box>
            </Fade>
        </Modal>
    </div>
  );
}

export default ProjectCard;
