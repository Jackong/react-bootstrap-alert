import alt from './alt'
import Actions from './actions'

class Alert {
    constructor() {
        this.message = null
        this.resolve = null
        this.reject = null
        this.bindActions(Actions)
    }
    onShow(data) {
        this.message = data.message
        this.resolve = data.resolve
        this.reject = data.reject
    }
    onHide() {
        this.message = null
        this.resolve = null
        this.reject = null
    }
}

export default alt.createStore(Alert)
