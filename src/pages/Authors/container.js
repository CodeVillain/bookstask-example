import { connect } from 'react-redux';

import Component from './component';

const mapStateToProps = ({ authors }) => ({
  authors
});

export default connect(mapStateToProps)(Component);
