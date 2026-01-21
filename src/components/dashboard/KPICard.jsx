import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';

function KPICard({ title, value, color }) {
  return (
<Card elevation={3} sx={{
    borderRadius: "50%",   
    // Tailles très réduites pour tenir à 3 sur une ligne mobile
    width: { xs: 105, sm: 160, md: 200 },          
    height: { xs: 105, sm: 160, md: 200 },           
    display: "flex",       
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center",
    margin: "0 auto",
  }}>
  <CardContent sx={{ p: 0.5, "&:last-child": { pb: 0.5 } }}>
    <Typography 
      sx={{ 
        fontSize: { xs: '0.55rem', sm: '0.8rem', md: '1rem' }, 
        lineHeight: 1,
        mb: 0.5 
      }}
      color="textSecondary"
    >
      {title}
    </Typography>
    <Typography 
      variant="h3" 
      sx={{ 
        color, 
        fontWeight: 'bold',
        fontSize: { xs: '0.9rem', sm: '1.8rem', md: '2.5rem' } 
      }}
    >
      {value}
    </Typography>
  </CardContent>
</Card>
  );
}

export default KPICard;
