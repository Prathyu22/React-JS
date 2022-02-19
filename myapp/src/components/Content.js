import ListItem from './ListItem'

const Content = () => {
   
    //request API for data
    //const data = "from API"

    const chores = ["item 1", "item 2", "item 3"]
    console.log('I mounted')
    return (
        <div className="container">
            
            {/* {data} */}

            <ul>
                {/*{
                    chores.map(chore => <ListItem chore={chore} chores={chores}/>)
                } */}
                <ListItem chore="I'm something" />
            </ul>
        </div>
    );
}

export default Content;