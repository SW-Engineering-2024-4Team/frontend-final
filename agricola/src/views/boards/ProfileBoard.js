import ProfileCard from "../cards/ProfileCard";

import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'

export default function ProfileBoard() {
  return (
    <Box
      height={420}
      width={150}
      mx={2}
      my={2}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
    >
      <Grid item xs >
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
        <ProfileCard />
      </Grid>
    </Box>
  )
}