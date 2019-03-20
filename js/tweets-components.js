var tweets = [
{ id: "1", user_name: "Mosa A", tweet: "This is my first Tweet" , date: "Mon Dec 23, 2018" , likes: "5", user_img: "https://media1.giphy.com/media/SggILpMXO7Xt6/200w.gif"},
{ id: "2", user_name: "Rachel S", tweet: "This is my second Tweet", date: "Tuesday Dec 24, 2018" , likes: "11", user_img: "https://media0.giphy.com/media/W3loHG5HUanvi/source.gif"},
{ id: "3", user_name: "Megha B", tweet: "This is my Third Tweet", date: "Tuesday Dec 25, 2018" , likes: "71", user_img: "https://cdn-images-1.medium.com/max/1600/1*k3UIuPWgN2cWke-HdXqWQQ.gif"},
{ id: "4", user_name: "Bushra C", tweet: "This is my Fourth Tweet", date: "Tuesday Dec 26, 2018" , likes: "21", user_img: "https://media.giphy.com/media/26tkmH4VvEh4m0jiU/giphy.gif"},
{ id: "5", user_name: "Brittany KK", tweet: "This is my fifth Tweet", date: "Tuesday Dec 27, 2018" , likes: "31", user_img: "https://i.pinimg.com/originals/16/ab/7a/16ab7a13d24a9a7950dcaef23c7a129a.gif"},

];
new Vue({
    el: '#title',
    data:{
        title: 'tweeter',
    }
})
new Vue({
    el: '#tweets-div',
    data:{
        tweet: {
        "1"  :  { id: "1", user_name: "Mosa A", tweet: "This is my first Tweet" , date: "Mon Dec 23, 2018" , likes: "5", user_img: "https://media1.giphy.com/media/SggILpMXO7Xt6/200w.gif"},
        "2"  :  { id: "2", user_name: "Rachel S", tweet: "This is my second Tweet", date: "Tuesday Dec 24, 2018" , likes: "11", user_img: "https://media0.giphy.com/media/W3loHG5HUanvi/source.gif"},
        "3"  :  { id: "3", user_name: "Megha B", tweet: "This is my Third Tweet", date: "Tuesday Dec 25, 2018" , likes: "71", user_img: "https://cdn-images-1.medium.com/max/1600/1*k3UIuPWgN2cWke-HdXqWQQ.gif"},
        "4"  :  { id: "4", user_name: "Bushra C", tweet: "This is my Fourth Tweet", date: "Tuesday Dec 26, 2018" , likes: "21", user_img: "https://media.giphy.com/media/26tkmH4VvEh4m0jiU/giphy.gif"},
        "5"  :  { id: "5", user_name: "Brittany KK", tweet: "This is my fifth Tweet", date: "Tuesday Dec 27, 2018" , likes: "31", user_img: "https://i.pinimg.com/originals/16/ab/7a/16ab7a13d24a9a7950dcaef23c7a129a.gif"},

    }

    }

    })
