document.getElementById("fetch-thumbnail").addEventListener("click", function () {
    const videoUrl = document.getElementById("video-url").value;
    const videoId = extractYouTubeId(videoUrl);
  
    if (videoId) {
      const baseUrl = `https://img.youtube.com/vi/${videoId}`;
      const thumbnails = [
        `${baseUrl}/maxresdefault.jpg`,
        `${baseUrl}/sddefault.jpg`,
        `${baseUrl}/hqdefault.jpg`,
      ];
  
      const thumbnailSection = document.getElementById("thumbnail-section");
      thumbnailSection.innerHTML = thumbnails
        .map((url) => `<img src="${url}" alt="Thumbnail">`)
        .join("");
    } else {
      alert("Please enter a valid YouTube URL!");
    }
  });
  
  function extractYouTubeId(url) {
    const regExp = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/(?:v\/|u\/\w\/|embed\/|watch\?v=|&v=)([\w-]{11})/;
    const match = url.match(regExp);
    return match ? match[1] : null;
  }
  