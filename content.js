
const imageURL = 'https://static.wixstatic.com/media/e3d94a_cf3c40a057114d39b85cf4e0cf10e881~mv2.jpg/v1/fit/w_2500,h_1330,al_c/e3d94a_cf3c40a057114d39b85cf4e0cf10e881~mv2.jpg'
setTimeout(()=>{

  replaceImages()
},1000)
function replaceImages() {
    const images = document.querySelectorAll('img');
    images.forEach((img) => {
      img.src = imageURL;
    });
  }

  const replaceImage = (img) => {
    img.src = imageURL;
  };


  const observer = new MutationObserver((mutations) => {
    mutations.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        setTimeout(()=>{
          if (node.tagName === 'IMG') {
            replaceImage(node);
          } else if (node.querySelectorAll) {
            node.querySelectorAll('img').forEach(replaceImage);
          }
        },500)
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

