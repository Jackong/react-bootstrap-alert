import React, {PropTypes} from 'react'
import {Modal, Button} from 'react-bootstrap'
import Actions from './actions'
import Store from './store'

class Alert extends React.Component {
    constructor(props) {
        super(props)
        this.state = Store.getState()
    }
    componentWillMount() {
        super.componentWillMount()
        this.unlisten = Store.listen(this.setState.bind(this))
    }
    componentWillUnmount() {
        super.componentWillUnmount()
        this.unlisten()
    }
    hide() {
        Actions.hide()
    }
    show(message) {
        return Actions.show(message)
    }
    render () {
        return (
            <Modal aria-labelledby='contained-modal-title' bsSize='small' container={this} onHide={this.hide.bind(this)} show={!!this.state.message}>
                <Modal.Header closeButton>
                    <Modal.Title>
                        {this.props.title}
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {this.state.message}
                </Modal.Body>
                <Modal.Footer>
                    <Button autoFocus bsStyle='info' onClick={this.hide.bind(this)}>
                        {this.props.ok}
                    </Button>
                </Modal.Footer>
            </Modal>
        )
    }
}

Alert.Actions = Actions

export default Alert;
