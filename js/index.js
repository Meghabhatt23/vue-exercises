new Vue({
    el: '#title',
    data:{
        title: 'VUE-EXERCISE'
    }
})


axios.get("https://api.giphy.com/v1/gifs/search?api_key=K3gAlJaQULRTYIwilUbswxC3L68KNhM7&q=funny&limit=55&offset=0&rating=G&lang=en")
.then((response) => {
    console.log(response);

});
new Vue ({
    el: '#giffy',
    data: {
        gifSearch:""

    }

})
