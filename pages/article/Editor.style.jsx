/*编辑器输出样式*/
import {makeStyles} from "@material-ui/core/styles";


export default makeStyles((theme) => ({
  root: {
    width: '100%',
    whiteSpace: 'pre-wrap',
    fontFamily: 'Rubik-Regular-kern-latin',
    letterSpacing: '1px',
    '& a': {
      wordBreak: 'break-word',
    },
    '& ul': {
      marginLeft: 10
    },
    '& blockquote': {
      margin: '0 0 10px',
      padding: '15px 20px',
      backgroundColor: '#f1f2f3',
      borderLeft: '5px solid #ccc',
      color: '#666',
      fontStyle: 'italic'
    },
    '& .image-wrap': {
      '& img': {
        width: 'auto',
        height: 'auto',
        maxWidth: '100%',
        maxHeight: '100%'
      }
    }
  },
  emoji: {
    '& .braft-emoticon-wrap > img': {
      width: '20px'
    }
  },
  table: {
    '&  table': {
      tableLayout: 'fixed',
      width: '100%',
      borderCollapse: 'collapse',
      boxShadow: '0 0 0 1px #dfdfdf',
    },
    '&  td': {
      padding: '20px',
      letterSpacing: '1px',
      textAlign: 'center',
      [theme.breakpoints.down('sm')]: {
        padding: '10px',
      },
    },
    '&  tr:nth-child(even) > td:nth-child(even)': {
      background: '#F6F8FC'
    },
    '&  tr:nth-child(odd) > td:nth-child(odd)': {
      background: '#F6F8FC'
    }
  },
}));
