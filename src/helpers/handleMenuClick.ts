
const handleMenuClick = () => {

  const mobileLinks = document.getElementById('mobileNavLinks');
  const hamburger = document.getElementById('hamburgerIcon');
  if(!mobileLinks || !hamburger) return;
  const display = window.getComputedStyle(mobileLinks, null).display;

  // flip the display property of the mobile menu links
  if(display === 'none') {
    mobileLinks.style.display = 'flex';
    hamburger.style.border = '1px solid white';
  } else {
    mobileLinks.style.display = 'none';
    hamburger.style.border = '1px solid var(--background-primary)';
  }
};

export default handleMenuClick;