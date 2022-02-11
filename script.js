$(document).ready(function(){
  $("#getMap").hide();

  $("#show").click(function(){
    let cep = $("#cep-num").val();
    cep = cep.replaceAll("-", "");
    cep = cep.replaceAll(".", "");
    console.log(cep.length)
    if(cep.length == 8){
      $.ajax({ url: `https://cep.awesomeapi.com.br/json/${cep}`})
      .done( (data) => {
        let lat = data.lat;
        let lng = data.lng
        console.log(data);
        $("#local").html(data.city + " - " + data.address);
        $("#getMap").attr("src", `https://www.google.com/maps?api=1&q=${lat}%2C${lng}&output=embed`);
        $("#getMap").show();
      })
      .fail((data) => {
        console.log(data)
      })
   
    }else{
      $("#getMap").hide();
      $("#local").html("");
    }
  })

});
