const urlParams = new URLSearchParams(window.location.search);
const urlInfo = urlParams.get("Urlinfo");
console.log(urlInfo);

fetch("https://krsvqjqixsdadwlichqj.supabase.co/rest/v1/svampe", {
  method: "GET",
  headers: {
    apikey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imtyc3ZxanFpeHNkYWR3bGljaHFqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDg0MzM1OTAsImV4cCI6MjAyNDAwOTU5MH0.fvBjPWoPM2NHAiAWde3cDYpbSK-o1o0UDpMVcgTCIy4",
  },
}).then((res) => res.json().then(visData));

function visData(data) {
  const template = document.querySelector(".listview_template");

  data.forEach((element) => {
    const templateClone = template.content.cloneNode(true);

    templateClone.querySelector(".listview_name").textContent = element.navn;
    templateClone.querySelector(".listview_image").src = element.image;

    const article = templateClone.querySelector(".listview_article");
    article.addEventListener("click", function () {
      // Navigere til singleview-siden med det relevante articleId
      window.location.href = `singleview.html?articleId=${element["list-id"]}`;
    });

    document.querySelector(".listview_container").appendChild(templateClone);
  });
}
