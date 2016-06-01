import * as React from 'react'
import Switch from '../../src'

const style = {
    marginRight: 10
}

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <div>
                <Switch type="success"
                        size="small"
                        checked
                        style={style}/>
                <Switch checked
                        style={style}/>
                <Switch type="primary"
                        size="large"
                        checked
                        style={style}/>
            </div>
        )
    }
}