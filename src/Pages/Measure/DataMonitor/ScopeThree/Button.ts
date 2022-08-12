import { makeStyles } from '@mui/material/styles';

const useStyles = makeStyles(() => ({
  buttonGroup: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: 10,
    margin: '10px 0',
  },
  button: {
    transition: 'color 500ms',
  },
}));

export default useStyles;
