import React from 'react'
import Aux from '../../hoc/Aax'


const layout = (props) => (
    <Aux>
        <div>toolbar, header</div>
        <main>{props.children}</main>
    </Aux>
)
export default layout