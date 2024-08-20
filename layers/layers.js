var wms_layers = [];


        var lyr_OSM_0 = new ol.layer.Tile({
            'title': 'OSM',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_CountyCouncils_1 = new ol.format.GeoJSON();
var features_CountyCouncils_1 = format_CountyCouncils_1.readFeatures(json_CountyCouncils_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CountyCouncils_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CountyCouncils_1.addFeatures(features_CountyCouncils_1);
var lyr_CountyCouncils_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CountyCouncils_1, 
                style: style_CountyCouncils_1,
                popuplayertitle: "County Councils",
                interactive: false,
                title: '<img src="styles/legend/CountyCouncils_1.png" /> County Councils'
            });
var format_InClassActivities_2 = new ol.format.GeoJSON();
var features_InClassActivities_2 = format_InClassActivities_2.readFeatures(json_InClassActivities_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_InClassActivities_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_InClassActivities_2.addFeatures(features_InClassActivities_2);
var lyr_InClassActivities_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_InClassActivities_2, 
                style: style_InClassActivities_2,
                popuplayertitle: "In-Class Activities",
                interactive: false,
                title: '<img src="styles/legend/InClassActivities_2.png" /> In-Class Activities'
            });

lyr_OSM_0.setVisible(true);lyr_CountyCouncils_1.setVisible(true);lyr_InClassActivities_2.setVisible(true);
var layersList = [lyr_OSM_0,lyr_CountyCouncils_1,lyr_InClassActivities_2];
lyr_CountyCouncils_1.set('fieldAliases', {'CO_ID': 'CO_ID', 'ENGLISH': 'ENGLISH', 'GAEILGE': 'GAEILGE', 'LOGAINM_ID': 'LOGAINM_ID', 'GUID': 'GUID', 'CONTAE': 'CONTAE', 'COUNTY': 'COUNTY', 'PROVINCE': 'PROVINCE', 'CENTROID_X': 'CENTROID_X', 'CENTROID_Y': 'CENTROID_Y', 'AREA': 'AREA', 'ESRI_OID': 'ESRI_OID', 'view': 'view', });
lyr_InClassActivities_2.set('fieldAliases', {'id': 'id', 'location': 'location', });
lyr_CountyCouncils_1.set('fieldImages', {'CO_ID': 'TextEdit', 'ENGLISH': 'TextEdit', 'GAEILGE': 'TextEdit', 'LOGAINM_ID': 'TextEdit', 'GUID': 'TextEdit', 'CONTAE': 'TextEdit', 'COUNTY': 'TextEdit', 'PROVINCE': 'TextEdit', 'CENTROID_X': 'TextEdit', 'CENTROID_Y': 'TextEdit', 'AREA': 'TextEdit', 'ESRI_OID': 'TextEdit', 'view': 'TextEdit', });
lyr_InClassActivities_2.set('fieldImages', {'id': 'TextEdit', 'location': 'TextEdit', });
lyr_CountyCouncils_1.set('fieldLabels', {'CO_ID': 'no label', 'ENGLISH': 'no label', 'GAEILGE': 'no label', 'LOGAINM_ID': 'no label', 'GUID': 'no label', 'CONTAE': 'no label', 'COUNTY': 'no label', 'PROVINCE': 'no label', 'CENTROID_X': 'no label', 'CENTROID_Y': 'no label', 'AREA': 'no label', 'ESRI_OID': 'no label', 'view': 'no label', });
lyr_InClassActivities_2.set('fieldLabels', {'id': 'no label', 'location': 'no label', });
lyr_InClassActivities_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});