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
var lyr_sumberrejo_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "sumber rejo",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./sumberrejo/sumberrejo_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [12710178.164267, -900725.614532, 12721966.693479, -892318.643938]
                            })
                        });

lyr_OpenStreetMap_0.setVisible(true);lyr_sumberrejo_1.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_sumberrejo_1];
