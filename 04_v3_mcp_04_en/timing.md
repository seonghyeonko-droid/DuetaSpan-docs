# v3_mcp_04_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: What's the bus schedule from Seattle to Portland on March te
     5.86s  agent 발화 시작: <ret> Certainly. The bus departs Seattle at eight fifteen AM
     5.86s  <ret> 발화 (turn1 첫 프레임)
     5.86s  user  발화 끝
     6.10s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.42s]: Departure time: 8:15 AM. Arrival time: 12:47 PM. Price: fifty-five dol
    14.22s  user  발화 시작: Hmm, that’s early. Are there any later buses?
    14.22s  agent 발화 끝
    17.57s  agent 발화 시작: <ret> Let me check. There is a bus departing at three forty-
    17.57s  <ret> 발화 (turn3 첫 프레임)
    17.57s  user  발화 끝
    18.57s  ⚡SPAN 주입 [d'=1.00s / d_lead=1.25s]: Departure time: 3:47 PM. Arrival time: 8:29 PM. Price: sixty-two dolla
    25.93s  user  발화 시작: Okay, book me a ticket on the three forty-seven bus.
    25.93s  agent 발화 끝
    30.11s  agent 발화 시작: <ret> Absolutely. Your ticket is booked; the confirmation nu
    30.11s  <ret> 발화 (turn5 첫 프레임)
    30.11s  user  발화 끝
    30.35s  ⚡SPAN 주입 [d'=0.24s / d_lead=0.42s]: Confirmation number: G749L. Passenger: one. Bus ID: 71X. Date: March t
    36.80s  user  발화 시작: Great. You know, it’s funny how easily we forget even simple
    36.80s  agent 발화 끝
    41.82s  agent 발화 시작: The brain is remarkably adept at prioritizing information, o
    41.82s  user  발화 끝
    51.44s  agent 발화 끝
