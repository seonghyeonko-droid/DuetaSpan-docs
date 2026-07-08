# v3_mcp_03_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: How much does it cost to enter the Summer Palace?
     3.02s  <ret> 발화 (turn1 첫 프레임)
     3.62s  agent 발화 시작: <ret> That’s a popular question! Admission to the Summer Pal
     3.83s  user  발화 끝
     4.02s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.71s]: (tool result) Entrance to the Summer Palace costs 30 yuan.
     8.75s  agent 발화 끝
    10.17s  user  발화 시작: Okay, and are there any guided tours available today?
    13.00s  <ret> 발화 (turn3 첫 프레임)
    13.00s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.56s]: (tool result) Guided tours are available at 10:00 AM, 2:00 PM, and 4:0
    13.60s  agent 발화 시작: <ret> Absolutely, let me check. Tours are available at ten A
    13.69s  user  발화 끝
    19.71s  user  발화 시작: I— I mean, can you book me one for two PM?
    19.86s  agent 발화 끝
    22.88s  <ret> 발화 (turn5 첫 프레임)
    22.88s  ⚡SPAN 주입 [d'=0.00s / d_lead=0.56s]: (tool result) A tour is booked for you at the Summer Palace at 2:00 PM
    23.46s  user  발화 끝
    23.47s  agent 발화 시작: <ret> Certainly. Your two PM tour is confirmed; the number i
    29.55s  user  발화 시작: Great, thanks!
    29.68s  agent 발화 끝
    30.84s  user  발화 끝
