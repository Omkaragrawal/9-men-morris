window.onload = function () {
    // Get the Object by ID
    let a = document.getElementById("board");
    // Get the SVG document inside the Object tag
    let svgDoc = a.contentDocument;


    let allCircles =svgDoc.querySelectorAll("#allCircles > g > circle");


    // Get one of the SVG items by ID;
    // let d1 = svgDoc.getElementById("d1");
    // let d7 = svgDoc.getElementById("d7");
    // let g1 = svgDoc.getElementById("g1");
    // let g7 = svgDoc.getElementById("g7");
    // let g4 = svgDoc.getElementById("g4");
    // let a1 = svgDoc.getElementById("a1");
    // let a7 = svgDoc.getElementById("a7");
    // let a4 = svgDoc.getElementById("a4");

    // let outer = svgDoc.getElementById("outer");
    // let middle = svgDoc.getElementById("middle");
    // let inner = svgDoc.getElementById("inner");
    // for (let i = 0; i < middle.childNodes.length; i++) {
    //     let childId = middle.childNodes[i].id;
    //     if (typeof (childId) !== 'undefined')
    //         console.log(childId)
    // }

    for (let i = 0; i < allCircles.length; i++) {
        allCircles[i].onclick = function (e) {
            allCircles[i].setAttribute("fill", "black");
        };
    }
 





};