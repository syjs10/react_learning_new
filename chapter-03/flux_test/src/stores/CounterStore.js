import AppDispatcher from '../AppDispatcher.js';
const counterValue = {
    'First': 0,
    'Second':10,
    'Third':30
};

const CounterStore = Object.assign({}, Emitter.prototype, {
    getCounterValues: function() {
        return counterValue;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    },
    removeChangeListener: function(callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});

CounterStore.dispatchToken = AppDispatcher.register((action) => {
    if (action.type === ActionTypes.INCREMENT) {
        counterValue[action.counterCaption] ++;
        CounterStore.emitChange();
    } else if (action.type === ActionTypes.DECREMEMT) {
        counterValue[action.counterCaption] ++;
        CounterStore.emitChange();
    }
});