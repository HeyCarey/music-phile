import React, {Component} from 'react'
import {Segment, Form, Button, Grid} from 'semantic-ui-react';

class EventForm extends Component {
    state = {
        title: '',
        date: '',
        city: '',
        venue: '',
        hostedBy: ''
    };

    handleFormSubmit = (evt) => {
        evt.preventDefault();
        this.props.createEvent(this.state);
    }

    handleInputChange = ({target: {name, value}}) => {
        this.setState({
            [name]: value
        });
    }

    render() {
        const {cancelFormOpen} = this.props;
        const {title, date, city, venue, hostedBy} = this.state;

        return (
            <Grid textAlign='left' style={{ padding: '2em 0em' }}>
            <Grid.Column style={{ maxWidth: 1200 }}>
            <Segment>
                <Form onSubmit={this.handleFormSubmit}>
                    <Form.Field>
                        <label>Song Title</label>
                        <input
                            name='title'
                            onChange={this.handleInputChange}
                            value={title}
                            placeholder='Song Title'/>
                    </Form.Field>
                    <Form.Field>
                        <label>Creation Date</label>
                        <input
                            name='date'
                            onChange={this.handleInputChange}
                            value={date}
                            type="date"
                            placeholder="Event Date"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Location</label>
                        <input
                            name='city'
                            onChange={this.handleInputChange}
                            value={city}
                            placeholder="Location of Recording"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Equipment Used To Record</label>
                        <input
                            name='venue'
                            onChange={this.handleInputChange}
                            value={venue}
                            placeholder="Equipment Used To Record"/>
                    </Form.Field>
                    <Form.Field>
                        <label>Musicians</label>
                        <input
                            name='hostedBy'
                            onChange={this.handleInputChange}
                            value={hostedBy}
                            placeholder="What musicians were involved"/>
                    </Form.Field>
                    <Button positive type="submit">
                        Submit
                    </Button>
                    <Button onClick={cancelFormOpen} type="button">Cancel</Button>
                </Form>
            </Segment>
            </Grid.Column>
            </Grid>
        )
    }
}

export default EventForm;