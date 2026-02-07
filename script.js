
// Scroll Up Button
const scrollBtn = document.createElement('button');
scrollBtn.textContent = '↑';
scrollBtn.style.cssText = 'position:fixed;bottom:20px;right:20px;padding:10px;font-size:20px;border:none;border-radius:5px;background:#F7B731;color:#0A3D62;cursor:pointer;';
document.body.appendChild(scrollBtn);
scrollBtn.addEventListener('click',()=>{window.scrollTo({top:0,behavior:'smooth'});});
