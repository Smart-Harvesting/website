function refreshTable(jsonData){
    var table;
    if ($.fn.dataTable.isDataTable('#results')) {
        table = $('#results').DataTable();
        table.clear();
        table.rows.add(jsonData).draw();
    }
    else {
        table = $('#results').DataTable( {
            data: jsonData,
            columns: [
                { data: 'conf_key' },
                { data: 'score', "searchable": false  },
                { data: 'interval', "searchable": false  },
                { data: 'month', "searchable": false  },
                { data: 'delay', "searchable": false  },
                { data: 'last_entry', "searchable": false  },
                { data: 'expected', "searchable": false  },
                { data: 'activity', "searchable": false  },
                { data: 'rating', "searchable": false  },
                { data: 'prominence', "searchable": false  },
                { data: 'internationality', "searchable": false  },
                { data: 'size', "searchable": false  },
                { data: 'affiliations', "searchable": false  },
                { data: 'log', "searchable": false  }
            ],
            lengthChange: false,
            order: [[ 1, 'desc' ]],
            pageLength: 10,
            scrollX: true,
            scrollY: 500,
            scrollCollapse: true,
            } );
    }
};

$(document).ready( function () {
    $.getJSON("../assets/data/baseline.json", function(json) {
        refreshTable(json)
    });
} );

$("a#rating").click(function(){
   $.getJSON("../assets/data/rating.json", function(json) {
        refreshTable(json)
    });
});
 
$("a#activity").click(function(){
   $.getJSON("../assets/data/active.json", function(json) {
        refreshTable(json)
    });
});
 
$("a#activity_rating").click(function(){
    $.getJSON("../assets/data/active_rating.json", function(json) {
        refreshTable(json)
    }); 
});

$("a#reset").click(function(){
    $.getJSON("../assets/data/baseline.json", function(json) {
        refreshTable(json)
    });
});
