import * as React from 'react'
import * as classNames from 'classnames'
import * as _ from 'lodash'
import * as module from './module'
import {others} from '../../../../common/transmit-transparently/src'
import './index.scss'

export default class Switch extends React.Component<module.PropsInterface, module.StateInterface> {
    static defaultProps: module.PropsInterface = new module.Props()
    public state: module.StateInterface = new module.State()

    constructor(props: any) {
        super(props)
    }

    componentWillMount() {
        let checked = false
        if (this.props.defaultChecked !== null) {
            checked = this.props.defaultChecked
        }
        if (this.props.checked !== null) {
            checked = this.props.checked
        }

        this.state = {
            checked: checked
        }
    }

    componentWillReceiveProps(nextProps:any) {
        if ('checked' in nextProps) {
            this.setState({
                checked: nextProps.checked
            })
        }
    }

    toggle() {
        const checked = !this.state.checked
        this.setState({
            checked: checked
        })
        this.props.onChange(checked)
    }

    render() {
        const {className, disabled} = this.props

        const checked = this.state.checked

        const switchClassName = classNames({
            '_namespace': true,
            [className]: !!className,
            [`checked`]: this.state.checked,
            [`disabled`]: disabled,
            [this.props.type || 'info']: true,
            [`size-${this.props.size || 'normal'}`]: true
        })

        const _others = others(new module.Props(), this.props)

        let Switch = (
            <span {..._others} className={switchClassName}
                              onClick={disabled ? null : this.toggle.bind(this)}>
              <span className={`inner`}>
                {this.state.checked ? this.props.checkedChildrenRender : this.props.unCheckedChildrenRender}
              </span>
            </span>
        )

        if (!_.isEmpty(this.props.label)) {
            Switch = (
                <div className="form-container">
                    <label style={{width:this.props.labelWidth||null}}
                           className="form-control-label">{this.props.label}</label>
                    {Switch}
                </div>
            )
        }

        return Switch
    }
}