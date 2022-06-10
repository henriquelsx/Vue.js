members = [
    {
        fname: 'Kareem',
        lname: 'Abdul-Jabbar',
        position: 'Pivô'
    },
    {
        fname: 'Stephen',
        lname: 'Curry',
        position: 'Armador'
    }
]

const handlingForms = {

    data() {
        return {
            members: window.members,
            newMember: {
            }
        }
    },
    methods: {
        addMember: function(){
            this.members.push(this.newMember);
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
