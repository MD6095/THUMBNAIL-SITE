function getYouTubeID(url) {
  let match = url.match(/(?:youtube\.com\/(?:[^\/]+\/.*|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/ ]{11})/);
  return match ? match[1] : null;
}

function generateThumbnails() {
  let url = document.getElementById("videoUrl").value;
  let videoId = getYouTubeID(url);
  if (!videoId) {
      alert("Invalid YouTube URL");
      return;
  }

  let sizes = [
      { label: "HQ (480x360)", size: "hqdefault.jpg" },
      { label: "HD (1920x1080)", size: "maxresdefault.jpg" },
      { label: "HD (1280x720)", size: "sddefault.jpg" },
      { label: "SD (640x480)", size: "mqdefault.jpg" },
      { label: "MQ (320x180)", size: "hqdefault.jpg" },
      { label: "Normal Image (120x90)", size: "default.jpg" }
  ];

  let container = document.getElementById("thumbnails");
  container.innerHTML = "";

  sizes.forEach(size => {
      let imgUrl = `https://img.youtube.com/vi/${videoId}/${size.size}`;
      let col = document.createElement("div");
      col.className = "col-md-4 text-center mt-3 thumbnail-container";
      col.innerHTML = `
          <p>${size.label}</p>
          <img src="${imgUrl}" alt="Thumbnail" class="img-fluid">
          <a href="${imgUrl}" download class="btn btn-success mt-2">Download</a>
      `;
      container.appendChild(col);
  });
}

function setLanguage() {
  const languages = {
      "en": { title: "YouTube Thumbnail Downloader", generateBtn: "Generate Thumbnails" },
      "fr": { title: "Téléchargeur de miniatures YouTube", generateBtn: "Générer des miniatures" },
      "zh": { title: "YouTube缩略图下载器", generateBtn: "生成缩略图" },
      "ja": { title: "YouTubeサムネイルダウンローダー", generateBtn: "サムネイルを生成" },
      "es": { title: "Descargador de miniaturas de YouTube", generateBtn: "Generar miniaturas" },
      "hi": { title: "यूट्यूब थंबनेल डाउनलोडर", generateBtn: "थंबनेल जनरेट करें" },
      "ru": { title: "Загрузчик миниатюр YouTube", generateBtn: "Сгенерировать миниатюры" }
  };

  let userLang = navigator.language.substring(0, 2);
  let lang = languages[userLang] || languages["en"];
  document.getElementById("title").textContent = lang.title;
  document.getElementById("generateBtn").textContent = lang.generateBtn;
}

setLanguage();
