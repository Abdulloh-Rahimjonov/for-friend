document.addEventListener('DOMContentLoaded', () => {
  const openQrBtn = document.getElementById('openQrBtn');
  const closeQrBtn = document.getElementById('closeQrBtn');
  const qrModal = document.getElementById('qrModal');
  const shareBtn = document.getElementById('shareBtn');
  const downloadQrBtn = document.getElementById('downloadQrBtn');
  const qrUrlInput = document.getElementById('qrUrlInput');
  const refreshQrBtn = document.getElementById('refreshQrBtn');
  const qrcodeContainer = document.getElementById('qrcode');
  const toastMessage = document.getElementById('toastMessage');
  const mainCard = document.getElementById('mainCard');
  const imageWrapper = document.getElementById('imageWrapper');

  let qrCodeInstance = null;

  // Determine default URL
  const currentUrl = window.location.href.startsWith('http') 
    ? window.location.href 
    : 'https://qalaysan-muhab.vercel.app';

  qrUrlInput.value = currentUrl;

  // Generate QR Code
  function generateQRCode(text) {
    qrcodeContainer.innerHTML = '';
    const safeText = text.trim() || currentUrl;

    if (typeof QRCode !== 'undefined') {
      qrCodeInstance = new QRCode(qrcodeContainer, {
        text: safeText,
        width: 190,
        height: 190,
        colorDark: '#0a0c14',
        colorLight: '#ffffff',
        correctLevel: QRCode.CorrectLevel.H,
      });
    } else {
      // Fallback via high-quality QR API if CDN fails
      const img = document.createElement('img');
      img.src = `https://api.qrserver.com/v1/create-qr-code/?size=190x190&data=${encodeURIComponent(safeText)}&margin=10`;
      img.alt = 'QR Code';
      img.style.width = '190px';
      img.style.height = '190px';
      qrcodeContainer.appendChild(img);
    }
  }

  // Initial QR code generation
  generateQRCode(currentUrl);

  // Modal handlers
  openQrBtn.addEventListener('click', () => {
    qrModal.classList.add('open');
    if (!qrUrlInput.value) {
      qrUrlInput.value = currentUrl;
    }
    generateQRCode(qrUrlInput.value);
  });

  closeQrBtn.addEventListener('click', () => {
    qrModal.classList.remove('open');
  });

  qrModal.addEventListener('click', (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove('open');
    }
  });

  refreshQrBtn.addEventListener('click', () => {
    generateQRCode(qrUrlInput.value);
    showToast('QR kod yangilandi!');
  });

  qrUrlInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
      generateQRCode(qrUrlInput.value);
      showToast('QR kod yangilandi!');
    }
  });

  // Download QR Code
  downloadQrBtn.addEventListener('click', () => {
    const canvas = qrcodeContainer.querySelector('canvas');
    const img = qrcodeContainer.querySelector('img');

    let downloadUrl = '';

    if (canvas) {
      downloadUrl = canvas.toDataURL('image/png');
    } else if (img && img.src) {
      downloadUrl = img.src;
    }

    if (downloadUrl) {
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'qalaysan-muhab-qrcode.png';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      showToast('QR kod rasm sifatida yuklab olindi!');
    } else {
      showToast('QR kodni yuklashda xatolik yuz berdi');
    }
  });

  // Share functionality
  shareBtn.addEventListener('click', async () => {
    const urlToShare = window.location.href.startsWith('http') 
      ? window.location.href 
      : 'https://qalaysan-muhab.vercel.app';

    if (navigator.share) {
      try {
        await navigator.share({
          title: 'qalaysan muhab',
          text: 'Qalaysan muhab - Gorilla Web App',
          url: urlToShare,
        });
        return;
      } catch (err) {
        // Fallback to clipboard if share was cancelled or failed
      }
    }

    // Clipboard copy fallback
    try {
      await navigator.clipboard.writeText(urlToShare);
      showToast('Havola buferga nusxalandi! 🚀');
    } catch (e) {
      showToast('Havolani nusxalash imkoni bo\'lmadi');
    }
  });

  // Toast Helper
  let toastTimer;
  function showToast(message) {
    clearTimeout(toastTimer);
    toastMessage.textContent = message;
    toastMessage.classList.add('show');
    toastTimer = setTimeout(() => {
      toastMessage.classList.remove('show');
    }, 2800);
  }

  // 3D Tilt effect on Gorilla Image & Card
  if (imageWrapper && window.matchMedia('(hover: hover)').matches) {
    imageWrapper.addEventListener('mousemove', (e) => {
      const rect = imageWrapper.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      
      const rotateX = (-y / (rect.height / 2)) * 10;
      const rotateY = (x / (rect.width / 2)) * 10;
      
      imageWrapper.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.03, 1.03, 1.03)`;
    });

    imageWrapper.addEventListener('mouseleave', () => {
      imageWrapper.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
    });
  }
});
