'use client';

import React from 'react';
import { 
  Avatar, 
  Card, 
  CardContent, 
  Typography, 
  Stack,
  Chip
} from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';

const UserProfile = () => {
  return (
    <Card sx={{ mb: 4 }}>
      <CardContent>
        <Stack direction="row" spacing={2} alignItems="center">
          <Avatar sx={{ width: 56, height: 56 }}>
            <PersonIcon />
          </Avatar>
          <div>
            <Typography variant="h6">John Doe</Typography>
            <Typography color="textSecondary">Digital Creator</Typography>
            <Stack direction="row" spacing={1} sx={{ mt: 1 }}>
              <Chip label="Artist" size="small" />
              <Chip label="Developer" size="small" />
              <Chip label="Writer" size="small" />
            </Stack>
          </div>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default UserProfile;