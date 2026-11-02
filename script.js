
$(document).ready(function() {

    console.log("jQuery is ready!");

    $("h1").css("color", "#0d6efd");

    $(".name").css("font-weight", "bold");

    $("#greeting").text("Welcome to My Personal Portfolio!");

    $("#changeGreeting").click(function() {
        $("#greeting").text("Hello! Thanks for Visiting My Portfolio!");
    });

    $("#changeHeadline").click(function() {
        $("#headline").html("Future <strong>Software Developer</strong>");
    });

    $("#lightTheme").click(function() {
        $("body").removeClass("dark-mode");
    });

    $("#darkTheme").click(function() {
        $("body").addClass("dark-mode");
    });

    $("#hideAbout").click(function() {
        $("#aboutDetails").hide(500);
    });

    $("#showAbout").click(function() {
        $("#aboutDetails").show(500);
    });

    $("#toggleAbout").click(function() {
        $("#aboutDetails").toggle(500);
    });

    $("#fadeInImages").click(function() {
        $(".gallery-image").fadeIn(700);
    });

    $("#fadeOutImages").click(function() {
        $(".gallery-image").fadeOut(700);
    });

    $("#fadeToggleImages").click(function() {
        $(".gallery-image").fadeToggle(700);
    });

    $(".favorite-heading").click(function() {
        $(this).next(".favorite-content").slideToggle(400);
    });

    $("#openAllPanels").click(function() {
        $(".favorite-content").slideDown(400);
    });

    $("#closeAllPanels").click(function() {
        $(".favorite-content").slideUp(400);
    });

    $("#addSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            $("#skillsList").append("<li class='list-group-item'></li>").children().last().text(skill);
            $("#skillInput").val("");
        }
    });

    $("#prependSkill").click(function() {
        let skill = $("#skillInput").val().trim();

        if (skill !== "") {
            let newSkill = $("<li class='list-group-item'></li>").text(skill);
            $("#skillsList").prepend(newSkill);
            $("#skillInput").val("");
        }
    });

    $("#removeSkill").click(function() {
        $("#skillsList li").last().remove();
    });

    $("#changeLink").click(function() {
        let currentLink = $("#socialLink").attr("href");

        if (currentLink === "https://github.com/") {
            $("#socialLink").attr("href", "https://www.linkedin.com/");
            $("#socialLink").text("LinkedIn");
        } else {
            $("#socialLink").attr("href", "https://github.com/");
            $("#socialLink").text("GitHub");
        }
    });

    $("#userName").on("input", function() {
        let name = $(this).val();

        if (name.trim() === "") {
            $("#nameOutput").text("Not entered yet");
        } else {
            $("#nameOutput").text(name);
        }
    });

    $("#userEmail").on("input", function() {
        let email = $(this).val();

        if (email.trim() === "") {
            $("#emailOutput").text("Not entered yet");
        } else {
            $("#emailOutput").text(email);
        }
    });

    let skillsAnimated = false;

    $("#animateSkills").click(function() {

        if (!skillsAnimated) {
            $("#htmlBar").stop().animate({ width: "90%" }, 1000);
            $("#cssBar").stop().animate({ width: "75%" }, 1000);
            $("#jsBar").stop().animate({ width: "60%" }, 1000);

            $(this).text("Reset Skills");
            skillsAnimated = true;

        } else {
            $(".skill-bar").stop().animate({ width: "0%" }, 1000);

            $(this).text("Animate My Skills");
            skillsAnimated = false;
        }

    });

});
