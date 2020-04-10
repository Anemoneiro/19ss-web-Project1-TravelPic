function uploadAll(){
    alert('图片已上传');
    window.location.href="myphotos.html";
} 

function showPic(source, imgId) {
    var file = source.files[0];
    if(window.FileReader) {
        var fileReader = new FileReader();
        fileReader.onloadend = function(e) {
            document.getElementById(imgId).src = e.target.result;
        }
        fileReader.readAsDataURL(file);
        document.getElementById("Preview-noPic").style.display="none";
    }
}