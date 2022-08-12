import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Container } from './Billing.style';
const Scope1Com = () => {
  const card = [
    {
      icon: 'far fa-credit-card',
      title: 'Billing Account',
      label: 'Your Billing Account Information',
      to: 'account',
    },
    {
      icon: 'fas fa-file-invoice-dollar',
      title: 'Invoiced billing account',
      label: 'Manage your organization',
      to: 'org',
    },
    {
      icon: 'fas fa-receipt',
      title: 'Payment',
      label: 'Check your receipts and transaction',
      to: 'payment',
    },
  ];

  return (
    <div>
      <Box sx={{ width: '100%' }}>
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {card.map((item) => (
            <Grid item xs={6} md={6}>
              <Link to={item.to}>
                <Container onClick={(item as any).onClick}>
                  <i className={[item.icon, 'icon'].join(' ')}></i>
                  <br />
                  <span className={'Adminlectxt'}> {item.title}</span>
                  <hr />
                  <span className={'Adminlectxt1'}>{item.label}</span>
                </Container>
              </Link>
            </Grid>
          ))}
        </Grid>
      </Box>
    </div>
  );
};

export default Scope1Com;
