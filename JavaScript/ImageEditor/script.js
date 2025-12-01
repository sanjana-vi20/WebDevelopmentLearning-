let b = 1,
  c = 1,
  g = 0,
  s = 0,
  sa = 1,
  r = 0,
  bl = 0,
  i = 0;

const img = document.getElementById("image");

console.log(img);

if (img.src === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html") {
  document.getElementById("image").style.display = "none";
} else {
  document.getElementById("uploads").style.display = "none";
}

function uploadImage() {
  const file = document.getElementById("upload").files[0];

  const fileUrl = URL.createObjectURL(file);
  document.getElementById("image").src = fileUrl;
  document.getElementById("image").style.display = "block";
  document.getElementById("uploads").style.display = "none";
  applyFilter();
}

function applyFilter() {
  document.getElementById(
    "image"
  ).style.filter = `brightness(${b}) contrast(${c}) grayscale(${g}) sepia(${s}) saturate(${sa}) hue-rotate(${r}deg) blur(${bl}px) invert(${i})`;
}

function changeBrightness() {
  const value = document.getElementById("Brightness").value;
  b = (value * 2) / 100;

  console.log(b);
  applyFilter();
}

function changeContrast() {
  const value = document.getElementById("Contrast").value;
  c = (value * 2) / 100;
  applyFilter();
}

function changeGreyScale() {
  const value = document.getElementById("GreyScale").value;
  g = value / 100;
  applyFilter();
}

function changeSepia() {
  const value = document.getElementById("Sepia").value;
  s = (value * 2) / 100;

  applyFilter();
}

function changeSaturate() {
  const value = document.getElementById("Saturate").value;
  sa = (value * 2) / 100;

  applyFilter();
}

function changeRotate() {
  const value = document.getElementById("Hue-rotate").value;
  r = value;

  applyFilter();
}

function changeBlur() {
  const value = document.getElementById("Blur").value;
  bl = value;
  applyFilter();
}

function changeInvert() {
  const value = document.getElementById("Invert").value;
  i = value/100;
  applyFilter();
}

function reset()
{
  b = 1;
  c = 1;
  g = 0;
  s = 0;
  sa = 1;
  r = 0;
  bl = 0;
  i = 0;

  applyFilter();
   document.getElementById(
    "image"
  ).style.filter = `brightness(${b}) contrast(${c}) grayscale(${g}) sepia(${s}) saturate(${sa}) hue-rotate(${r}deg) blur(${bl}px) invert(${i})`;

  document.getElementById("Brightness").value = "50";
  document.getElementById("Contrast").value = "50";
  document.getElementById("GreyScale").value = "0";
  document.getElementById("Sepia").value = "0";
  document.getElementById("Saturate").value = "0";
  document.getElementById("Hue-rotate").value = "0";
  document.getElementById("Blur").value = "0";
  document.getElementById("Invert").value = "0";

}

function download()
{
    if(img.src === "http://127.0.0.1:5500/JavaScript/ImageEditor/index.html")
    {
        alert("please Upload the image First");
        return;
    }

    if(!img.complete)
    {
        alert("image upload is in progress. Please wait.....");
        return;
    }

    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");

    canvas.width = img.naturalWidth;
    canvas.height = img.naturalHeight;

    const filter = getComputedStyle(img).filter;

    ctx.filter = filter === "none" ? "none" : filter;
    ctx.drawImage(img , 0 , 0 , canvas.width , canvas.height);

    const dataUrl = canvas.toDataURL("image/png");

    const anchorTag = document.createElement("a");
    anchorTag.href = dataUrl;
    anchorTag.download = "editedImage.png";

    document.body.appendChild(anchorTag);
    anchorTag.click();
    document.body.removeChild(anchorTag);

}
