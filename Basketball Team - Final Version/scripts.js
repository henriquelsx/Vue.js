members = [
    {
        fname: null,
        lname: null,
        position: null
    },
    {
  
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
            if(this.newMember.fname && this.newMember.lname && this.newMember.position){
                this.members.push(this.newMember);
                this.newMember = {};
            } else {
                alert("Todos os campos devem ser preenchidos!")
            }
            
        }
    }

};

Vue.createApp(handlingForms).mount('#app');
