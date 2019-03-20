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
            <h1 id="title">{{ title }}</h1>
        </header>
    </div> <br /><br />

    <h1 style="text-align:center;"> List of People</h1>
    <div id="people">

        <div v-for="person in people">
        Id = {{person.id}},
        Name =  {{person.name}},
        Age = {{person.age}},
        City = {{person.city}}.
        </div>
    </div>
    <script type="text/javascript" src="js/vue.js"></script>
    <script "text/javascript" src="js/people.js"></script>
</body>
</html>
