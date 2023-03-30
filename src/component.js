import  renderElement  from "./renderer";

class Component {
    constructor() {
        this.state = {}
        this.htmlElement = null;
    }

    setState(newState, callback){
        this.state = {...this.state, ...newState};

        if(typeof callback === 'function'){
            callback()
        }

    }

    getState(){
        return this.state;
    }

    render(){
        throw new Error("Render method must be implemented");
    }

    mount(container) {
        this.htmlElement = renderElement(this.render())

        container.appendChild(this.htmlElement)
    }
}

export default Component;