import './condRend.css'
import Proptypes from 'prop-types';

function condRend(props){

  
  return(
    props.isLogged? <h5 className="welcome-message">Welcome {props.username}</h5>: <h5 className="login-message">Please Login</h5>
  )

}

condRend.propTypes={
    isLogged: Proptypes.bool,
    username: Proptypes.string
}
condRend.defaultProps={
    username:"ABC"
}

export default condRend;