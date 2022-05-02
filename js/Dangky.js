$(document).ready(function(){
    // Kiểm tra Tên
    function KiemtraName() {
        var re = /^([A-Z]{1}[a-z]+)((\s{1}[A-Z]{1}[a-z]+){1,})$/;
        // var re = /([A-Za-z]+)((\s{1}[A-Za-z]+){1,})$/;
        if ($("#txtName").val() == "") {
        $("#errName").html("* bắt buộc nhập");
        return false;
    }
    if (!re.test($("#txtName").val())) {
        $("#errName").html("* Chữ đầu phải viết hoa");
        return false;
    }
        $("#errName").html("");
        return true;
    }
    $("#txtName").blur(KiemtraName);

    // Kiểm tra Email
    function KiemtraEmail() {
        var re = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        if ($("#txtEmail").val() == "") {
        $("#errEmail").html("* bắt buộc nhập");
        return false;
    }
    if (!re.test($("#txtEmail").val())) {
        $("#errEmail").html("* Email không chính xác");
        return false;
    }
        $("#errEmail").html("");
        return true;
    }
    $("#txtEmail").blur(KiemtraEmail);

    // Kiểm tra Mật khẩu
    function KiemtraPassword() {
        var re =/^(?=.*[A-Za-z])+(?=.*[0-9])(?=.*[#@_-]).{6,}/;
        if ($("#txtPassword").val() == "") {
        $("#errPassword").html("* bắt buộc nhập");
        return false;
    }
    if (!re.test($("#txtPassword").val())) {
        $("#errPassword").html("* Mật khẩu gồm:chữ,số,kí tự và độ dài 6 kí tự trở lên");
        return false;
    }
        $("#errPassword").html("");
        return true;
    }
    $("#txtPassword").blur(KiemtraPassword);

    $("#btn-SignUp").click(function() {
        if(KiemtraName()==true && KiemtraEmail()==true && KiemtraPassword()==true){
            alert("Tài khoản của quý khách đăng kí thành công");
        }
    })
})
