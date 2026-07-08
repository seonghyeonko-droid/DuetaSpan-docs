# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Update the data report to say 'Critical Alert'.
     2.55s  <ret> 발화 (turn1 첫 프레임)
     2.55s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.36s]: (tool result) The page updated successfully. The heading now reads “Cr
     3.14s  agent 발화 시작: <ret> Certainly. The data report has been updated to display
     3.24s  user  발화 끝
     8.15s  agent 발화 끝
     8.72s  user  발화 시작: Good. Now, can you find me hotels in Lisbon?
    11.73s  <ret> 발화 (turn3 첫 프레임)
    12.21s  ⚡SPAN 주입 [d'=0.48s / d_lead=0.86s]: (tool result) Hotel Lisboa Plaza offers rooms from 112 euros per night
    12.32s  agent 발화 시작: <ret> Of course. Hotel Lisboa Plaza has rooms available star
    12.55s  user  발화 끝
    19.64s  agent 발화 끝
    19.66s  user  발화 시작: That sounds alright. What’s the weather like there right now
    22.98s  <ret> 발화 (turn5 첫 프레임)
    23.55s  agent 발화 시작: <ret> Let me check. The temperature in Lisbon is currently t
    23.65s  user  발화 끝
    23.79s  ⚡SPAN 주입 [d'=0.80s / d_lead=1.25s]: (tool result) It is currently 24 degrees Celsius and sunny in Lisbon.
    29.27s  user  발화 시작: Hmm, twenty-four degrees… book me a room there for two night
    29.39s  agent 발화 끝
    33.01s  <ret> 발화 (turn7 첫 프레임)
    33.17s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.80s]: (tool result) Booking confirmed. Hotel Lisboa Plaza, two nights, 224 e
    33.60s  agent 발화 시작: <ret> Right away. Your reservation at Hotel Lisboa Plaza is 
    33.71s  user  발화 끝
    41.24s  agent 발화 끝
    41.40s  user  발화 시작: Perfect. And can you find a good restaurant nearby?
    44.24s  <ret> 발화 (turn9 첫 프레임)
    44.83s  agent 발화 시작: <ret> I can certainly do that. Cervejaria Ramiro, a Portugue
    44.91s  user  발화 끝
    45.24s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.25s]: (tool result) Cervejaria Ramiro is 0.8 kilometers away and serves Port
    52.94s  agent 발화 끝
    53.17s  user  발화 시작: Seafood sounds fantastic. Is it highly rated?
    56.96s  agent 발화 시작: Many consider it to be among the best seafood restaurants in
    56.96s  user  발화 끝
    60.57s  agent 발화 끝
