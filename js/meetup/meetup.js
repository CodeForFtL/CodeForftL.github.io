$(document).ready(function(){
  $title = $('#title');
  $meetup = $('.meetup');
  

 $.ajax({ 
    type:"GET", // GET = requesting data
    url:"https://api.meetup.com/code-for-FTL/events?&sign=true&photo-host=public&page=20", 
    success: function(response) { 
      
   $(response.data).each(function(index, value){
    var getdate = new Date(value.time).toString().substring(0,16);
     var gettime = new Date(value.time).toLocaleTimeString();
     $meetup.append(
       
       "<h3>"+ value.name +"</h3> \
       <div id \='status'\><span>"+"rsvp:"+value.yes_rsvp_count+ "       " + getdate +"        "+gettime+"</span></div> \
        <p id\='description'\>"+value.description + "</p>"
       
       
       );

      console.log(value['description']);

    });
    
    


    
    // $users.append().text(JSON.stringify(data['data'][1]));
     
  //    $users.append().text(JSON.stringify(response));
    //  $('.text').text(JSON.stringify(data)); // Set data that comes back from the server to 'text'
    },
    // error: function()
    dataType: 'jsonp',
  });
  
});