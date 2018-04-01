$(document).ready(function () {

    //globals
    var characters = [];
    var attk = 0;
    var hp = 0;
    var enemyAttk = 0;
    var enemyHp = 0;
    var anger = 0;
    var enemiesKilled = 0;
    var name = "";
    var enemeyName = "";

    //constructor to create characters
    //NOTE anger = counter attack power
    var char = function (name, attk, hp, anger, image) {
        this.name = name;
        this.attk = attk;
        this.hp = hp;
        this.anger = anger;
    }
    //function to push character object into array
    function addChar(name, attk, hp, anger, image) {
        var c = new char(name, attk, hp, anger, image);
        characters.push(c);
    }
    //creating characters
    addChar("Doomguy", 10, 100, 10, "assets/images/doomguy.jpg");
    addChar("Imp", 16, 70, 13, "assets/images/imp.jpg");
    addChar("Cacodemon", 15, 60, 15, "assets/images/demon.jpg");
    addChar("Arch-Vile", 8, 90, 12, "assets/images/vile.jpg");

    //for loop to appened all characters in the html
    for (var i = 0; i < characters.length; i++) {
        $("#char_" + i).append(characters[i].name + "<br>");

        $("#char_" + i).append("HP: " + characters[i].hp + "<br>");
        $("#char_" + i).append("Rage: " + characters[i].anger + "<br>");
    }


    //adding first click function that will select character and move them to the battle row, the if statement checks values to fill in which side of the battle the click goes to
    //this code is very wet, there has to be a much cleaner way to write this
    $(".container").on("click", "#char_select_0", function () {
        if (attk == 0) {

            $("#char_0").html("");
            attk += characters[0].attk;
            hp += characters[0].hp;
            anger += characters[0].anger;
            name = characters[0].name;


            $("#player").append("<img src='assets/images/doomguy.jpg'>" + "<br>");
            $(".player_char").append("HP: " + characters[0].hp + "<br>");
            $(".player_char").append("Rage: " + characters[0].anger + "<br>");
        } else if (attk != 0) {
            $("#char_0").html("");
            enemyAttk += characters[0].attk;
            enemyHp += characters[0].hp;
            enemeyName = characters[0].name;
            $("#enemey").html("<img src='assets/images/doomguy.jpg'>" + "<br>");
            $(".enemey_char").append("HP: " + characters[0].hp + "<br>");



        }

    });
    $(".container").on("click", "#char_select_1", function () {
        if (attk == 0) {

            $("#char_1").html("");
            attk += characters[1].attk;
            hp += characters[1].hp;
            anger += characters[1].anger;
            name = characters[1].name;
            $("#player").append("<img src='assets/images/imp.jpg'>" + "<br>");
            $(".player_char").append("HP: " + characters[1].hp + "<br>");
            $(".player_char").append("Rage: " + characters[1].anger + "<br>");

        } else if (attk != 0 && enemyAttk == 0) {
            $("#char_1").html("");
            enemyAttk += characters[1].attk;
            enemyHp += characters[1].hp;
            enemeyName = characters[1].name;
            $("#enemey").html("<img src='assets/images/imp.jpg'>" + "<br>");

            $(".enemey_char").append("HP: " + characters[1].hp + "<br>");


        }

    });
    $(".container").on("click", "#char_select_2", function () {
        if (attk == 0) {

            $("#char_2").html("");
            attk += characters[2].attk;
            hp += characters[2].hp;
            anger += characters[2].anger;
            name = characters[2].name;
            $("#player").append("<img src='assets/images/demon.jpg'>" + "<br>");
            $(".player_char").append("HP: " + characters[2].hp + "<br>");
            $(".player_char").append("Rage: " + characters[2].anger + "<br>");

        } else if (attk != 0 && enemyAttk == 0) {
            $("#char_2").html("");
            enemyAttk += characters[2].attk;
            enemyHp += characters[2].hp;
            enemeyName = characters[2].name;
            $("#enemey").html("<img src='assets/images/demon.jpg'>" + "<br>");

            $(".enemey_char").append("HP: " + characters[2].hp + "<br>");



        }

    });
    $(".container").on("click", "#char_select_3", function () {
        if (attk == 0) {

            $("#char_3").html("");
            attk += characters[3].attk;
            hp += characters[3].hp;
            anger += characters[3].anger;
            name = characters[3].name;
            $("#player").append("<img src='assets/images/vile.jpg'>" + "<br>");
            $(".player_char").append("HP: " + characters[3].hp + "<br>");
            $(".player_char").append("Rage: " + characters[3].anger + "<br>");

        } else if (attk != 0 && enemyAttk == 0) {
            $("#char_3").html("");
            enemyAttk += characters[3].attk;
            enemyHp += characters[3].hp;
            enemeyName = characters[3].name;
            $("#enemey").html("<img src='assets/images/vile.jpg'>" + "<br>");

            $(".enemey_char").append("HP: " + characters[3].hp + "<br>");



        }

    });

    //on click function that will progress one round of the fight, subtract hp - attk for both player and enemy, then player attk will increase check if hp is >0 for both player and enemy
    $(".container").on("click", "#fight", function () {

        if (enemyHp > 0 && hp > 0) {
            hp -= enemyAttk;

            enemyHp -= attk;

            $("#update").html(name + " did " + attk + " damage to " + enemeyName + "." + "<br>" + enemeyName + " did " +  enemyAttk + " damage to " + name + "." +  "<br>" + name + "'s rage grows...")
            attk += anger;
            $(".player_char").html("HP: " + hp + "<br>" + "Rage: " + attk + "<br>");
            $(".enemey_char").html("HP: " + enemyHp + "<br>");

        }
        if (enemyHp <= 0 && hp > 0) {
            enemyAttk = 0;
            enemyHp = 0;
            enemiesKilled++;
            attk -= anger;
            $(".enemey_char").html("Pick a new victim")
            if (enemiesKilled == 3) {
                $("#enemey").html("<br>");
                $(".enemey_char").html("<h3>ALL YOUR FOES HAVE BEEN SLAIN</h3>")
                $("#try_again").html("<a href='index.html'><button type='button' class='btn btn-danger' id='try'><strong>TRY AGAIN?</strong></button></a>")

            }

        }
        if (enemiesKilled == 3) {
            $("#enemey").html("<br>");
            $(".enemey_char").html("<h3>ALL YOUR FOES HAVE BEEN SLAIN</h3>")
            $("#try_again").html("<a href='index.html'><button type='button' class='btn btn-danger' id='try'><strong>TRY AGAIN?</strong></button></a>")

        }

        if (hp <= 0 && enemyHp > 0) {
            $(".player_char").html("YOU LOSE");
            $("#try_again").html("<a href='index.html'><button type='button' class='btn btn-danger' id='try'><strong>TRY AGAIN?</strong></button></a>")
        }
        if (hp <= 0 && enemyHp <= 0) {
            $(".player_char").html("DOUBLE");
            $(".enemey_char").html("KILL");
            $("#try_again").html("<a href='index.html'><button type='button' class='btn btn-danger' id='try'><strong>TRY AGAIN?</strong></button></a>")


        }

    });


});