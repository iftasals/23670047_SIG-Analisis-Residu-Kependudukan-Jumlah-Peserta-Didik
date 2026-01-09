var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_pemetaanresidukependudukanpesertadidikjenjangsmp_0 = new ol.format.GeoJSON();
var features_pemetaanresidukependudukanpesertadidikjenjangsmp_0 = format_pemetaanresidukependudukanpesertadidikjenjangsmp_0.readFeatures(json_pemetaanresidukependudukanpesertadidikjenjangsmp_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pemetaanresidukependudukanpesertadidikjenjangsmp_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pemetaanresidukependudukanpesertadidikjenjangsmp_0.addFeatures(features_pemetaanresidukependudukanpesertadidikjenjangsmp_0);var lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pemetaanresidukependudukanpesertadidikjenjangsmp_0, 
                style: style_pemetaanresidukependudukanpesertadidikjenjangsmp_0,
    title: 'pemetaan residu kependudukan peserta didik jenjang smp<br />\
    <img src="styles/legend/pemetaanresidukependudukanpesertadidikjenjangsmp_0_0.png" /> Rendah<br />\
    <img src="styles/legend/pemetaanresidukependudukanpesertadidikjenjangsmp_0_1.png" /> Sedang<br />\
    <img src="styles/legend/pemetaanresidukependudukanpesertadidikjenjangsmp_0_2.png" /> Tinggi<br />'
        });var format_smpdemak_hanya_residu_terurut_1 = new ol.format.GeoJSON();
var features_smpdemak_hanya_residu_terurut_1 = format_smpdemak_hanya_residu_terurut_1.readFeatures(json_smpdemak_hanya_residu_terurut_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_smpdemak_hanya_residu_terurut_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_smpdemak_hanya_residu_terurut_1.addFeatures(features_smpdemak_hanya_residu_terurut_1);var lyr_smpdemak_hanya_residu_terurut_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_smpdemak_hanya_residu_terurut_1, 
                style: style_smpdemak_hanya_residu_terurut_1,
                title: '<img src="styles/legend/smpdemak_hanya_residu_terurut_1.png" /> smpdemak_hanya_residu_terurut'
            });

lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0.setVisible(true);lyr_smpdemak_hanya_residu_terurut_1.setVisible(true);
var layersList = [baseLayer,lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0,lyr_smpdemak_hanya_residu_terurut_1];
lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0.set('fieldAliases', {'Kecamatan': 'Kecamatan', 'residu kep': 'residu kep', 'jml pdidik': 'jml pdidik', });
lyr_smpdemak_hanya_residu_terurut_1.set('fieldAliases', {'No': 'No', 'Nama Sekolah': 'Nama Sekolah', 'Longitude (DD)': 'Longitude (DD)', 'Latitude (DD)': 'Latitude (DD)', });
lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0.set('fieldImages', {'Kecamatan': 'TextEdit', 'residu kep': 'TextEdit', 'jml pdidik': 'TextEdit', });
lyr_smpdemak_hanya_residu_terurut_1.set('fieldImages', {'No': 'TextEdit', 'Nama Sekolah': 'TextEdit', 'Longitude (DD)': 'TextEdit', 'Latitude (DD)': 'TextEdit', });
lyr_pemetaanresidukependudukanpesertadidikjenjangsmp_0.set('fieldLabels', {'Kecamatan': 'inline label', 'residu kep': 'inline label', 'jml pdidik': 'no label', });
lyr_smpdemak_hanya_residu_terurut_1.set('fieldLabels', {'No': 'no label', 'Nama Sekolah': 'inline label', 'Longitude (DD)': 'inline label', 'Latitude (DD)': 'header label', });
lyr_smpdemak_hanya_residu_terurut_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});