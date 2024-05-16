import style from './second.module.css';
import logo from '../../logo.svg'
function second( props){
    // console.log(logo)
    return(
        <div>
        <div className={style.card}>
            <img className={style.image} src={logo} alt="profile_img" />
            <h3>{props.name}</h3>
            <h5>Developer</h5>
        </div>
        <div>
            <h1></h1>
        </div>
        </div>
    )

}
second.defaultProps={
    name:"ABC"
  };


export default second;