function DownloadFile(url,download)
{
    console.log(' file start downloading......')
    setTimeout(()=>{
        let path=url.split('/').pop();
        download(path);
    },2000);
}

function compressFile(path,compress)
{
    console.log('file start compress');
    setTimeout(()=>{
        const comp=path.split('.')[0]+'.zip';
        compress(comp);
    },2000);
}
DownloadFile('http://www.facebook.com/profile.jpg',function(path){
    console.log(`file downloaded successfully ${path}`);
    compressFile(path,function(comp){
        console.log(`file compress sucessfully.....${comp}`);
    })
})