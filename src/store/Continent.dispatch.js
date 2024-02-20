import { selectContinents } from '.'
import { continentsData } from '../query/continentQuery'

export class continentsDispatcher {
    
    dispatchContinents(dispatch) {
        
        fetch('https://countries.trevorblades.com/graphql', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                query: continentsData})
        })
            .then(response => response.json())
            .then(json => {
                dispatch(selectContinents(json.data))
            })

    }

}

export default new continentsDispatcher()



