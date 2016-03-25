import React from 'react'
import classNames from 'classnames'
import _ from 'lodash'
import './index.scss'

function noop() {
}

export default class Switch extends React.Component {
    constructor(props) {
        super(props)

        const _props = this.props
        let checked = false
        if ('checked' in _props) {
            checked = _props.checked
        } else {
            checked = _props.defaultChecked
        }
        this.state = {
            checked: checked
        }
    }

    componentWillReceiveProps(nextProps) {
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
        const {className, disabled, checkedChildren, unCheckedChildren, ...others} = this.props

        const checked = this.state.checked

        const switchClassName = classNames({
            '_namespace': true,
            [className]: !!className,
            [`checked`]: this.state.checked,
            [`disabled`]: disabled,
            [this.props.type || 'info']: true,
            [`size-${this.props.size || 'normal'}`]: true
        })

        let Switch = (
            <span {...others} className={switchClassName}
                              onClick={disabled ? noop : this.toggle.bind(this)}>
              <span className={`inner`}>
                {this.state.checked ? checkedChildren : unCheckedChildren}
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

Switch.defaultProps = {
    style: {},
    checkedChildren: null,
    unCheckedChildren: null,
    className: '',
    defaultChecked: false,
    onChange: noop
}