async function doSearch() {
    const query = document.getElementById("searchBox").value;
    const response = await fetch(`/api/search?q=${query}`);
    const data = await response.json();

    const list = document.getElementById("results");
    list.innerHTML = "";
    data.results.forEach(r => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = r;
        list.appendChild(li);
    });
}

async function loadAnnotations() {
    const response = await fetch("/api/annotations");
    const data = await response.json();
    const list = document.getElementById("annotations");
    list.innerHTML = "";
    data.forEach(a => {
        const li = document.createElement("li");
        li.className = "list-group-item";
        li.innerText = a.text;
        list.appendChild(li);
    });
}

async function addAnnotation() {
    const text = document.getElementById("annotationText").value;
    if(!text) return;
    await fetch("/api/annotations", {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({text})
    });
    document.getElementById("annotationText").value = "";
    loadAnnotations();
}

window.onload = loadAnnotations;
