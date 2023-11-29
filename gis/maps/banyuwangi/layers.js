var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_Banuwangi_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Banuwangi",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./banyuwangi/Banuwangi_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12686052.402007, -938874.887967, 12735239.287277, -903726.095457]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_Banuwangi_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_Banuwangi_1];
