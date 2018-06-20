$.ajax({
    type:'get',
    async:false,
    url:app.baseurl+'/employee/checkRootLogin',
    success:function(data){
        console.log(data);
        if(!data.success){
            window.location.href="login.html";
        }
    }
});
$(function(){
   $.ajax({
       url:app.baseurl+'/user/queryUser',
       type:'get',
       data:{
        page:1,
        pageSize:50
       },
       success:function(data){
            console.log(data);					
            var str='';
            str+='<tr>';
            str+='<td>{{username}}</td>';
            str+='<td>{{mobile}}</td>';
            str+='<td>{{isDelete==1?"启用":"禁用"}}</td>';
            str+='<td>';
            str+='<button type="button" class="btn status {{isDelete==1?"btn-danger":"btn-success"}}" data-id={{id}} data-isdelete={{isDelete}}> {{isDelete==1?"禁用":"启用"}}</button>';
            str+='</td>';
            str+='</tr>';
            var html='';
            for(var i=0;i<data.rows.length;i++){
                html+=artTemplate(str,data.rows[i]);
            }
            $('#contentbox').append(html);
       },error:function(){
        //    console.log('网络所悟');
       }

   });
   $('#contentbox').on('click','.status',function(){
        var id=$(this).data('id');
        var isDelete=$(this).data('isdelete');
        console.log(isDelete);
        $.ajax({
            type:'post',
            url:app.baseurl+'/user/updateUser',
            data:{
                id:id,
                isDelete:isDelete==1?0:1
            },
            success:function(data){
                // console.log(data);
                if(data.success){
                    location.reload();
                }else{
                    alert(data.message);
                }
            }
        })
   })
});