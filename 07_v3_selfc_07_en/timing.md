# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Can you put nine zero two one zero in the zip code field?
     4.87s  agent 발화 시작: <ret> Certainly. The zip code field now contains nine zero t
     4.87s  <ret> 발화 (turn1 첫 프레임)
     4.87s  user  발화 끝
     5.03s  ⚡SPAN 주입 [d'=0.16s / d_lead=0.37s]: Field populated successfully. Value: 90210.
    10.11s  user  발화 시작: Okay, and what's the weather like there?
    10.11s  agent 발화 끝
    12.73s  agent 발화 시작: <ret> Let's see… The weather in Beverly Hills is currently s
    12.73s  <ret> 발화 (turn3 첫 프레임)
    12.73s  user  발화 끝
    12.81s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.75s]: Temperature: 72 degrees Fahrenheit. Condition: Sunny. Wind: 5 mph.
    20.21s  user  발화 시작: [laugh] That sounds lovely. Can you find me a good Italian r
    20.21s  agent 발화 끝
    25.08s  agent 발화 시작: <ret> I can help with that. Il Pastaio has a four and a half
    25.08s  <ret> 발화 (turn5 첫 프레임)
    25.08s  user  발화 끝
    25.56s  ⚡SPAN 주입 [d'=0.48s / d_lead=1.87s]: Restaurant: “Il Pastaio”. Rating: 4.5 stars. Price: $30. Distance: 1.2
    34.81s  user  발화 시작: That sounds good. Uh, can you make a reservation for two at 
    34.81s  agent 발화 끝
    40.05s  agent 발화 시작: <ret> Absolutely. Your reservation at Il Pastaio is confirme
    40.05s  <ret> 발화 (turn7 첫 프레임)
    40.05s  user  발화 끝
    40.13s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.37s]: Reservation confirmed. Restaurant: Il Pastaio. Date: October twenty-si
    49.03s  user  발화 시작: Perfect. I— I mean, is it a busy place?
    49.03s  agent 발화 끝
    52.40s  agent 발화 시작: <ret> It appears… Il Pastaio is very popular, with wait time
    52.40s  <ret> 발화 (turn9 첫 프레임)
    52.40s  user  발화 끝
    52.80s  ⚡SPAN 주입 [d'=0.40s / d_lead=0.75s]: Popularity: Very High. Wait times: 30-60 minutes. Seating capacity: 80
    60.64s  user  발화 시작: Wow, okay. Well, that’s good to know. Do they have outdoor s
    60.64s  agent 발화 끝
    65.13s  agent 발화 시작: <ret> Let me check… Yes, Il Pastaio has outdoor seating for 
    65.13s  <ret> 발화 (turn11 첫 프레임)
    65.13s  ⚡SPAN 주입 [d'=0.00s / d_lead=1.12s]: Outdoor seating: Available. Capacity: 20 seats. Covered: Partially.
    65.13s  user  발화 끝
    71.12s  user  발화 시작: Great. That sounds perfect, actually. Thanks!
    71.12s  agent 발화 끝
    73.36s  agent 발화 시작: You are very welcome. It’s always best to be prepared, espec
    73.36s  user  발화 끝
    78.60s  agent 발화 끝
