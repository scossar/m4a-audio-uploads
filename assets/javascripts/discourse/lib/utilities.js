Discourse.Utilities.getUploadMarkdown = function (upload) {
  if (Discourse.Utilities.isAnImage(upload.original_filename)) {
    return '<img src="' + upload.url + '" width="' + upload.width + '" height="' + upload.height + '">';
  } else if (!Discourse.SiteSettings.prevent_anons_from_downloading_files && (/\.(mov|mp4|webm|ogv|mp3|ogg|wav|m4a)$/i).test(upload.original_filename)) {
    // is Audio/Video
    return Discourse.Utilities.uploadLocation(upload.url);
  } else {
    return '<a class="attachment" href="' + upload.url + '">' + upload.original_filename + '</a> (' + I18n.toHumanSize(upload.filesize) + ')\n';
  }
};
