import * as React from 'react'
import Switch from '../../src'

const style = {
    marginRight: 10
}

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <div>
                <Switch type="info"
                        checked
                        style={style}/>
                <Switch type="success"
                        checked
                        style={style}/>
                <Switch type="primary"
                        checked
                        style={style}/>
                <Switch type="warning"
                        checked
                        style={style}/>
                <Switch type="danger"
                        checked
                        style={style}/>
                <Switch type="dark"
                        checked
                        style={style}/>
            </div>
        )
    }
}