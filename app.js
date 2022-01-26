const container = document.getElementById("app")

//Creates element in the virtual DOM.
//We cannot have multiple render() methods hence we create elements like below.
//Nesting elements.
const content = React.createElement('div',{},
   React.createElement('h1',{},'This is a heading 1')
   React.createElement('p',{}, 'This is a paragraph')
)

ReactDOM.render(content,container)