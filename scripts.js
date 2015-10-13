/**
 * Created by session1 on 10/9/15.
 */
google.setOnLoadCallback(drawRegionsMap);

function drawRegionsMap() {

    var data = google.visualization.arrayToDataTable([
        ['provinces', 'Firearms'],
        ['AZ', 7610],
        ['AL', 5891],
        ['AK', 714],
        ['AR', 933],
        ['CA', 34890],
        ['CO', 3389],
        ['CT', 1830],
        ['DE', 949],
        ['DC', 1345],
        ['FL', 19592],
        ['GA', 11241],
        ['HI', 128],
        ['ID', 834],
        ['IL', 11568],
        ['IN', 5587],
        ['IA', 1461],
        ['KS', 2248],
        ['KY', 3165],
        ['LA', 7213],
        ['ME', 316],
        ['MD', 7706],
        ['MA', 1538],
        ['MI', 6024],
        ['MN', 2429],
        ['MS', 2639],
        ['MO', 4976],
        ['MT', 469],
        ['NE', 1104],
        ['NV', 3165],
        ['NH', 256],
        ['NJ', 3994],
        ['NM', 1644],
        ['NY', 7686],
        ['NC', 10743],
        ['ND', 1308],
        ['OH', 10333],
        ['OK', 1485],
        ['OR', 3812],
        ['PA', 8929],
        ['RI', 436],
        ['SC', 4067],
        ['SD', 252],
        ['TN', 5839],
        ['TX', 15977],
        ['UT', 1110],
        ['VT', 161],
        ['VA', 7129],
        ['WA', 3706],
        ['WV', 933],
        ['WI', 3684],
        ['WY', 224],
        ['PR', 1261],
        ['VI',135]


    ]);

    var options = {
        resolution: 'provinces',
        region: 'US',
        backgroundColor: '#297592'
    };

    var chart = new google.visualization.GeoChart(document.getElementById('regions_div'));

    chart.draw(data, options);
}

google.setOnLoadCallback(drawChart);
function drawChart() {

    var data = google.visualization.arrayToDataTable([
        ['Firearm Type', 'Number of Firearms'],
        ['Pistol', 4260],
        ['Revolver', 1057],
        ['Rifle', 1400],
        ['Shotgun', 786],
        ['Derringer', 56],
        ['Machinegun', 20],
        ['Reciever/Frame', 11],
        ['Combination Gun', 5],
        ['Unknown Type', 9],
        ['Any Other Weapon', 2]
    ]);

    var options = {
        title: 'Firearm Types in Arizona',
        slices: {
            0: {offset: 0.05},
            1: {offset: 0.2},
            2: {offset: 0.2},
            3: {offset: 0.2},
            4: {offset: 0.2},
            5: {offset: 0.2},
            6: {offset: 0.2},
            7: {offset: 0.2},
            8: {offset: 0.2},
            9: {offset: 0.2},
        },
        is3D: true,
        backgroundColor: '#32e688'
    };

    var chart = new google.visualization.PieChart(document.getElementById('piechart'));

    chart.draw(data, options);
}