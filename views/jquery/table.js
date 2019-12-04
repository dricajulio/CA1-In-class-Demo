function draw_table()
{
	$("#results").empty();
	$.getJSONuncached = function (url)
	{
		return $.ajax(
		{
			url: url,
			type: 'GET',
			cache: false,
			success: function (html)
			{
				$("#results").append(html);
				select_row();
			}
		});
	};
	$.getJSONuncached("/get/html")
};

// function created to force price input two have to accept only decimal places
//and alllowing Only decimal. If the user insert a no decimal value, the function will reajust the 
//price for a decimal number
// Reference link http://bit.ly/2PbhGZ6
$(document).ready(function(){
  $('input#pricing').blur(function(){
    var num = parseFloat($(this).val());
    var cleanNum = num.toFixed(2);
    $(this).val(cleanNum);
  });
});

// Validation function created to don't allow empty input inside of the item or inside of the price
// it will generated an alert message, asking the user to entry an item or a price.
//Reference link: http://bit.ly/2PfOxvQ
$(document).submit(function() {
    if($("#i").val()== null || $("#i").val() ==""){
        aler('You must entry an Item:');      
        return false;
    }

    
    if($("#pricing").val()== null || $("#pricing").val() ==""){
        alert('You must entry a price:');      
        return false;
    }
    
});

function select_row()
{
	$("#menuTable tbody tr[id]").click(function ()
	{
		$(".selected").removeClass("selected");
		$(this).addClass("selected");
		var section = $(this).prevAll("tr").children("td[colspan='3']").length - 1;
		var entree = $(this).attr("id") - 1;
		delete_row(section, entree);
	})
};

function delete_row(sec, ent)
{
	$("#delete").click(function ()
	{
		$.ajax(
		{
			url: "/post/delete",
			type: "POST",
			data:
			{
				section: sec,
				entree: ent
			},
			cache: false,
			success: setTimeout(draw_table, 1000)
		})
	})
};

$(document).ready(function ()
{
	draw_table();
});