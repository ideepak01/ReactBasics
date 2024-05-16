import PropTypes from 'prop-types';

function listProps(props){

    const itemList = props.item.map(item=> <li key={item.id}>{item.name}</li>)

    return(<>
        <p>{props.category}</p>
        <ol>{itemList}</ol>
        </>
    )
}
listProps.propTypes={
    category:PropTypes.string,
    item:PropTypes.array
}
listProps.defaultProps={
    category:"Category",
    item:[]
}

export default listProps;