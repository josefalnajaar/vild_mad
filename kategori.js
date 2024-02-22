const urlParams = new URLSearchParams(window.location.search);
const kategori = urlParams.get("kategori");

fetch(`https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?kategori=cs.["${kategori}"]`, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
}).then((res) => res.json().then(visData));

function visData(data) {
  data.forEach(enKategori);
}

function enKategori(kategoriNavn) {
  console.log(kategoriNavn);
  document.querySelector(".cards_overblik").href = `listview.html?kategori=${kategoriNavn.kategori}`;
}
