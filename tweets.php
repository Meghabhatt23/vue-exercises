<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>VUE-EXERCISE</title>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    <link rel="stylesheet" href="css/style.css">
</head>
<body>
    <div id="wrapper">
        <header>
            <h1 id="title"> {{ title }} </h1>
        </header>
    </div> <br />

    <div class="container">

    <div id="tweets-div">
        <div v-for="tweet in tweets" class="PersonBox">
            <div class="tweetbox" style="text-decoration:underline; margin-left:20px; font-size:20px; color:#2a14e4;">
                {{tweet.tweet}}
            </div>
            <div class="tweet-support" style="color:black;">
                <img  :src="tweet.user_img" / style="width:60px; height:60px;">{{tweet.user_name}}, {{tweet.date}} - Likes {{tweet.likes}}
                &nbsp;&nbsp;
                <button class="sm-button">Like</button>
                <button class="sm-button">Delete</button>
            </div>
        </div>
    </div>

    <script type="text/javascript" src="js/vue.js"></script>
    <script "text/javascript" src="js/tweets.js"></script>
</body>
</html>
