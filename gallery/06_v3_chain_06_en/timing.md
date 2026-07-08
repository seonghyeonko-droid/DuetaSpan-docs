# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.25s  <ret> 발화 (turn1 첫 프레임)
     4.33s  agent 발화 시작: <ret> Let's adjust your browser settings— Your browser’s use
     4.49s  user  발화 끝
     5.29s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.19s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    12.21s  agent 발화 끝
    12.68s  user  발화 시작: Uh, can you check if that worked, by visiting whatismyuserag
    17.32s  <ret> 발화 (turn3 첫 프레임)
    17.48s  agent 발화 시작: <ret> Of course, I can verify that change— The website confi
    17.67s  user  발화 끝
    18.84s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.03s]: (tool result) The page reports the user agent as MyCustomBrowser versi
    27.44s  agent 발화 끝
    27.47s  user  발화 시작: Right. Good. Now, could you search for recipes using blackbe
    31.96s  <ret> 발화 (turn5 첫 프레임)
    32.04s  agent 발화 시작: <ret> A delightful combination, let’s find some recipes— I f
    32.15s  user  발화 끝
    33.96s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.70s]: (tool result) Search found three results: “Blackberry Lavender Scones”
    41.47s  user  발화 시작: Ooh, the scones sound lovely! Can you pull up the full recip
    41.55s  agent 발화 끝
    45.59s  agent 발화 시작: Certainly, let's get those scone details
    45.63s  user  발화 끝
    48.64s  agent 발화 끝
