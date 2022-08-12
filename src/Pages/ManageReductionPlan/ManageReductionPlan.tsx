import { useEffect, useContext } from 'react';
import Grid from '@mui/material/Grid';
import { Appbar } from 'Components';
import ScopeOne, { NIUK as ScopeOneOfNIUK } from './ScopeOne';
import ScopeTwo from './ScopeTwo';
import ScopeThree from './ScopeThree';
import Summary, { NIUK as SummaryOfNIUK } from './Summary';
import { Context } from 'Context';
import { Container } from './style';

const ManageReductionPlan = () => {
  const { setHead, user } = useContext(Context);
  useEffect(() => {
    setHead?.(
      <p
        style={{
          fontFamily: 'Manrope',
          fontWeight: 700,
          fontSize: 22,
        }}
      >
        Carbon Footprint Calculator /{' '}
        <span
          style={{
            color: '#808080',
            fontFamily: 'Manrope',
          }}
        >
          Manage Reduction Plan
        </span>
      </p>,
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    user && (
      <Container>
        <Grid
          item
          xs={12}
          style={{
            textAlign: 'center',
            height: '50px',
            color: 'black',
            fontSize: '30px',
            fontWeight: 'bold',
          }}
        >
          Carbon Footprint Calculator
        </Grid>
        <Appbar
          components={
            user.id === 66
              ? [<Summary />, <ScopeOne />, <ScopeTwo />, <ScopeThree />]
              : user.id === 71
              ? [<SummaryOfNIUK />, <ScopeOneOfNIUK />, <ScopeTwo />]
              : []
          }
          labels={
            user.id === 66
              ? [<>Summary</>, <>Scope 1</>, <>Scope 2</>, <>Scope 3</>]
              : user.id === 71
              ? [<>Summary</>, <>Scope 1</>, <>Scope 2</>]
              : []
          }
        />
      </Container>
    )
  );
};
export default ManageReductionPlan;
