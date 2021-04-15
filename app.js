const app = new Vue ({
    el: '#container',
    data: {
            username: 'Marina',
            age: 0
},

computed:{
    getAge: function() {
    let today = new Date();
    let birthDate = new Date();
    let difference = today - birthDate;
    let age = Math.floor(difference/31557600000);
    return age
    }
}



})