ymaps.ready(init);
                
    function init() {
        
        let center = (window.outerWidth >= 510) ? [55.725543, 37.759089] : [55.725573, 37.755375];

        var myMap = new ymaps.Map ('inteco-map', {
            center: center,
            zoom: 16,
            controls: ['zoomControl']
        });

        var myPlacemark = new ymaps.Placemark([55.725569, 37.755015], {
            hintContent: 'ОБЩЕСТВО С ОГРАНИЧЕННОЙ ОТВЕТСТВЕННОСТЬЮ «ИНТЕКО»',
            balloonContent: `
            Москва, Рязанский проспект, 8Ас1 \n
            `
        });
        
        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    }