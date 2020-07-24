import React, {Component} from 'react'
import {Segment, Form, Button, Grid} from 'semantic-ui-react';
import cuid from 'cuid';
import catalogList from '../catalogList'

class Input extends Component {
    constructor(props) {
        super(props);
        this.state = {
            catalog: catalogList
        };

        this.handleChange = this
            .handleChange
            .bind(this);
        this.handleSubmit = this
            .handleSubmit
            .bind(this);
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });
    };

    handleCatalog = (newRecord) => {
        newRecord.id = cuid();
        this.setState({
            catalog: [
                ...this.state.catalog,
                newRecord
            ]
        })
    };

    handleSubmit = (e) => {
        e.preventDefault();
        const {
        title,
        date,
        location,
        description,
        equipment,
        file,
        musician,
        } = this.state;
        const newRecord = {
        title,
        date,
        location,
        description,
        equipment,
        file,
        musician,
        };
        this.handleCatalog(newRecord);
        };

    render() {
        const {
            title,
            date,
            location,
            description,
            equipment,
            file,
            musician
        } = this.state;

        return (
            <Grid
                textAlign='left'
                style={{
                padding: '2em 0em'
            }}>
                <Grid.Column style={{
                    maxWidth: 1200
                }}>
                    <Segment>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Field>
                                <label>Song Title</label>
                                <input
                                    name='title'
                                    onChange={this.handleChange}
                                    value={title}
                                    placeholder='Song Title'/>
                            </Form.Field>
                            <Button color="teal">
                                Add Media
                            </Button>
                            <Form.Field>
                                <label>Creation Date</label>
                                <input
                                    name='date'
                                    onChange={this.handleChange}
                                    value={date}
                                    type="date"
                                    placeholder="Event Date"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Location</label>
                                <input
                                    name='location'
                                    onChange={this.handleChange}
                                    value={location}
                                    placeholder="Location of Recording"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Equipment Used To Record</label>
                                <input
                                    name='equipment'
                                    onChange={this.handleChange}
                                    value={equipment}
                                    placeholder="Equipment Used To Record"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Description</label>
                                <input
                                    name='description'
                                    onChange={this.handleChange}
                                    value={description}
                                    placeholder="Description"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Musicians</label>
                                <input
                                    name='musicians'
                                    onChange={this.handleChange}
                                    value={musician}
                                    placeholder="What musicians were involved"/>
                            </Form.Field>
                            <Form.Field>
                                <label>Digital File Path</label>
                                <input
                                    name='file'
                                    onChange={this.handleChange}
                                    value={file}
                                    placeholder="What musicians were involved"/>
                            </Form.Field>
                            <Button positive type="submit">
                                Submit
                            </Button>
                            <Button type="button">Cancel</Button>
                        </Form>
                    </Segment>
                </Grid.Column>
            </Grid>
        )
    }
}
    export default Input;