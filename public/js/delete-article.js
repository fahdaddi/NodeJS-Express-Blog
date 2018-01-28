$(document).ready(()=>{
  $('.remove-article').on('click',(e)=>{
    $target = $(e.target);
    $.ajax({
      type:'DELETE',
      url:'/manage/articles/delete/'+$target.attr('article_id'),
      success: (response)=>{
        alert('delleted article');
        window.location.href="/";
      },
      error: (err)=>{
        console.log(err);
      }
    });
  });
});
