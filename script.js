function searchSongs() {
    var req = new XMLHttpRequest();
    req.open("GET", "./songInfo.txt", false);
    req.onreadystatechange = () => {
        if (req.readyState === 4) {
            if (req.status === 200 || req.status == 0) {
                var allText = req.responseText;
                showData(allText);
            }
        }
    }
    req.send(null);
}

function showData(data) {
    var input = document.getElementById("input").value;
    data = data.split("\n");
    var src = "",
        count = 0;

    for (var n = 0; n < data.length; n++) {
        if (data[n].includes(input)) {
            var datum = data[n].split("::");
            var num = "";
            if (datum[0] != "null") {
                num = "금영: " + datum[0];
            }
            if (datum[1] != "null") {
                if (num != "") num += " / ";
                num += "태진: " + datum[1];
            }
            src += "<tr align=center bgcolor=#E0F7FA>";
            src += "<td colspan=2><b>" + datum[2] + "</b></td>";
            src += "</tr>";
            src += "<tr align=center>";
            src += "<td width=20%>가수</td><td>" + datum[3] + "</td>";
            src += "</tr>";
            src += "<tr align=center>";
            src += "<td>번호</td><td>" + num + "</td>";
            src += "</tr>";
            src += "<tr align=center>";
            src += "<td>비고</td><td>" + datum[4] + "</td>";
            src += "</tr>";
            count++;
        }
    }
    if (count == 0) {
        alert("검색 결과가 없습니다.");
    } else {
        alert("검색 결과가 " + count + "개 있습니다.");
        document.getElementById('output_table').innerHTML = src;
        document.getElementById('output').style.display = 'block';
    }
}