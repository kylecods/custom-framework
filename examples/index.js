import { mountDOM, h, hFragment } from "../dist/roto-fwk.min.js";

mountDOM(hFragment([
    h('h1',{ 
    style: {
        'color': 'red',
        'font-size': '2.5rem',
        'text-align': 'center'
    }
    }, ['HELLO WORLD']), 
    h('p',
    {
        style: {
            'font-weight': 'bold',
            'font-size':'20px',
            'margin':'10px'
        }
    },['Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis auctor in dui quis pellentesque. Quisque suscipit ornare aliquam. Sed molestie nisi et nunc sodales, id gravida ante maximus. Maecenas congue nulla eu neque tincidunt interdum. Quisque vitae dui ex. Duis interdum, urna vitae suscipit pretium, velit magna ultricies nulla, at consequat dolor turpis ut nisl. Nullam porttitor justo mollis, porta eros id, maximus urna. Fusce egestas, massa non hendrerit aliquam, eros purus elementum tellus, sed euismod est est ac libero. Donec facilisis, urna non sagittis mattis, dolor augue suscipit elit, non porttitor enim tortor eu mauris. Sed sit amet nunc massa. Morbi gravida risus nec ultrices porttitor. Praesent viverra felis et aliquet rhoncus. Vivamus scelerisque est massa, vel egestas urna sagittis eget. Vivamus feugiat metus sed mattis luctus'])]),document.body)