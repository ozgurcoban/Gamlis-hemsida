function breakPdf() {
  let pdf = document.getElementById('pdf');
  pdf.innerHTML = "&#xf1c1;";

  setTimeout(function () {
    pdf.innerHTML = "&"
  })
}