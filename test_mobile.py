import time
from playwright.sync_api import sync_playwright

def test_mobile():
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        # Mobile viewport (iPhone 12 / SE)
        context = browser.new_context(
            viewport={'width': 375, 'height': 812},
            user_agent='Mozilla/5.0 (iPhone; CPU iPhone OS 14_4 like Mac OS X) AppleWebKit/605.1.15 (KHTML, Gecko) Version/14.0.3 Mobile/15E148 Safari/604.1'
        )
        page = context.new_page()
        
        langs = ['tr', 'en', 'de', 'ar']
        for lang in langs:
            url = f'http://localhost:8080/#{lang}' if lang != 'tr' else 'http://localhost:8080/'
            page.goto(url)
            page.wait_for_load_state('networkidle')
            time.sleep(0.5)
            
            # Header screenshot
            page.screenshot(path=f'C:\\Users\\User\\.gemini\\antigravity\\scratch\\netvizyon_portfolio\\header_{lang}.png', clip={'x': 0, 'y': 0, 'width': 375, 'height': 100})
            
            # Pricing Calculator section screenshot
            pricing_elem = page.locator('#pricing')
            if pricing_elem:
                pricing_elem.scroll_into_view_if_needed()
                time.sleep(0.5)
                page.screenshot(path=f'C:\\Users\\User\\.gemini\\antigravity\\scratch\\netvizyon_portfolio\\calc_{lang}.png')

        browser.close()
        print("Screenshots captured successfully!")

if __name__ == '__main__':
    test_mobile()
