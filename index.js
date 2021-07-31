document.getElementById("open_tcl").addEventListener("click", function (e) {
  fetchISO("iso_images/TinyCore-12.0.iso","TinyCore-12.0");
});
function fetchISO(url,name){
  fetch(url)
  .then((response) => {
    response.blob().then( blob => blobToFile(blob,name))
  });
}
function blobToFile(blob,name){
  blob.lastModifiedDate = new Date();
  const file = new File([blob], "", {})
  file.name = name;

  const dt = new DataTransfer();
  dt.items.add(file);
  const list = dt.files;
  document.getElementById("cd_image").files = list;
}
