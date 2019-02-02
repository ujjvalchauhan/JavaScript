// JavaScript source code
var tableData = data;
var filterButton = d3.select("#filter-btn");
var Table = d3.select("ufo-table");
var tbody = d3.select("tbody");

function renderTable(originalData) {
    originalData.forEach((table) => {
    var row = tbody.append("tr");
    Object.entries(table).forEach(([key,value]) => {
        var cell = row.append("td");
        cell.text(value);
    });
        });
}

filterButton.on("click", function () {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    var table = d3.select("tbody").selectAll("tr").remove();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    //console.log(tableData);

    var newData  = tableData.filter(table => table.datetime === inputValue);
    
    renderTable(newData);
    
});

renderTable(tableData);




