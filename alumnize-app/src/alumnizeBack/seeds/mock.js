exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mock').del()
    .then(function () {
      // Inserts seed entries
      return knex('mock').insert([
        {"id":1,"company":"Divavu","address":"5883 Del Mar Center","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/30/2017", "latlong": ""},

        {"id":2,"company":"Tagchat","address":"29393 Morrow Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"3/23/2017"},

        {"id":3,"company":"Mita","address":"2133 Eastlawn Lane","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/23/2017"},

        {"id":4,"company":"Voonix","address":"22169 Kinsman Terrace","job title":"Professor","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/10/2017"},

        {"id":5,"company":"Feedbug","address":"1 Moulton Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/11/2016"},

        {"id":6,"company":"Midel","address":"265 Ridgeview Place","job title":"Full Stack Web Developer Coordinator","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/5/2016"},

        {"id":7,"company":"Livefish","address":"99238 4th Way","job title":"Desktop Support Technician","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/5/2017"},

        {"id":8,"company":"Zooveo","address":"57574 Glendale Alley","job title":"Full Stack Web Developer Coordinator","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/14/2017"},

        {"id":9,"company":"Wikibox","address":"02344 Manufacturers Pass","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/15/2017"},

        {"id":10,"company":"Midel","address":"6613 Fuller Street","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/7/2017"},

        {"id":11,"company":"Quimba","address":"83051 Heath Way","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/30/2017"},

        {"id":12,"company":"Dynabox","address":"947 Fordem Junction","job title":"UX/UI Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/18/2016"},

        {"id":13,"company":"Zazio","address":"4 Elmside Crossing","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/29/2017"},

        {"id":14,"company":"Yotz","address":"2421 Sutherland Pass","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/14/2017"},

        {"id":15,"company":"Topicstorm","address":"132 Pierstorff Lane","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/2/2017"},

        {"id":16,"company":"Livetube","address":"57 Caliangt Center","job title":"Web Designer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/11/2017"},

        {"id":17,"company":"Kanoodle","address":"4 Forest Drive","job title":"Programmer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/5/2016"},

        {"id":18,"company":"Flipbug","address":"5476 Valley Edge Trail","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/18/2016"},

        {"id":19,"company":"Zoonoodle","address":"8 Grayhawk Pass","job title":"Structural Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/17/2017"},

        {"id":20,"company":"Edgeclub","address":"6 Corben Circle","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/30/2017"},

        {"id":21,"company":"Brainbox","address":"44104 Buhler Drive","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/1/2017"},

        {"id":22,"company":"Browsecat","address":"96 Logan Terrace","job title":"UX/UI Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/23/2017"},

        {"id":23,"company":"Kayveo","address":"6 Lakeland Pass","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/5/2017"},

        {"id":24,"company":"Quinu","address":"73012 Ryan Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/18/2016"},

        {"id":25,"company":"Zoonder","address":"87564 Anderson Lane","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/8/2017"},

        {"id":26,"company":"Dynabox","address":"753 Waubesa Pass","job title":"Professor","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/23/2017"},

        {"id":27,"company":"Eare","address":"25 Stang Terrace","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/7/2016"},

        {"id":28,"company":"Linktype","address":"157 Manufacturers Circle","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/18/2017"},

        {"id":29,"company":"Tazzy","address":"211 Bellgrove Way","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/3/2017"},

        {"id":30,"company":"Thoughtbeat","address":"46625 Mendota Park","job title":"Back End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/15/2016"},

        {"id":31,"company":"Trilia","address":"735 Clyde Gallagher Drive","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/29/2016"},

        {"id":32,"company":"Feedfire","address":"706 Merchant Avenue","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/1/2017"},

        {"id":33,"company":"Eazzy","address":"889 Fallview Way","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/3/2017"},

        {"id":34,"company":"Realmix","address":"6841 Susan Hill","job title":"Back End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/26/2017"},

        {"id":35,"company":"Npath","address":"000 Everett Hill","job title":"Analyst Programmer","gender":"Female","graduatedate":"12/5/2016","employeddate":"3/1/2017"},

        {"id":36,"company":"Shufflester","address":"5426 Melby Circle","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/30/2016"},

        {"id":37,"company":"Feednation","address":"87182 Londonderry Alley","job title":"Environmental Tech","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/29/2017"},

        {"id":38,"company":"Yata","address":"89684 Center Parkway","job title":"Back End Web Developer ","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/19/2017"},
        {"id":39,"company":"Shufflester","address":"97840 Debra Crossing","job title":"Analyst Programmer","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/2/2017"},

        {"id":40,"company":"Quire","address":"3 Mariners Cove Hill","job title":"Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/7/2017"},

        {"id":41,"company":"Quinu","address":"8163 Morning Terrace","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/23/2017"},

        {"id":42,"company":"BlogXS","address":"09243 Moulton Road","job title":"Quality Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/11/2016"},

        {"id":43,"company":"Blogtag","address":"6 Walton Plaza","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/17/2017"},

        {"id":44,"company":"Midel","address":"93 La Follette Place","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/6/2016"},

        {"id":45,"company":"Eazzy","address":"4 Grim Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/10/2017"},

        {"id":46,"company":"Bluezoom","address":"4229 Northview Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/25/2017"},

        {"id":47,"company":"Dablist","address":"7443 Pawling Park","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/2/2017"},

        {"id":48,"company":"Feedbug","address":"99 Derek Pass","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/30/2017","lat": 37.21921", "long": "-103.611"},

        {"id":49,"company":"Buzzshare","address":"5 American Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/26/2017", "lat" :"40.5736", "long":"-103.126"},

        {"id":50,"company":"Vidoo","address":"96 Clyde Gallagher Center","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/15/2017", "lat":"37.1006", "long":"-107.046"}
      ]);
    });
};



39.4089, -105.509
40.5106, -102.719
38.8736, -104.819
40.4519, -104.697
37.2192, -107.637
40.7006, -105.551
39.5597, -105.036
39.3247, -106.655
40.3556, -108.448
39.4244, -105.314
37.9164, -107.69
40.6117, -104.742
39.5878, -105.069
38.52, -104.626
39.7647, -105.6
39.6631, -105.021
39.0703, -108.471
38.2272, -106.1
39.5517, -104.858
40.3656, -102.951
38.1689, -104.143
37.5036, -102.996
40.3547, -104.682
38.0936, -103.349
37.275, -105.96
37.77, -104.124
4451 Broad Leaf Passage, Avondale, CO, 81047-0104, US, (720) 071-5303, 38.2375, -104.351
6804 Colonial Cloud Promenade, Apache City, CO, 80133-6341, US, (303) 827-4459, 37.8583, -104.831
4344 Little Orchard, Happy Canyon, CO, 80792-3079, US, (970) 120-6996, 39.435, -104.87
5685 Pleasant Front, Carriage Club, CO, 81013-1871, US, (719) 796-1256, 39.5325, -104.901
3064 Blue Landing, Colby, CO, 81740-6140, US, (970) 070-1136, 38.9317, -107.975
8745 Indian Harbour, Alice, CO, 81508-4266, US, (970) 265-3262, 39.8183, -105.642
1821 Quaking Court, Messex, CO, 80456-1825, US, (720) 759-3511, 40.4294, -103.436
6641 Dusty Woods, East Vancorum, CO, 81839-7699, US, (303) 588-5405, 38.2278, -108.594
7747 Cotton Loop, Truckton, CO, 81631-5837, US, (970) 723-3631, 38.7381, -104.182
1131 Umber Mount, Milner, CO, 81357-5098, US, (719) 033-0117, 40.4847, -107.019
3377 Sleepy Hickory Stead, Tonville, CO, 81451-9946, US, (719) 882-7856, 40.0092, -104.703
5313 High Downs, Oxyoke, CO, 80869-0341, US, (720) 475-5365, 39.3031, -105.198
3331 Shady Farm, Fall River Estates Subdivision, CO, 81551-8449, US, (720) 281-3310, 40.3903, -105.581
7831 Lazy Pond Highlands, Wah Keeney Park, CO, 81259-0169, US, (720) 275-5992, 39.6603, -105.34
7048 Hazy Blossom Walk, Vigil, CO, 80397-8921, US, (720) 413-3061, 37.1611, -107.941
6100 Heather Prairie Towers, Cloverly, CO, 81400-1129, US, (719) 362-7835, 40.4567, -104.626
8853 Hidden Wood, Shawnee, CO, 81867-9367, US, (719) 875-1429, 39.4211, -105.554
2303 Grand Parkway, Pittsburg, CO, 81227-4682, US, (970) 527-9156, 38.9522, -107.062
2212 Stony Via, Westminster, CO, 81657-5251, US, (720) 808-8946, 39.8367, -105.037
3394 Cinder Willow Swale, Vineland, CO, 80481-4501, US, (720) 526-3394, 38.2456, -104.459
4329 Cozy Campus, Comanche, CO, 80595-6213, US, (303) 851-5603, 39.9856, -104.3
