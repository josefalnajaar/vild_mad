const urlParams = new URLSearchParams(window.location.search);
const articleId = urlParams.get("articleId");

const url = `https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?liste_id=eq.${articleId}`;

fetch(url, {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
})
  .then((res) => res.json())
  .then(visElement);

function visElement(elementer) {
  const førsteElement = elementer[0];
  document.querySelector(".singleview_navn").textContent = førsteElement.navn;
  document.querySelector(".where_to_find").textContent = førsteElement.where_to_find;
  document.querySelector(".when_to_look").textContent = førsteElement.when_to_look;
  document.querySelector(".singleview_billede").src = førsteElement.image;
}

// https://krsvqjqixsdadwlichqj.supabase.co/`;
// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4

// const parametre = new URLSearchParams(window.location.search);
// const id = parametre.get("id");

// const url = `https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe?liste_id=${id}`;
