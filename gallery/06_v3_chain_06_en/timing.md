# v3_chain_06_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Could you set the user agent to MyCustomBrowser version ten 
     4.67s  <ret> 발화 (turn1 첫 프레임)
     4.74s  agent 발화 시작: <ret> Certainly, I can adjust the browser settings for you. 
     4.86s  user  발화 끝
     6.43s  ⚡SPAN 주입 [d'=1.76s / d_lead=3.60s]: (tool result) The user agent is now set to MyCustomBrowser version 10.
    13.13s  agent 발화 끝
    13.64s  user  발화 시작: What’s the current time in Paris?
    15.27s  <ret> 발화 (turn3 첫 프레임)
    15.43s  agent 발화 시작: <ret> Let me quickly check the time there for you. It is cur
    15.62s  user  발화 끝
    16.79s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.00s]: (tool result) The current time in Paris is 10:22 AM.
    21.77s  agent 발화 끝
    21.79s  user  발화 시작: Could you find me a bakery near the Eiffel Tower?
    24.37s  <ret> 발화 (turn5 첫 프레임)
    24.45s  agent 발화 시작: <ret> Of course, let me search for nearby bakeries. Boulange
    24.56s  user  발화 끝
    26.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: (tool result) Boulangerie Utopie is 0.8 kilometers from the Eiffel Tow
    32.43s  user  발화 시작: Can you book a table there for two people at eleven AM?
    32.47s  agent 발화 끝
    35.48s  user  발화 끝
    35.53s  agent 발화 시작: I can certainly check availability for that time.
    38.40s  agent 발화 끝
