// Carousel Script
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
})
// Carousel End

var price, crust_price, topping_price;
let total = 0;
class Orderpizza {
    constructor(name, size, crust, topping, total) {
        this.name = name;
        this.size = size;
        this.crust = crust;
        this.topping = topping;
        this.total = total;
    }
}
$(document).ready(function(){
    $(".jqclick").click(function(){
        $("hide").show();
    });
    $("button.placeorder").click(function(event){
        let pname = $("#flavor option:selected").val();
        let psize = $("#size option:selected").val();
        let pcrust = $("#crust option:selected").val();
        let ptopping = [];
        $.each($("input[name ='pizza-topping']:checked"),function(){
            ptopping.push($(this).val());
        });
        console.log(ptopping,join(","));
        switch(psize){
            case "0":
            price = 0;
            break;
            case "large":
                price = 1200;
                console.log(price);
                break;
                case "medium":
                price = 900;
                console.log("The price is " +price);
                break;
                case "small":
                    price = 500;
                    console.log(price);
                    default:
                        console.log("error");
        }
        switch(pcrust){
            case "0":
                crust_price = 0;
                break;
                case "Gluten Free":
                    crust_price = 200;
                    break;
                    case"Extra Spicy":
                    crust_price = 150;
                    break;
                    case"Stuffed":
                    crust_price = 180;
                    break;
                    default:
                        console.log("No Price");
                    
        }
        let topping_value = ptopping.lenght*100;
        console.log("toppings value" + topping_value);

        if((psize == "0") &&(pcrust == "0")){
            console.log("nothing selected");
            $("button.placeorder").show();
            $("div.order-summary").hide();
            alert("Please select pizza size and crust");
        }
        else{
            $("button.placeorder").hide();
            $("div.order-summary").slideDown(1000);
        }

        total = price + crust_price + topping_value;
        console.log(total);
        let checkoutTotal = 0;
        checkoutTotal = checkoutTotal + total;

        $("#pizzaname").html($("#flavor option:selected").val());
        $("#pizzasize").html($("#size option:selected").val());
        $("#pizzacrust").html($("#crust option:selected").val());
        $("#pizzatopping").html(ptopping.join(", "));
        $("#totals").html(total);

        $("button.addOrder").click(function(){
            let pname = $("#flavor option:selected").val();
            let psize = $("#size option:selected").val();
            let pcrust = $("#crust option:selected").val();
            let ptopping = [];
            $.each($("input[name ='pizza-topping']:checked"),function(){
                ptopping.push($(this).val());
            });
            console.log(ptopping,join(","));
            switch(psize){
                case "0":
                price = 0;
                break;
                case "large":
                    price = 1200;
                    console.log(price);
                    break;
                    case "medium":
                    price = 900;
                    console.log("The price is " +price);
                    break;
                    case "small":
                        price = 500;
                        console.log(price);
                        default:
                            console.log("error");
            }
            switch(pcrust){
                case "0":
                    crust_price = 0;
                    break;
                    case "Gluten Free":
                        crust_price = 200;
                        break;
                        case"Extra Spicy":
                        crust_price = 150;
                        break;
                        case"Stuffed":
                        crust_price = 180;
                        break;
                        default:
                            console.log("No Price");
                        
            }
            let topping_value = ptopping.lenght*100;
            console.log("toppings value" + topping_value);
            total = price +crust_price + topping_value;
            console.log(total);
            
            checkoutTotal = checkoutTotal + total;
            console.log(checkoutTotal);

            var newOrder = new GetPizza(pname, psize, pcrust,ptopping, total);

            
        })
    })

})