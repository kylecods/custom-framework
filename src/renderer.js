export default function renderElement(node) {
    if(typeof node === 'string'){
        return document.createTextNode(node)
    }

    const element = document.createElement(node.tag)

    for(const [key,value] of Object.entries(node.attributes || {})){
        element.setAttribute(key,value)
    }
    for(const child of node.children || []) {
        element.appendChild(renderElement(child))
    }
    
    if(node.events != null) {
        for(const [key,value] of Object.entries(node.events || {})){
            if(typeof value == "function"){
                element.addEventListener(key.toString(), value)
            }
        }
    }
    
    return element
}