$(function(){
    // alert(222)
    $('#login').on('click',function(){
        var formdata=$('#userForm').formtodata();

        console.log(formdata);
        if(!$.trim(formdata.username)){
            alert('用户名为空');
            return;
        }
        if(!$.trim(formdata.password)){
            alert('密码为空');
            return;
        }
        $.ajax({
            type:'post',
            url:`${app.baseurl}/employee/employeeLogin`,
            data:formdata,
            success:function(data){
                console.log(data);
                if(data.success){
                    alert('登陆成功');
                    window.location.href="user.html";
                }else{
                    alert(data.message);
                }
            }
        });
    });
});