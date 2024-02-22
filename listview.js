const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("kategori");

console.log(kategori);

fetch(`https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?kategori=cs.["${kategori}"]`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
}).then((res) => res.json().then(visData));

function visData(data) {
  const template = document.querySelector(".listview_template");

  data.forEach((element) => {
    const id = element.liste_id;
    const templateClone = template.content.cloneNode(true);

    templateClone.querySelector(".singleview_link").href = `singleview.html?liste_id=${id}`;
    templateClone.querySelector(".listview_name").textContent = element.navn;
    templateClone.querySelector(".listview_image").src = element.image;

    document.querySelector(".listview_container").appendChild(templateClone);
  });
}
