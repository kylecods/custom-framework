export default function h(tag, attributes,events, ...children){
    return {
        tag : tag,
        attributes: attributes,
        children: children,
        events: events
    }
}

