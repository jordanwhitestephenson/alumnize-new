exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('mock').del()
    .then(function () {
      // Inserts seed entries
      return knex('mock').insert([
        {"id":1,"company":"Divavu","address":"5883 Del Mar Center","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/30/2017", "lat": 37.77, "long": -104.124},

        {"id":2,"company":"Tagchat","address":"29393 Morrow Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"3/23/2017", "lat" : 40.3656, "long": -102.951},

        {"id":3,"company":"Mita","address":"2133 Eastlawn Lane","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/23/2017", "lat":38.1689, "long": -104.143},

        {"id":4,"company":"Voonix","address":"22169 Kinsman Terrace","job title":"Professor","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/10/2017", "lat": 37.5036, "long": -102.996},

        {"id":5,"company":"Feedbug","address":"1 Moulton Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/11/2016", "lat":37.275, "long": -105.96},

        {"id":6,"company":"Midel","address":"265 Ridgeview Place","job title":"Full Stack Web Developer Coordinator","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/5/2016", "lat":38.0936, "long":-103.349},

        {"id":7,"company":"Livefish","address":"99238 4th Way","job title":"Desktop Support Technician","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/5/2017", "lat": 40.3547, "long":-104.682},

        {"id":8,"company":"Zooveo","address":"57574 Glendale Alley","job title":"Full Stack Web Developer Coordinator","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/14/2017", "lat": 39.7647, "long": -105.6},


        {"id":9,"company":"Wikibox","address":"02344 Manufacturers Pass","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/15/2017", "lat": 38.2272, "long":-106.1},


        {"id":10,"company":"Midel","address":"6613 Fuller Street","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/7/2017", "lat":   39.435, "long":-104.87},

        {"id":11,"company":"Quimba","address":"83051 Heath Way","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/30/2017", "lat": 39.5325, "long": -104.901},

        {"id":12,"company":"Dynabox","address":"947 Fordem Junction","job title":"UX/UI Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/18/2016", "lat": 38.9317, "long":-107.975},

        {"id":13,"company":"Zazio","address":"4 Elmside Crossing","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/29/2017", "lat":"39.8183", "long":"-105.642"},

        {"id":14,"company":"Yotz","address":"2421 Sutherland Pass","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/14/2017", "lat":"38.2278", "long":"-108.594"},

        {"id":15,"company":"Topicstorm","address":"132 Pierstorff Lane","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/2/2017", "lat":40.4294, "long":-103.436},

        {"id":16,"company":"Livetube","address":"57 Caliangt Center","job title":"Web Designer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/11/2017", "lat":38.7381, "long":-104.182},

        {"id":17,"company":"Kanoodle","address":"4 Forest Drive","job title":"Programmer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/5/2016", "lat":40.4847, "long":-107.019},

        {"id":18,"company":"Flipbug","address":"5476 Valley Edge Trail","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/18/2016", "lat":40.0092, "long":-104.703},

        {"id":19,"company":"Zoonoodle","address":"8 Grayhawk Pass","job title":"Structural Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/17/2017", "lat":37.1611, "long":-107.941},

        {"id":20,"company":"Edgeclub","address":"6 Corben Circle","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/30/2017", "lat":39.6603, "long":-105.34},

        {"id":21,"company":"Brainbox","address":"44104 Buhler Drive","job title":"Full Stack Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/1/2017", "lat":   40.3903, "long":-105.581},

        {"id":22,"company":"Browsecat","address":"96 Logan Terrace","job title":"UX/UI Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/23/2017", "lat":"39.3031", "long":"-105.198"},

        {"id":23,"company":"Kayveo","address":"6 Lakeland Pass","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/5/2017", "lat":40.4567, "long":-104.626},

        {"id":24,"company":"Quinu","address":"73012 Ryan Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/18/2016", "lat":39.4211, "long":-105.554},

        {"id":25,"company":"Zoonder","address":"87564 Anderson Lane","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/8/2017", "lat":38.9522, "long":-107.062},

        {"id":26,"company":"Dynabox","address":"753 Waubesa Pass","job title":"Professor","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/23/2017", "lat":"38.2456", "long":"-104.459"},

        {"id":27,"company":"Eare","address":"25 Stang Terrace","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/7/2016", "lat":  39.8367, "long":-105.037},

        {"id":28,"company":"Linktype","address":"157 Manufacturers Circle","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/18/2017", "lat": 39.9856, "long": -104.3},

        {"id":29,"company":"Tazzy","address":"211 Bellgrove Way","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/3/2017", "lat": 37.8583, "long":-104.831},

        {"id":30,"company":"Thoughtbeat","address":"46625 Mendota Park","job title":"Back End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/15/2016", "lat":39.9856, "long":-104.3},

        {"id":31,"company":"Trilia","address":"735 Clyde Gallagher Drive","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/29/2016", "lat":38.2375, "long":-104.351},

        {"id":32,"company":"Feedfire","address":"706 Merchant Avenue","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/1/2017", "lat": 39.5517, "long": -104.858},

        {"id":33,"company":"Eazzy","address":"889 Fallview Way","job title":"Back End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/3/2017", "lat" :39.0703, "long": -108.471},

        {"id":34,"company":"Realmix","address":"6841 Susan Hill","job title":"Back End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/26/2017", "lat": 39.6631, "long":-105.021},

        {"id":35,"company":"Npath","address":"000 Everett Hill","job title":"Analyst Programmer","gender":"Female","graduatedate":"12/5/2016","employeddate":"3/1/2017", "lat":38.52, "long": -104.626},

        {"id":36,"company":"Shufflester","address":"5426 Melby Circle","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/30/2016", "lat":39.5878, "long": -105.069},

        {"id":37,"company":"Feednation","address":"87182 Londonderry Alley","job title":"Environmental Tech","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/29/2017", "lat": 40.6117, "long" : -104.742},

        {"id":38,"company":"Yata","address":"89684 Center Parkway","job title":"Back End Web Developer ","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/19/2017", "lat":37.9164, "long":-107.69},

        {"id":39,"company":"Shufflester","address":"97840 Debra Crossing","job title":"Analyst Programmer","gender":"Female","graduatedate":"12/5/2016","employeddate":"2/2/2017", "lat":39.4244, "long":-105.314},

        {"id":40,"company":"Quire","address":"3 Mariners Cove Hill","job title":"Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"4/7/2017", "lat": 40.3556, "long": -108.448},

        {"id":41,"company":"Quinu","address":"8163 Morning Terrace","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/23/2017", "lat": 39.3247, "long": -106.655},

        {"id":42,"company":"BlogXS","address":"09243 Moulton Road","job title":"Quality Engineer","gender":"Female","graduatedate":"12/5/2016","employeddate":"12/11/2016", "lat":39.5597, "long": -105.036},


        {"id":43,"company":"Blogtag","address":"6 Walton Plaza","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"2/17/2017", "lat": 40.7006, "long": -105.551},


        {"id":44,"company":"Midel","address":"93 La Follette Place","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"12/6/2016", "lat": 37.2192, "long":-107.637},


        {"id":45,"company":"Eazzy","address":"4 Grim Circle","job title":"Full Stack Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/10/2017", "lat":"40.4519", "long":"-104.697"},

        {"id":46,"company":"Bluezoom","address":"4229 Northview Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/25/2017", "lat": 38.8736, "long": -104.819},


        {"id":47,"company":"Dablist","address":"7443 Pawling Park","job title":"Front End Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"1/2/2017", "lat" :40.5106, "long": -102.719},

        {"id":48,"company":"Feedbug","address":"99 Derek Pass","job title":"UX/UI Web Developer","gender":"Male","graduatedate":"12/5/2016","employeddate":"3/30/2017","lat" :39.4089, "long": -105.509},

        {"id":49,"company":"Buzzshare","address":"5 American Trail","job title":"Software Engineer","gender":"Male","graduatedate":"12/5/2016","employeddate":"4/26/2017", "lat" :40.5736, "long":-103.126},

        {"id":50,"company":"Vidoo","address":"96 Clyde Gallagher Center","job title":"Front End Web Developer","gender":"Female","graduatedate":"12/5/2016","employeddate":"1/15/2017", "lat":37.1006, "long":-107.046}
      ]);
    });
};
