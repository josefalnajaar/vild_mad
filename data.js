// https://krsvqjqixsdadwlichqj.supabase.co/`;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4

// const parametre = new URLSearchParams(window.location.search);
// const id = parametre.get("id");

// const url = `https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?liste_id=${id}`;

const url = `https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?liste_id=eq.2`;

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
})
  .then((res) => res.json())
  .then(visElement);

function visElement(elementer) {
  console.log(elementer);

  const førsteElement = elementer[0]; // Vælg det første element fra listen

  document.querySelector(".singleview_navn").textContent = førsteElement.navn;
  document.querySelector(".where_to_find").textContent = førsteElement.where_to_find;
  document.querySelector(".when_to_look").textContent = førsteElement.when_to_look;
  document.querySelector(".singleview_billede").src = førsteElement.image; // Sørg for at vælge billede ved at tilføje en klasse
}
