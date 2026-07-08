# v3_fstart_18_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you navigate me to the Alamo?
     1.63s  <ret> 발화 (turn1 첫 프레임)
     1.79s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.41s]: (tool result) The Alamo is 306 Alamo Plaza, San Antonio, Texas, 78205.
     2.22s  agent 발화 시작: <ret> Certainly. The Alamo is located at 306 Alamo Plaza in 
     2.45s  user  발화 끝
     7.59s  agent 발화 끝
     8.96s  user  발화 시작: Uh, what’s the weather like there right now?
    10.83s  <ret> 발화 (turn3 첫 프레임)
    11.43s  agent 발화 시작: <ret> Let me check that for you. It's currently eighty-five 
    11.54s  user  발화 끝
    11.83s  ⚡SPAN 주입 [d'=1.00s / d_lead=2.30s]: (tool result) It is currently 85 degrees Fahrenheit and sunny in San A
    17.96s  agent 발화 끝
    18.71s  user  발화 시작: Eighty-five? Wow, that’s…hot.
    21.67s  user  발화 끝
    21.71s  agent 발화 시작: It is quite warm for this time of year, yes.
    24.20s  agent 발화 끝
