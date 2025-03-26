const ua = navigator.userAgent;
const os = navigator.platform;
const screenWidth = screen.width;
const screenHeight = screen.height;
const availWidth = screen.availWidth;
const availHeight = screen.availHeight;
const currentDate = new Date();
const date = currentDate.toLocaleDateString('fi-FI', { day: 'numeric', month: 'long', year: 'numeric' });
const time = currentDate.toLocaleTimeString('fi-FI', { hour: '2-digit', minute: '2-digit' });

// Browser name and version using regex
const browser = /chrome|firefox|safari|edge|msie/i.exec(ua) ? ua.match(/(chrome|firefox|safari|edge|msie)\/([0-9.]+)/i)[0] : "Unknown Browser";

// Display Information
document.querySelector('#target').innerHTML = `
    <p>Browser: ${browser}</p>
    <p>Operating System: ${os}</p>
    <p>Screen Width and Height: ${screenWidth}px, ${screenHeight}px</p>
    <p>Available Screen Width and Height: ${availWidth}px, ${availHeight}px</p>
    <p>Current Date and Time: ${date}, ${time}</p>
`;
