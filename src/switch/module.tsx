import * as React from 'react'

export interface PropsInterface {
    /**
     * 选中状态改变
     */
    onChange?: (checked?: boolean)=>void,

    /**
     * 是否选中
     */
    checked?: boolean

    /**
     * 默认是否选中
     */
    defaultChecked?: boolean

    /**
     * 大小 'normal' | 'small' | 'large'
     */
    size?: string

    /**
     * 主题颜色 'info' | 'success' | 'primary' | 'danger' | 'warning' | 'dark'
     */
        type?: string

    /**
     * 标签文字
     */
    label?: string

    /**
     * 标签文字宽度
     */
    labelWidth?: number

    /**
     * 选中时追加渲染内容
     */
    checkedChildrenRender?: React.ReactElement<any>

    /**
     * 没选中时追加渲染内容
     */
    unCheckedChildrenRender?: React.ReactElement<any>

    [x: string]: any
}

export class Props implements PropsInterface {
    checked: any = null
    defaultChecked: any = null
    onChange = ()=> {
    }
    size = 'normal'
    type = 'info'
    checkedChildrenRender:any = ()=> {
    }
    unCheckedChildrenRender:any = ()=> {
    }
}

export interface StateInterface {
    checked?: boolean
}

export class State implements StateInterface {
    checked = false
}