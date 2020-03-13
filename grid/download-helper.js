all = $('.btn-outline-primary');
const index = 0;
function download() {
  const btn = all[i];
  btn.click();
  console.log('clicked button ', i++);
}
download();
setInterval(download, 60 * 2000 * 5);
