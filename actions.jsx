import alt from './alt'

class Actions {
    show(message) {
        return new Promise((resolve, reject) => {
            this.dispatch({message: message, resolve: resolve, reject: reject});
        });
    }
    hide() {
        this.dispatch();
    }
}
export default alt.createActions(Actions)
