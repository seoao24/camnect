'use client';
import { useEffect } from 'react';

export default function ChatwootScript() {
	useEffect(() => {
		// Tạo script element
		const script = document.createElement('script');
		script.innerHTML = `
      (function(d,t) {
        var BASE_URL="https://app.chatwoot.com";
        var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
        g.src=BASE_URL+"/packs/js/sdk.js";
        g.defer = true;
        g.async = true;
        s.parentNode.insertBefore(g,s);
        g.onload=function(){
          window.chatwootSDK.run({
            websiteToken: '3BgKxX4LkvxHsYLQtJp1eYe7',
            baseUrl: BASE_URL
          })
        }
      })(document,"script");
    `;

		// Thêm script vào document
		document.body.appendChild(script);

		// Cleanup function khi component unmount
		return () => {
			document.body.removeChild(script);
		};
	}, []);

	// Component này không render gì cả
	return null;
}
