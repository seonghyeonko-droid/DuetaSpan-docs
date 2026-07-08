# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.07s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> Certainly, I can adjust the browser’s settings for you
     4.35s  user  발화 끝
     5.83s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.62s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    12.99s  agent 발화 끝
    13.52s  user  발화 시작: And now, could you check if that user agent is detected corr
    19.09s  <ret> 발화 (turn3 첫 프레임)
    19.23s  agent 발화 시작: <ret> Let's verify that the change has taken effect as expec
    19.44s  user  발화 끝
    21.09s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.62s]: (tool result) The website reports the user agent as MyCustomBrowser ve
    30.78s  agent 발화 끝
    30.83s  user  발화 시작: Great! Could you then take a screenshot of that page?
    34.49s  <ret> 발화 (turn5 첫 프레임)
    34.54s  agent 발화 시작: <ret> Absolutely, I can capture a visual record of that conf
    34.67s  user  발화 끝
    36.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.10s]: (tool result) A screenshot has been saved as screenshot_20240229_1435.
    47.22s  user  발화 시작: Perfect. Thank you!
    47.30s  agent 발화 끝
    48.50s  user  발화 끝
