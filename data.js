// https://krsvqjqixsdadwlichqj.supabase.co

// eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4

fetch("https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
}).then((res) => res.json().then(visElement));

function visElement(elementer) {
  console.log(elementer[0].navn);
}
