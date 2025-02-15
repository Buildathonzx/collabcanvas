'use client';

import React from 'react';
import { 
  Card, 
  CardContent, 
  Typography, 
  Grid,
  Chip,
  IconButton,
  Stack
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import BrushIcon from '@mui/icons-material/Brush';

const projects = [
  {
    id: 1,
    title: "Web3 Music Player",
    type: "Development",
    skills: ["React", "Solidity", "Web3"],
    icon: <CodeIcon />
  },
  {
    id: 2,
    title: "NFT Collection",
    type: "Art",
    skills: ["Digital Art", "NFT"],
    icon: <BrushIcon />
  },
  {
    id: 3,
    title: "Music Album",
    type: "Music",
    skills: ["Vocals", "Production"],
    icon: <MusicNoteIcon />
  }
];

const ProjectList = () => {
  return (
    <div className="mt-6">
      <Typography variant="h5" gutterBottom>
        Available Projects
      </Typography>
      <Grid container spacing={3}>
        {projects.map((project) => (
          <Grid item xs={12} sm={6} md={4} key={project.id}>
            <Card>
              <CardContent>
                <Stack direction="row" alignItems="center" spacing={1}>
                  {project.icon}
                  <Typography variant="h6">{project.title}</Typography>
                </Stack>
                <Typography color="textSecondary" gutterBottom>
                  {project.type}
                </Typography>
                <Stack direction="row" spacing={1} sx={{ mt: 2 }}>
                  {project.skills.map((skill) => (
                    <Chip key={skill} label={skill} size="small" />
                  ))}
                </Stack>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};

export default ProjectList;