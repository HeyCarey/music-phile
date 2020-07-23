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
                                <Item.Description>
                                    {`Equipment used to record: ${event.equipment}`}
                                </Item.Description>
                                <Item.Description>
                                    {`Digital File: ${event.file}`}
                                </Item.Description>
                            </Item.Content>
                        </Item>
                    </Item.Group>
                </Segment>
                <Segment>
                    <span>
                        <Icon name="clock"/>
                        {`Recorded on: ${event.date}`} |
                        <Icon name="marker"/>
                        {`Recorded at: ${event.location}`}
                    </span>
                </Segment>
                
                <Segment clearing>
                <span>{`Description: ${event.description}`}</span>
                    <Button as="a" color="teal" floated="right" content="View"/>
                </Segment>
            </Segment.Group>


        )
    }
}

export default RecordItem;