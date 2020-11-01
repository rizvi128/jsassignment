function tinyFriend(name){
    var tinyName = name[0];
    for (var i = 0; i < name.length; i++) {
        var checkName = name[i];
        if (checkName.length < tinyName.length) {
            tinyName = checkName;

        }
    }
    return tinyName;

}
var allName = tinyFriend(['jamil', 'araf', 'islam', 'rizvi', 'udoy', 'shakil']);
console.log(allName);