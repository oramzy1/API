// $(document).ready(function () {
    
//     $.ajax({
//         type: "get",
//         url: "https://api.chucknorris.io/jokes/random",
//         dataType: "json",
//         success: function (positiveRes) {
//            $("#myImg").attr("src", positiveRes.icon_url);
//            $("#myh1").text(positiveRes.value);
//         //    console.log(positiveRes.icon_url);
           
            
//         },
//         error: function (error) {
//             console.log(error);
//         }
            
//     });

// });

$(document).ready(function () {
    
    $('#myBtn').click(function(){

        let email = $('#email').val()
        let amt = $('#amt').val()

        if(email == "" || amt == ""){
            alert('Please fill all fields')
        }else{
            let paystack = PaystackPop.setup({
                key: 'pk_test_ff06c3c942ac654165e3032ff3e4bc0c49333f23',
                email: email,
                amount: amt * 100,
                callback: function(response){
                    console.log(response);
                    alert('Payment successful');
                    
                },
                onclose: function(){
                    alert('Payment cancelled');
                }
              });
              
              paystack.openIframe();
              
        }
    })


});