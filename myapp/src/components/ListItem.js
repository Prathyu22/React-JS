const ListItem = (props) => {
    console.log(props)
    return (
        <li>
        <div>
            {/*Lorem ipsum dolor sit amet consectetur */}
            <p>{props.chore}</p>
        </div>
        <button style={{background: 'crimson', color: "yellow"}} >DELETE </button>
    </li>
    );
}

export default ListItem;