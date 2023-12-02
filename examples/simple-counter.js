import { h, hFragment, createApp } from "../dist/roto-fwk.mjs";

createApp({
    state: 0,
    reducers: {
        increment: (state, amount) => state + amount,
        decrement: (state, amount) => state - amount
    },
    view: (state, emit) => 

        hFragment([
            h('div',
            {
                style: {
                    'display': 'grid',
                    'font-size': '1.5rem',
                    'text-align': 'center',
                    'justify-content': 'center'
                }
            }, 
            [
                h('h1', {}, [`Count: ${state}`]),
                h('div', 
                {
                    style: {
                        'display': 'flex',
                        'width': '200px',
                        'justify-content': 'space-between'
                    }
                },
                [
                    h(
                        'button',
                        {
                            class:'btn',
                            on: 
                            {
                                click: () => emit('increment',1)
                            }
                        },
                        ['+']
                    ),
                    h(
                        'button',
                        {
                            class:'btn',
                            on: 
                            {
                                click: () => emit('decrement',1)
                            }
                        },
                        ['-']
                    ),
                ]),
                
            ])
        ]),
    
}).mount(document.body)