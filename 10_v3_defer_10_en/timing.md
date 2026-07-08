# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Tell me the location for the coordinates one hundred eight p
     2.63s  <ret> 발화 (turn1 첫 프레임)
     3.19s  ⚡SPAN 주입 [d'=0.56s / d_lead=2.24s]: (tool result) That location is Ha Long Bay, Quang Ninh Province, Vietn
     3.22s  agent 발화 시작: <ret> Let’s find that for you. The coordinates correspond to
     3.24s  user  발화 끝
    10.76s  user  발화 시작: That sounds beautiful. Are there any good hotels nearby?
    10.82s  agent 발화 끝
    14.23s  <ret> 발화 (turn3 첫 프레임)
    14.82s  agent 발화 시작: <ret> It truly is a stunning area.
    15.05s  user  발화 끝
    15.23s  ⚡SPAN 주입 [d'=1.00s / d_lead=8.39s]: (tool result) Vinpearl Legend Halong offers rooms from 150 dollars per
    22.66s  agent 발화 시작: Vinpearl Legend Halong is a good option. Vinpearl Legend Hal
    23.21s  agent 발화 끝
    27.98s  user  발화 시작: Can you book me a room there for tonight?
    27.99s  agent 발화 끝
    35.70s  <ret> 발화 (turn6 첫 프레임)
    36.05s  user  발화 끝
    36.30s  agent 발화 시작: <ret> Certainly.
    36.70s  ⚡SPAN 주입 [d'=1.00s / d_lead=4.35s]: (tool result) Booking confirmed. Vinpearl Legend Halong, one room, 150
    40.20s  agent 발화 시작: Your reservation is set. I’ve confirmed one room at Vinpearl
    40.65s  agent 발화 끝
    49.15s  user  발화 시작: Perfect. What's the weather like there right now?
    49.29s  agent 발화 끝
    52.29s  <ret> 발화 (turn9 첫 프레임)
    52.88s  agent 발화 시작: <ret> A crucial detail for any trip!
    52.90s  user  발화 끝
    53.29s  ⚡SPAN 주입 [d'=1.00s / d_lead=6.12s]: (tool result) It’s currently 28 degrees Celsius and partly cloudy.
    59.00s  agent 발화 끝
    59.07s  agent 발화 시작: The weather in Ha Long Bay is twenty-eight degrees Celsius a
    64.32s  user  발화 시작: That sounds lovely. I’m also looking for a good bakery… but 
    64.44s  agent 발화 끝
    69.50s  user  발화 끝
    69.58s  agent 발화 시작: That’s a tricky request without a little more local knowledg
    71.12s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) Bonjour Bakery is highly rated, specializing in French p
    72.33s  agent 발화 시작: <ret> I’ll check on bakeries for you.
    72.34s  agent 발화 끝
    78.72s  agent 발화 끝
