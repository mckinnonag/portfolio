import * as React from 'react';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Box from '@mui/material/Box';
import Backdrop from '@mui/material/Backdrop';
import Code from '@mui/icons-material/Code';
import Link from '@mui/material/Link';
import OpenInBrowserIcon from '@mui/icons-material/OpenInBrowser';
import Project from '../Projects/Interfaces';

// Modal style
const style = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

const ProjectCard = (project: Project) => {
    // Modal state
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <>
            <Card
                sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
                >
                <CardMedia
                    component="img"
                    image="https://source.unsplash.com/random"
                    alt="random"
                />
                <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                        {project.title}
                    </Typography>
                    <Typography>
                        {project.description}
                    </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small"
                            onClick={handleOpen}
                            >
                                Learn More
                    </Button>
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
                            {project.title}
                        </Typography>
                        <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                            {project.longDescription}
                        </Typography>
                        <Stack spacing={2} direction="row" justifyContent="right" mt="10px">
                            <Link 
                                href={project.linkURL}
                                underline="none"
                                target="_blank"
                            >
                                <Button disabled={project.linkDisabled}       variant="outlined">{<OpenInBrowserIcon />}</Button>
                            </Link>
                            <Link 
                                href={project.sourceURL}
                                underline="none"
                                target="_blank"
                            >
                                <Button disabled={project.sourceDisabled}variant="outlined">{<Code />}</Button>
                            </Link>
                        </Stack>
                    </Box>
                </Fade>
            </Modal>
        </>
    )
}

export default ProjectCard;