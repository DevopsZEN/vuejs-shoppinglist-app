var shoppingList = new Vue({
    el: '#shopping-list',
    data: {
        state: 'default',
        header: 'Shopping list app',
        newItem: '',
        items: [
            {
                label: '10 party hats',
                purchased: false
            },
            {
                label: '2 board games',
                purchased: true
            },
            {
                label: '20 cups',
                purchased: false
            }
        ],
    },
    methods: {
        saveItem: function() {
            this.items.push({
                label: this.newItem,
                purchased: false
            });
            this.newItem = '';
        },
        changeState: function(newState) {
            this.state = newState;
            this.newItem = '';
        },
        togglePurchased: function(item) {
            item.purchased = !item.purchased;
        }
    }
})