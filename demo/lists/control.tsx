import * as React from 'react'
import Switch from '../../src'

const style = {
    marginRight: 10
}

export default class Demo extends React.Component <any ,any> {
    render() {
        return (
            <div>
                <Switch checked={true}
                        style={style}/>
                <Switch disabled={true}
                        style={style}/>
            </div>
        )
    }
}