const SERVER_URL = 'http://localhost:5000/user/';

export function register(data) {
    var t = call('register', data);
    console.log(t)
    return t
}

function call(path, data) {
    var obj = {};

    $.ajax({
        type: "POST",
        contentType: "application/json",
        url: SERVER_URL + path,
        data: JSON.stringify(data),
        complete: function(data, textStatus) {
            console.log(data, data.status)
            obj.status = data.status;
            
            if(data.status === 200) {
                //token
            } else {
                obj.message = data.responseText;
            }
        },
        dataType: 'json'
    });

    return obj;
}