'use client';

import React, { useState } from 'react';
import { 
  Button, 
  Dialog, 
  DialogTitle, 
  DialogContent,
  DialogActions,
  TextField,
  Stack,
  IconButton
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';

const ProjectCreate = () => {
  const [open, setOpen] = useState(false);
  const [projectData, setProjectData] = useState({
    title: '',
    description: '',
    skills: ''
  });

  return (
    <div className="mt-6">
      <Button
        variant="contained"
        startIcon={<AddIcon />}
        onClick={() => setOpen(true)}
      >
        Create New Project
      </Button>

      <Dialog open={open} onClose={() => setOpen(false)} maxWidth="sm" fullWidth>
        <DialogTitle>Create New Project</DialogTitle>
        <DialogContent>
          <Stack spacing={3} sx={{ mt: 2 }}>
            <TextField
              label="Project Title"
              fullWidth
              value={projectData.title}
              onChange={(e) => setProjectData({ ...projectData, title: e.target.value })}
            />
            <TextField
              label="Description"
              fullWidth
              multiline
              rows={4}
              value={projectData.description}
              onChange={(e) => setProjectData({ ...projectData, description: e.target.value })}
            />
            <TextField
              label="Required Skills"
              fullWidth
              value={projectData.skills}
              onChange={(e) => setProjectData({ ...projectData, skills: e.target.value })}
            />
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="contained" onClick={() => setOpen(false)}>
            Create Project
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};

export default ProjectCreate;