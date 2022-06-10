const todosApp = {
    data(){
        return{
            todos: [window.todos],
            newTodo: {
                done: false
            }
        }
    },
    methods: {
        addTodo: function(){
            if(this.newTodo.text){
                this.todos.push(this.newTodo);
                this.newTodo = {
                    done: false
                };
            } else {
                alert('Insira algo na área em branco')
            }
        }
    }    
};

Vue.createApp(todosApp).mount('#app');