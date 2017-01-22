function getFood() {
    ba = new Array();
    ca = new Array();
    da = new Array();
    ea = new Array();
    var x = document.getElementById('sliderVal').innerHTML;
    var y = document.getElementById("cuisinename").value;
    var z = document.getElementById("restrictionname").value;

    //var x = 10;
    for (var i = 0, size = barray.length; i < size; i++) {
        var price = barray[i]['price'];
        if (price <= x) {
            ba.push(barray[i])
        }
    }
    //var y = "China";
    for (var i = 0, size = ba.length; i < size; i++) {
        var country = ba[i]['cuisine'];
        if (country == y) {
            ca.push(ba[i])
        }
    }
    //var z = 'vegan';
    for (var i = 0, size = ca.length; i < size; i++) {
        if (ca[i][z] == 1) {
            da.push(ca[i])
        }
    };
    console.log(da);
    document.getElementById("demo").innerHTML = "The dish you should make is: " + da[0]['Dish'] + "!!!";

       







    }