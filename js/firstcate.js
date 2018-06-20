$(function(){
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
    var page=1;
    var pageSize=3;
    var totlepage=0;
    getdata(page,pageSize);
    function getdata(page,pageSize){
        $.ajax({
            url:app.baseurl+"/category/queryTopCategoryPaging",
            type:'get',
            data:{
                page:page,
                pageSize:pageSize
            },
            success:function(data){		
                totlepage=Math.ceil(data.total/pageSize);
                console.log(data);
                console.log(data);			
                var str='';
                str+=' <tr>';
                str+='<td>{{id}}</td>';
                str+='<td>{{categoryName}}</td>';
                str+='</tr>';
                var html='';
                for(var i=0;i<data.rows.length;i++){
                    html+=artTemplate(str,data.rows[i]);
                }
                $('#tbody').html(html);
            }
        });
    }
   

    $('#cun').on('click',function(){
        // alert(111)
        var text=$('#text').val();
        if(!$.trim(text)){
            alert('不能为空');
            return;
        }
        // console.log(text);
        $.ajax({
            url:app.baseurl+'/category/addTopCategory',
            type:'post',
            data:{
                categoryName:text
            },
            success:function(data){
                if(data.success){
                    alert('添加成功');
                    window.location.reload();
                }else{
                    alert(data.message)
                }
            }
        });
    });

    $('#down').on('click',function(){
        page--;
        if(page<1){
            page =1;
        }
        getdata(page,pageSize);
    });
    $('#up').on('click',function(){
        page++;
        if(page>totlepage){
            alert('没有更多数据');
            page=totlepage;
        }
        getdata(page,pageSize);
    });
});
