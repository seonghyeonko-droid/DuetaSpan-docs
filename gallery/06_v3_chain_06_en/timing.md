# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.42s  <ret> 발화 (turn1 첫 프레임)
     4.49s  agent 발화 시작: <ret> Certainly, I can adjust the browser settings for you. 
     4.68s  user  발화 끝
     6.42s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.85s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    11.51s  user  발화 시작: Right.
    12.28s  user  발화 끝
    13.90s  agent 발화 끝
    14.66s  user  발화 시작: That’s great. Now, could you check what my IP address appear
    19.48s  <ret> 발화 (turn4 첫 프레임)
    19.71s  agent 발화 시작: <ret> Of course, let’s see what your public IP address shows
    19.86s  user  발화 끝
    19.98s  ⚡SPAN 주입 [d'=0.50s / d_lead=4.94s]: (tool result) Your public IP address is 203.0.113.42, and your locatio
    32.06s  agent 발화 끝
    32.44s  user  발화 시작: Hmm, Seattle? That's odd. Can you search for nearby bakeries
    38.22s  <ret> 발화 (turn6 첫 프레임)
    38.54s  agent 발화 시작: <ret> A search for highly-rated bakeries sounds lovely.
    38.69s  user  발화 끝
    40.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.47s]: (tool result) Dahlia Bakery is 0.8 miles away, rated 5 stars; The Crèm
    42.01s  agent 발화 끝
