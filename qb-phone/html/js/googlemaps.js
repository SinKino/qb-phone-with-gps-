function Loadgooglemaps(){
    $.post('https://qb-phone/GetGoogleMapsMaps', JSON.stringify({}), function(Jobs){
        $(".googlemaps-list").html("");
        for (const [k, v] of Object.entries(Jobs)) {
            var AddOption = '<div class="googlemaps-class-body-job" >'+'<div class="googlemaps-showitems-other"><i data-action="2" data-x="'+v.Coords[0]+'" data-y="'+v.Coords[1]+'" id="googlemaps-icon-class" class="fas fa-map-marked-alt"></i></div>'+v.label+'</div>'
            $('.googlemaps-list').append(AddOption);
        }
    });
};

$(document).on('click', '#googlemaps-icon-class', function(e){
    e.preventDefault();
    var action = $(this).data('action')
    if(action == 1){
        var job = $(this).data('job')
        var label = $(this).data('label')
        $.post('https://qb-phone/CasinoPhoneGoogleMaps', JSON.stringify({
            action: action,
            job: job,
            label: label,
        }));
    }else if(action == 2){
        var x = $(this).data('x')
        var y = $(this).data('y')
        $.post('https://qb-phone/CasinoPhoneGoogleMaps', JSON.stringify({
            action: action,
            x: x,
            y: y,
        }));
    }
});