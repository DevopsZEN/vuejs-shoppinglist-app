var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Shopping list app',
        newItem: '',
        items: [
            //'10 Party hats',
            //'2 Board games',
            //'20 Cups'
        ],
    },
    methods: {
        saveItem: function() {
            this.items.push(this.newItem);
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        }
    }
})