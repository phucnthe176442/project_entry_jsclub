module.exports = {
    displayPageSubmission: function (pageStart, pageEnd) {
        let list = "";
        for (let i = pageStart; i < pageEnd+1; i++) {
            list += "<input type='submit' name='btnIndex' value='" + (i + 1) + "'></input>";
        }
        return list;
    },
    submissionsTable: function (submissions, begin, end, isAdmin) {
        let list = "";
        if (isAdmin)
            for (let i = begin; i < end + 1; i++)
                list += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + submissions[i].createAt + "</td><td>" + submissions[i].user_name + "</td><td> <a href='/homepage/tasks/" + submissions[i].slug + "'>" + submissions[i].task_name + "</a></td><td>" + submissions[i].status + "</td></tr>";
        else
            for (let i = begin; i < end + 1; i++)
                list += "<tr><th scope='row'>" + (i + 1) + "</th><td>" + submissions[i].createAt + "</td><td> <a href='/homepage/tasks/" + submissions[i].slug + "'>" + submissions[i].task_name + "</a></td><td>" + submissions[i].status + "</td></tr>";
        return list;
    },
    displayPageTask: function (pageStart, pageEnd) {
        let list = "";
        for (let i = pageStart; i < pageEnd+1; i++) {
            list += "<input type='submit' name='btnIndexTask' value='" + (i + 1) + "'></input>";
        }
        return list;
    },
    tasksTable: function (tasks, begin, end, isAdmin) {
        let list = "";
        if (isAdmin)
            for (let i = begin; i < end + 1; i++) {
                list += "<tr><th scope='row'>" + (i + 1) + "</th><td> <a href='/homepage/tasks/" + tasks[i].slug + "'>" + tasks[i].task_name + "</a></td><td>" + tasks[i].score + "</td>";
                list += "<td><a href='/homepage/tests/" + tasks[i].slug + "/showCreate'><button><i class='fa-regular fa-plus'></i></button></a></td>";
                list += "<td><form method='POST' action='/homepage/tasks/delete'><input type='hidden' name='slug' value=" + tasks[i].slug + "><button type='submit'><i class='fa-solid fa-circle-minus'></i></button></form></td></tr>"
            }
        else
            for (let i = begin; i < end + 1; i++) {
                list += "<tr><th scope='row'>" + (i + 1) + "</th><td> <a href='/homepage/tasks/" + tasks[i].slug + "'>" + tasks[i].task_name + "</a></td><td>" + tasks[i].score + "</td></tr>";
            }
        return list;
    },
}