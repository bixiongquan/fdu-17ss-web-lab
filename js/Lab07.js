function r1() {
    let obj=document.getElementById("box1");
    if (obj.options[obj.selectedIndex].value==="CREATE TABLE") {
        let box1 = document.getElementById("a1");
        let text1 = document.createElement("input");
        text1.type = "text";
        text1.id = "t1";
        text1.value = "table name";
        let text2 = document.createElement("input");
        text2.type = "text";
        text2.id = "t2";
        text2.value = "column number";
        box1.appendChild(text1);
        box1.appendChild(text2);
        document.getElementById("t2").onchange=r2;
    }
    if (obj.options[obj.selectedIndex].value==="ADD ROW"){
        if(document.getElementById("a1").hasChildNodes()) {
            document.getElementById("a1").removeChild(document.getElementById("a1").firstChild);
        }
        let box2=document.getElementById("a2");
       while(box2.hasChildNodes()){
           box2.removeChild(box2.firstChild);
       }

        while(document.getElementById("a4").hasChildNodes()){
            document.getElementById("a4").removeChild(document.getElementById("a4").firstChild);
        }
        let select2=document.getElementById("box2");
        if(select2.options[select2.selectedIndex].value="originTable1") {
            let originTable1 = document.createElement("table");
            originTable1.id = "originTable1";
            let row1 = document.createElement("tr");
            let row2 = document.createElement("tr");
            let row3 = document.createElement("tr");
            let tr1 = document.createElement("th");
            let tr2 = document.createElement("th");
            let tr3 = document.createElement("th");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            td4.className = "odd";
            let td5 = document.createElement("td");
            td5.className = "odd";
            let td6 = document.createElement("td");
            td6.className = "odd";
            originTable1.appendChild(row1);
            originTable1.appendChild(row2);
            originTable1.appendChild(row3);
            row1.appendChild(tr1);
            row1.appendChild(tr2);
            row1.appendChild(tr3);
            row2.appendChild(td1);
            row2.appendChild(td2);
            row2.appendChild(td3);
            row3.appendChild(td4);
            row3.appendChild(td5);
            row3.appendChild(td6);
            document.getElementById("a4").appendChild(originTable1);
        }


        document.getElementById("submit").onclick=function() {
            while(box2.hasChildNodes()){
                box2.removeChild(box2.firstChild);
            }
            let rowOfA2 = document.createElement("table");
            box2.appendChild(rowOfA2);

            let rows = document.getElementById("originTable1").rows.length;
            let cols = document.getElementById("originTable1").rows[0].cells.length;
            let row = document.createElement("tr");
            let anotherRow = document.createElement("tr");
            rowOfA2.appendChild(row);
            for (let i = 0; i < cols; i++) {
                let createCol = document.createElement("td");
                row.appendChild(createCol);
            }
            for (let i = 0; i < cols; i++) {
                let createCol = document.createElement("td");
                if (rows / 2 !== 0) {
                    createCol.className = "odd";
                }
                anotherRow.appendChild(createCol);
            }
            document.getElementById("originTable1").appendChild(anotherRow);
        }
    }
    //if (obj.options[obj.selectedIndex].value==="DELETE ROW"){
     //   if(document.getElementById("a1").hasChildNodes()) {
     //       document.getElementById("a1").removeChild(document.getElementById("a1").firstChild);
     //   }
    //    let box2=document.getElementById("a2");
     //   while(box2.hasChildNodes()){
      //      box2.removeChild(box2.firstChild);
      //  }
     //   while(document.getElementById("a4").hasChildNodes()){
    //        document.getElementById("a4").removeChild(document.getElementById("a4").firstChild);
    //    }
    //    let select2=document.getElementById("box2");
    //    if(select2.options[select2.selectedIndex].value="originTable1"){
    //        let originTable1=document.createElement("table");
     //       originTable1.id="originTable1";
     //       let row1=document.createElement("tr");
     //       let row2=document.createElement("tr");
     //       let row3=document.createElement("tr");
     //       let tr1=document.createElement("th");
     //       let tr2=document.createElement("th");
     //       let tr3=document.createElement("th");
      //      let td1=document.createElement("td");
      //      let td2=document.createElement("td");
      //      let td3=document.createElement("td");
     //       let td4=document.createElement("td");
     //       td4.className="odd";
      //      let td5=document.createElement("td");
      //      td5.className="odd";
     //       let td6=document.createElement("td");
     //       td6.className="odd";
      //      originTable1.appendChild(row1);
        //    originTable1.appendChild(row2);
          //  originTable1.appendChild(row3);
     //       row1.appendChild(tr1);
    //        row1.appendChild(tr2);
     //       row1.appendChild(tr3);
     //       row2.appendChild(td1);
     //       row2.appendChild(td2);
     //       row2.appendChild(td3);
     //       row3.appendChild(td4);
      //      row3.appendChild(td5);
      //      row3.appendChild(td6);
      //      document.getElementById("a4").appendChild(originTable1);
      //  }
      //  document.getElementById("submit").onclick=function() {
     //       let rows = document.getElementById("originTable1").rows.length;
     //       let cols = document.getElementById("originTable1").rows[0].cells.length;
     //       let row = document.createElement("tr");
    //        for (let i = 0; i < cols; i++) {
     //           let createCol = document.createElement("td");
     //           if (rows / 2 != 0) {
     //               createCol.className = "odd";
      //          }
     //           row.appendChild(createCol);
     //       }
    //        let rowOfA2 = document.createElement("table");
    //        rowOfA2.appendChild(row);
     //       document.getElementById("originTable1").removeChild(document.getElementById("originTable1").lastChild);
     //   }
   // if (obj.options[obj.selectedIndex].value==="DELETE TABLE"){
   //     if(document.getElementById("a1").hasChildNodes()) {
   //         document.getElementById("a1").removeChild(document.getElementById("a1").firstChild);
   //     }
   //     let box2=document.getElementById("a2");
   //     while(box2.hasChildNodes()){
   //         box2.removeChild(box2.firstChild);
   //     }
    //    while(document.getElementById("a4").hasChildNodes()){
    //        document.getElementById("a4").removeChild(document.getElementById("a4").firstChild);
    //    }
    //    let select2=document.getElementById("box2");
     //   if(select2.options[select2.selectedIndex].value="originTable1"){
     //      while(box2.hasChildNodes()){
     //           box2.removeChild(box2.firstChild);
     //       }
     //       let originTable1=document.createElement("table");
    //       originTable1.id="originTable1";
     //       let row1=document.createElement("tr");
      //      let row2=document.createElement("tr");
      //      let row3=document.createElement("tr");
     //       let tr1=document.createElement("th");
      //      let tr2=document.createElement("th");
    //        let tr3=document.createElement("th");
    //        let td1=document.createElement("td");
    //        let td2=document.createElement("td");
    //        let td3=document.createElement("td");
     //       let td4=document.createElement("td");
      //      td4.className="odd";
     //       let td5=document.createElement("td");
      //      td5.className="odd";
     //       let td6=document.createElement("td");
     //       td6.className="odd";
     //       originTable1.appendChild(row1);
    //        originTable1.appendChild(row2);
     //       originTable1.appendChild(row3);
     //       row1.appendChild(tr1);
     //       row1.appendChild(tr2);
     //       row1.appendChild(tr3);
     //       row2.appendChild(td1);
     //       row2.appendChild(td2);
     //       row2.appendChild(td3);
     //       row3.appendChild(td4);
      //      row3.appendChild(td5);
     //       row3.appendChild(td6);
      //      document.getElementById("a4").appendChild(originTable1);
    //   }
    //    alert("you cannot undo this action");
    //    document.getElementById("submit").onclick=function() {
     //       if (document.getElementById("a4").hasChildNodes()) {
     //           document.getElementById("a4").removeChild(document.getElementById("a4").firstChild);
     //       }
      //      let t=document.getElementById("box2");
      //          t.removeChild(t.options[t.selectedIndex]);
    //    }
  //  }
}
function r2(){
    let box2=document.getElementById("a2");
    let createTable=document.createElement("table");
    createTable.name=document.getElementById("t1").value;
    box2.appendChild(createTable);
    let createRow=document.createElement("tr");
    createTable.appendChild(createRow);
    let n=document.getElementById("t2").value;
    for(let i=0; i<n; i++){
        let createCol=document.createElement("td");
        createCol.className="td";
        createCol.innerHTML="attr";
        createRow.appendChild(createCol);
    }
    let box3=document.getElementById("a3");
    let sub=document.createElement("input");
    sub.type="button";
    sub.value="submit";
    sub.id="submit";
    box3.appendChild(sub);
    sub.onclick=r3;
}
function r3(){
    let t1=document.getElementById("t1").value;
    let t2=document.getElementById("t2").value;
    let op=document.createElement("option");
    op.id=t1;
    op.value=t1;
    op.innerHTML=t1;
    document.getElementById("box2").appendChild(op);


    op.selected=true;


    let box4=document.getElementById("a4");
    let createTable=document.createElement("table");
    createTable.name=document.getElementById("t1").value;
    box4.appendChild(createTable);
    let createRow=document.createElement("tr");
    createTable.appendChild(createRow);
    for(let i=0; i<t2; i++){
        let createCol=document.createElement("td");
        createCol.innerHTML="attr";
        createRow.appendChild(createCol);
    }
}