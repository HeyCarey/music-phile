import React, {Component } from 'react'
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
            <Grid textAlign='left' verticalAlign='middle' style={{ padding: '2em 0em' }}>
            <Grid.Column style={{ maxWidth: 1200 }}>
                {events.map(event => (<RecordItem key={event.id} event={event}/>))}
            </Grid.Column>
            </Grid>

        )
    }
}

export default Records;