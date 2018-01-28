$(document).ready(()=>{
  $(".delete-category").on('click',(e)=>{
    $target = $(e.target);
    console.log($target.attr("delete_cat_id"));
    $.ajax({
      type:'DELETE',
      url:'/manage/categories/delete/'+$target.attr("delete_cat_id"),
      success:(response)=>{
        alert("Category deleted successfully!")
        window.location.href='/manage/categories'
      },
      error:(err)=>{
        console.log(err);
      }
    });
  });
});
