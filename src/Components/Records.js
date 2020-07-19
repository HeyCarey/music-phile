import React, {Component, Fragment} from 'react'
import RecordItem from './RecordItem'
import catalogList from '../catalogList'
import {Grid} from 'semantic-ui-react';

class Records extends Component {
    state = {
        events: catalogList
    }

    render() {
        const {events} = this.state;
        return (
            <Grid>
                <Grid.Column width={15}>
                    {events.map(event => (<RecordItem key={event.id} event={event}/>))}
                </Grid.Column>
            </Grid>

        )
    }
}

export default Records;