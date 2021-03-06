$(document).ready(function(){
  $("#getMap").hide();
  $("#local").hide();
  let cep = ""
  $("#show").click(function(){
    cep = cep.replaceAll("-", "");
    cep = cep.replaceAll(".", "");
    
    $.ajax({ url: `https://cep.awesomeapi.com.br/json/${cep}`})
    .done( (data) => {
      if(cep.length > 0){
        let lat = data.lat;
        let lng = data.lng;
        $("#local").html(data.city + " - " + data.address);
        $("#getMap").attr("src", `https://www.google.com/maps?api=1&q=${lat}%2C${lng}&output=embed`);
        $("#getMap").show();
        $("#local").show(); 
      }else{
        $("#getMap").hide();
        $("#local").hide();
        $("#local").html("");
      }
    })
    .fail((data) => {
      console.log(data)
      $("#getMap").hide();
      $("#local").html("Cep não encontrado!");
      $("#local").show();
    })
   
   
  })
  $("#cep-num").on('input', function(){
    cep = $("#cep-num").val();
    console.log(cep.length)
    if(cep.length == 0){
      $("#getMap").hide();
      $("#local").hide();
      $("#local").html("");
    }
  })


});
