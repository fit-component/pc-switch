import * as React from 'react'
import Switch from '../../src'

export default class Demo extends React.Component <any, any> {
    render() {
        return (
            <Switch label="我喜欢Fit"
                    labelWidth={100}/>
        )
    }
}