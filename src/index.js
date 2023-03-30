import Component from "./component";
import h from "./virtual_node";

class Counter extends Component {
    constructor(){
        super();
        this.state = {count: 0};
    }

    increment() {
        this.setState({count: this.state.count + 1}, () => {
            //re-render the component
            const element = this.htmlElement.querySelector('h1')

            element.textContent = `Count: ${this.getState().count}`
        });


    }
    render() {
        return h('div', {class: 'container'}, null,
         h('h1', null, null,`Count: 0`),
         h('button',null, {
            'click': () => this.increment()
         }, 'Increment')
        );
    }
}

const root = document.getElementById('root')

const counter = new Counter()

counter.mount(root)
