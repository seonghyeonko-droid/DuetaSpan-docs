# v3_mcp_00_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you give me the coordinates for the Eiffel Tower in Pari
     2.86s  <ret> 발화 (turn1 첫 프레임)
     3.10s  agent 발화 시작: <ret> Let’s see if I can pinpoint that iconic landmark for y
     3.23s  user  발화 끝
     3.90s  ⚡SPAN 주입 [d'=1.04s / d_lead=4.27s]: (tool result) The Eiffel Tower is located at 48.8584° N, 2.2945° E.
    15.43s  user  발화 시작: Great. And how far is that from, uh, the Louvre?
    15.53s  agent 발화 끝
    18.35s  <ret> 발화 (turn3 첫 프레임)
    18.75s  agent 발화 시작: <ret> Comparing distances is always a good way to get your b
    19.04s  user  발화 끝
    20.35s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.86s]: (tool result) The distance between the Eiffel Tower and the Louvre is 
    21.59s  user  발화 시작: Yeah.
    22.22s  user  발화 끝
    26.05s  user  발화 시작: Okay, could you give me walking directions?
    26.11s  agent 발화 끝
    28.33s  <ret> 발화 (turn6 첫 프레임)
    28.65s  agent 발화 시작: <ret> Certainly, a walk between them would be quite pleasant
    28.78s  user  발화 끝
    29.69s  ⚡SPAN 주입 [d'=1.36s / d_lead=3.26s]: (tool result) Walk southwest on Quai Branly. Turn right onto Pont d'Ié
    36.62s  agent 발화 끝
