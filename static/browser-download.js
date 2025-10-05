// 浏览器控制台批量下载脚本
(function() {
    console.log('🚀 开始批量下载姿势图片...');
    
    // 图片列表
    const images = [
        "G-Spot-Sniper-Sex-Position-Illustration.jpg",
        "Doggy-Style-Sex-Position-Illustration.jpg", 
        "69-Sex-Position-Illustration.jpg",
        "Mastery-Sex-Position-Illustration.jpg",
        "Asian-Cowgirl-Sex-Position-Illustration.jpg",
        "Acrobat-Sex-Position-Illustration.jpg",
        "Amazon-Sex-Position-Illustration.jpg",
        "Anvil-Sex-Position-Illustration.jpg",
        "Back-Seat-Driver-Sex-Position-Illustration.jpg",
        "Ballerina-Sex-Position.jpg"
        // ... 可以添加更多图片
    ];
    
    let downloadCount = 0;
    
    function downloadImage(url, filename) {
        const link = document.createElement('a');
        link.href = url;
        link.download = filename;
        link.target = '_blank';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        downloadCount++;
        console.log(`📥 下载 ${downloadCount}/${images.length}: ${filename}`);
    }
    
    // 批量下载
    images.forEach((filename, index) => {
        setTimeout(() => {
            const url = `https://18.wr.do/positions/${filename}`;
            downloadImage(url, filename);
        }, index * 500); // 每500ms下载一张
    });
    
    console.log(`📊 开始下载 ${images.length} 张图片...`);
    console.log('💡 提示：浏览器会自动下载图片到下载文件夹');
})();
