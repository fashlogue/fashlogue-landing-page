import { connect } from 'react-redux';
import { Home } from '../../components/Home';

const mapStateToProps = (state) => {
  return {
    isLoading: state.isLoading,
  };
};
const mapDispatchToProps = ({ });

export default connect(mapStateToProps, mapDispatchToProps)(Home);