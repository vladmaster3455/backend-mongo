import React, { useState, useEffect } from 'react';
import { 
  Grid, 
  Typography, 
  Box, 
  CircularProgress, 
  Alert,
  Card,
  CardContent
} from '@mui/material';
import KPICard from '../components/dashboard/KPICard';
import RecentList from '../components/dashboard/RecentList';
import { usersAPI, transactionsAPI } from '../config/api';

import TrendingDownIcon from '@mui/icons-material/TrendingDown';

function Dashboard() {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [stats, setStats] = useState({
    totalDistributeurs: 0,
    totalClients: 0,
    totalAgents: 0
  });
  const [recentTransactions, setRecentTransactions] = useState([]);
  const [transactionStats, setTransactionStats] = useState(null);

  useEffect(() => {
    fetchDashboardData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchDashboardData = async () => {
    try {
      setLoading(true);
      
      // Récupérer tous les utilisateurs
      const usersResponse = await usersAPI.getAllUsers();
      
      // Compter par type
      const users = usersResponse.users || [];
      const statsData = {
        totalDistributeurs: users.filter(u => u.typeUtilisateur === 'Distributeur').length,
        totalClients: users.filter(u => u.typeUtilisateur === 'Client').length,
        totalAgents: users.filter(u => u.typeUtilisateur === 'Agent').length
      };
      setStats(statsData);

      // Récupérer l'historique des transactions récentes
      const transactionsResponse = await transactionsAPI.getHistorique(10, 1);
      setRecentTransactions(transactionsResponse.transactions || []);

      // Récupérer les statistiques de transactions
      try {
        const statsResponse = await transactionsAPI.getStatistiques();
        setTransactionStats(statsResponse.statistiques);
      } catch (err) {
        console.log('Statistiques non disponibles');
      }

      setLoading(false);
    } catch (err) {
      setError(err.message || 'Erreur lors du chargement des données');
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '400px' }}>
        <CircularProgress />
      </Box>
    );
  }

  if (error) {
    return (
      <Alert severity="error" sx={{ mb: 3 }}>
        {error}
      </Alert>
    );
  }

  return (
    <Box sx={{ px: { xs: 1, sm: 2, md: 3 }, py: 2 }}>
      <Typography 
        variant="h4" 
        gutterBottom
        sx={{ 
          fontSize: { xs: '1.5rem', sm: '2rem', md: '2.125rem' },
          mb: { xs: 2, sm: 3 },
          fontWeight: 'bold'
        }}
      >
        Tableau de Bord
      </Typography>

      {/* KPI Cards - Forçage sur une seule ligne (Même sur Mobile) */}
      <Grid 
        container 
        spacing={{ xs: 1, sm: 2, md: 3 }} 
        sx={{ 
          mb: { xs: 3, sm: 4 },
          flexWrap: 'nowrap', // Empêche le retour à la ligne sur mobile
          overflowX: 'hidden', // Évite le scroll si possible
          justifyContent: 'space-between',
          width: '100%',
          margin: '0 auto'
        }}
      >
        <Grid item xs={4}>
          <KPICard 
            title="Distributeurs"
            value={stats.totalDistributeurs}
            color="#1976d2"
          />
        </Grid>
        <Grid item xs={4}>
          <KPICard 
            title="Clients"
            value={stats.totalClients}
            color="#2e7d32"
          />
        </Grid>
        <Grid item xs={4}>
          <KPICard 
            title="Agents"
            value={stats.totalAgents}
            color="#ed6c02"
          />
        </Grid>
      </Grid>

      {/* Transactions récentes */}
      <Card elevation={3} sx={{ mb: { xs: 3, sm: 4 }, borderRadius: 2 }}>
        <CardContent sx={{ p: { xs: 2, sm: 3 } }}>
          <Typography 
            variant="h6" 
            gutterBottom 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              gap: 1,
              fontSize: { xs: '1.1rem', sm: '1.25rem' },
              fontWeight: 'bold'
            }}
          >
            <TrendingDownIcon color="secondary" />
            Transactions Récentes
          </Typography>

          <RecentList transactions={recentTransactions} />
        </CardContent>
      </Card>

      {/* Message si pas de données */}
      {recentTransactions.length === 0 && (
        <Alert severity="info" sx={{ borderRadius: 2 }}>
          Aucune transaction récente à afficher
        </Alert>
      )}
    </Box>
  );
}

export default Dashboard;
