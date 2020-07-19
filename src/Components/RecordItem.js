import React, {Component} from 'react'
import {Segment, Item, Icon, Button} from 'semantic-ui-react';


class RecordItem extends Component {
    render() {
        const {event} = this.props;

        return (
            <Segment.Group>
                <Segment>
                    <Item.Group>
                        <Item>

                            <Item.Content>
                                <Item.Header>{event.title}</Item.Header>
                                <Item.Description>
                                    {`Created by ${event.musician}`}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock"/>
                        {event.date} |
                        <Icon name="marker"/>
                        {event.venue}
                    </span>
                </Segment>
                
                <Segment clearing>
                <span>{event.description}</span>
                    <Button as="a" color="teal" floated="right" content="View"/>
                </Segment>
            </Segment.Group>
        )
    }
}

export default RecordItem;