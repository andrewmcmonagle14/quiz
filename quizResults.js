window.onload = function () {
    var quizText = "";
    var number = 0;
    var y = 0;
    var nameSel = "";

    for (var i = 0; i < questions.length; i++) {
        quizText += "<p>" + "Question" + (i + 1) + ". " + questions[i] + "</p>";
        for (var x = y; x < (y + 4); x++) {
            quizText += "<input type='radio'  name=" + number + " value=" + i + "> " + radioQuestion[x] + "</br>";

        }
        number++;
        y += 4;
        quizText += "</br>";
    }

    document.getElementById("question").innerHTML = quizText;



}


function myFunction() {
    var result = new Array();
    var place = 0;

    var btns = document.querySelectorAll('input[type="radio"]')
    for (var i = 0; i < btns.length; i++) {

        if (btns[i].checked == true) {
            result[place] = i;
            place++;

        }

    }


    //Show result
    var studentResult = "";
    var student = "Student Name: " + document.getElementById("first").value + "   " + document.getElementById("last").value;

    studentResult += "</br>" + student + "</br></br>";

    //calculate grade
    var total = 0;



    /* Write the HTML code for the event list table */
    var tableHTML = "</br>" + "<table id = 'eventTable' border> ";
    tableHTML += "<tr><th>Question </th><th>Your Answer</th><th>Correct Answer</th></tr>";

    /* Loop through the answers array */
    for (var i = 0; i < answers.length; i++) {
        /* If the event date is within the two-week window, display it on the page */
        if (answers[i] != result[i]) {
            tableHTML += "<tr>";
            tableHTML += "<td>" + (i + 1) + "</td>";
            tableHTML += "<td>" + radioQuestion[result[i]] + "</td>";
            tableHTML += "<td>" + radioQuestion[answers[i]] + "</td>";
            tableHTML += "</tr>";

        }
    }

    for (var i = 0; i < answers.length; i++) {
        /* If the event date is within the two-week window, display it on the page */
        if (answers[i] != result[i]) {
            total++;
        }
    }

    tableHTML += "</table>";

    var grade = ((answers.length - total) / answers.length) * 100;

    //output
    studentResult += "</br>Final grade: " + grade.toFixed(0) + "%</br>" + tableHTML;
    document.getElementById("eventList").innerHTML = studentResult;
}