import React, { Component } from 'react'
import { connect } from 'react-redux'
import { continentsDispatcher } from '../../store'
import { Continents } from '.'
import './continents.scss'

export const StateToProps = (state) => ({
    apiData: state
})

export const mapDispatchToProps = (dispatch) => ({
    getApiMethod: () => continentsDispatcher.dispatchContinents(dispatch)
})

/**
 * @class ContinentsContainer
 */
class ContinentsContainer extends Component {

    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
        this.props.getApiMethod()
    }

    containerFunction = {
        dropDownSelectedValue: (event) => this.dropDownSelectedValue(event)
    }

    /**
     * Select continent from dropdown list
     */
    dropDownSelectedValue(event) {
        const { value } = event.target
        const { apiData } = this.props

        this.setState({
            countries: apiData.continentsData.continents.filter(data => {
                return (value === data.name) ? data.countries : ""
            })
        })
    }

    render() {
        const { apiData } = this.props

        return (
            (apiData.length === 0) ? <p>Loading...</p> :
                <Continents
                    {...this.props}
                    {...this.state}
                    {...this.containerFunction}
                />
        )
    }

}

export default connect(StateToProps, mapDispatchToProps)(ContinentsContainer);