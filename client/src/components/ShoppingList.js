import React, { useState } from 'react'
import { Container, ListGroup, ListGroupItem, Button } from 'reactstrap'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import uuid from 'uuid'

const ShoppingList = () => {

    const [_items, setItems] = useState([
        {id: uuid(), name: 'Eggs'},
        {id: uuid(), name: 'Milk'},
        {id: uuid(), name: 'Steak'},
        {id: uuid(), name: 'Water'}
    ])
    
    return (
        <Container>
            <Button 
                color='dark'
                style={{marginBottom: '2rem'}}
                onClick={() => {
                    const name = prompt('Enter Item')
                    console.log(_items)
                    if(name) {
                        setItems(prevItem => {
                            return [...prevItem, { id: uuid() , name}]
                        })
                        //setItems([..._items, { id: uuid(), name }])
                    }
                }}
            >
                Add Item
            </Button>

            <ListGroup>
                <TransitionGroup className="shopping-list">
                    {_items.map(({ id, name }) => (
                        <CSSTransition key={id} timeout={500} classNames="fade">
                            <ListGroupItem>
                                <Button className="remove-btn" color="danger" size="sm" onClick={() => {
                                    setItems(_items.filter(item => item.id !== id))
                                }}
                                >
                                 &times;   
                                </Button>
                                {name}
                            </ListGroupItem>
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </ListGroup>
        </Container>
    )
}

export default ShoppingList