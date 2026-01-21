import React from 'react';
import { Card, CardContent, Typography } from '@mui/material';

function KPICard({ title, value, color }) {
  return (
    <Card elevation={3} sx={{
        borderRadius: "50%",   
        // 90px est la taille de sécurité pour tenir à 3 sur une ligne
        width: { xs: 90, sm: 160, md: 200 },          
        height: { xs: 90, sm: 160, md: 200 },           
        display: "flex",       
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        margin: "0 auto",
        // Optionnel : un petit bord coloré pour mieux voir le cercle
        border: `2px solid ${color}20`, 
      }}>
      <CardContent sx={{ p: 0.5, "&:last-child": { pb: 0.5 } }}>
        <Typography 
          sx={{ 
            fontSize: { xs: '0.50rem', sm: '0.8rem', md: '1rem' }, 
            lineHeight: 1.1,
            mb: 0.5,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap', // Évite que le titre ne casse le cercle
            maxWidth: '80px'
          }}
          color="textSecondary"
        >
          {title}
        </Typography>
        <Typography 
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
