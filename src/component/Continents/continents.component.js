import React, { Component } from 'react'
import './continents.scss'

/**
 * @class Continents
 */
class Continents extends Component {

    /**
     * returns dropdown list
     * @returns { Dom }
     */
    dropDownContinents() {
        const { dropDownSelectedValue } = this.props

        return (
            <select onChange={(event) => { dropDownSelectedValue(event) } } className='selectDropdown'>
                <option>select continent</option>
                {this.props.apiData.continentsData.continents.map(data => {
                    return (
                        <>
                            <option id="seleced-value" key={data.code} value={data.name}>
                                {data.name}
                            </option>
                        </>
                    )
                })}
            </select>
        )
    }

    continentDetails() {
        const { countries } = this.props

        console.log(countries)
        return (
            (countries.length === 0) ? '' :
                <table className='tableBox'>
                    <thead className='table-head'>
                        <tr>
                            <th className='s-no'>S.No</th>
                            <th className='countries'>Countries</th>
                            <th className='code'>Code </th>
                            <th className='capital'> Capital </th>
                            <th className='currency'> Currency </th>
                            <th className='phone'> Phone </th>
                            <th className='flagpic'> Flag </th>
                        </tr>
                    </thead>
                    {countries[0].countries.map((data, i) => {
                        return (
                            <tbody className='table-body'>
                                <tr key={i}>
                                    <td className='s-no'>{i+1}</td>
                                    <td className='countries'>{data.name}</td>
                                    <td className='code'>{data.code}</td>
                                    <td className='capital'>{data.capital}</td>
                                    <td className='currency'>{data.currency}</td>
                                    <td className='phone'>{data.phone}</td>
                                    <td className='flagpic'>{data.emoji}</td>
                                </tr>
                            </tbody>
                        )
                    })}
                </table>
        )
    }

    render() {
        return (
            <>
                <h1>GraphQl Task</h1>
                <div className='dropdownBox'> 
                    {this.dropDownContinents()}
                </div>
                <div className='table-container'>
                    {this.continentDetails()}
                </div>  
            </>
        );
    }
}

export default Continents;