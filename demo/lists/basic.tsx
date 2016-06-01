import * as React from 'react'
import Switch from '../../src'

export default class Demo extends React.Component <any, any> {
    handleChange(checked:boolean) {
        console.log('基础回调', checked)
    }

    render() {
        return (
            <Switch onChange={this.handleChange.bind(this)}/>
        )
    }
}