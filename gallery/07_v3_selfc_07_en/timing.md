# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)

     0.00s  user  발화 시작: Set up a viewing for me at The Grandview Lofts on June fifte
     3.42s  <ret> 발화 (turn1 첫 프레임)
     3.56s  user  발화 끝
     3.65s  agent 발화 시작: <ret> Certainly, let’s see about arranging that for you. You
     4.46s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.95s]: (tool result) A viewing at The Grandview Lofts is scheduled for June f
    11.72s  user  발화 시작: Is there parking available at the building?
    11.76s  agent 발화 끝
    13.68s  <ret> 발화 (turn3 첫 프레임)
    13.84s  agent 발화 시작: <ret> That's a good question to ask beforehand. Parking is a
    13.98s  user  발화 끝
    15.12s  ⚡SPAN 주입 [d'=1.44s / d_lead=3.21s]: (tool result) The Grandview Lofts offers validated parking in the adja
    22.56s  agent 발화 끝
    22.74s  user  발화 시작: And what about pet restrictions?
    24.28s  <ret> 발화 (turn5 첫 프레임)
    24.52s  agent 발화 시작: <ret> Many buildings have those, it's wise to check. Cats an
    24.59s  user  발화 끝
    26.12s  ⚡SPAN 주입 [d'=1.84s / d_lead=3.00s]: (tool result) The Grandview Lofts allows cats and small dogs under twe
    32.40s  agent 발화 끝
    32.61s  user  발화 시작: That’s good to know— I mean, my terrier is about thirty poun
    35.58s  <ret> 발화 (turn7 첫 프레임)
    35.74s  agent 발화 시작: <ret> It sounds like we need to refine that search a little…
    35.92s  user  발화 끝
    37.58s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.10s]: (tool result) No properties match your criteria within The Grandview L
    43.94s  agent 발화 끝
    44.65s  user  발화 시작: Are there any other buildings nearby with similar floor plan
    48.68s  user  발화 끝
    48.94s  agent 발화 시작: —but there are other options we can explore.
    51.24s  user  발화 시작: Specifically, I’m hoping for two bedrooms and a balcony.
    51.43s  agent 발화 끝
    54.24s  <ret> 발화 (turn11 첫 프레임)
    54.31s  agent 발화 시작: <ret> Absolutely, let's broaden the search to nearby buildin
    54.48s  user  발화 끝
    56.24s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.69s]: (tool result) The Astoria and The Belvedere both have two-bedroom unit
    63.07s  agent 발화 끝
    64.11s  user  발화 시작: Tell me more about The Astoria.
    65.56s  <ret> 발화 (turn13 첫 프레임)
    65.78s  agent 발화 시작: <ret> I can certainly give you details on that building. The
    65.85s  user  발화 끝
    66.60s  ⚡SPAN 주입 [d'=1.04s / d_lead=3.47s]: (tool result) The Astoria was built in 2018 and has a rooftop terrace.
    74.25s  user  발화 시작: Does The Astoria also have parking?
    74.27s  agent 발화 끝
    76.33s  <ret> 발화 (turn15 첫 프레임)
    76.48s  agent 발화 시작: <ret> Parking is often a key consideration for renters. Vale
    76.60s  user  발화 끝
    78.25s  ⚡SPAN 주입 [d'=1.92s / d_lead=3.24s]: (tool result) The Astoria offers valet parking for a monthly fee of tw
    84.17s  agent 발화 끝
    84.29s  user  발화 시작: That’s a bit pricey. What about The Belvedere?
    86.35s  <ret> 발화 (turn17 첫 프레임)
    86.66s  agent 발화 시작: <ret> Let’s compare the parking options at The Belvedere. Se
    86.69s  user  발화 끝
    86.85s  ⚡SPAN 주입 [d'=0.50s / d_lead=2.78s]: (tool result) The Belvedere has self-parking available for one hundred
    93.45s  user  발화 시작: That sounds better. Can we schedule a viewing there for next
    93.61s  agent 발화 끝
    97.92s  <ret> 발화 (turn19 첫 프레임)
    98.08s  user  발화 끝
    98.14s  agent 발화 시작: <ret> I can check availability for a viewing next Tuesday. Y
    99.04s  ⚡SPAN 주입 [d'=1.12s / d_lead=3.32s]: (tool result) A viewing at The Belvedere is scheduled for next Tuesday
   106.25s  agent 발화 끝
   106.49s  user  발화 시작: Great. Send me a reminder the day before.
   108.56s  <ret> 발화 (turn21 첫 프레임)
   108.66s  agent 발화 시작: <ret> Absolutely, I can set that up for you now. I’ve set a 
   108.88s  user  발화 끝
   110.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.21s]: (tool result) A reminder for your Belvedere viewing is set for next Mo
   116.50s  agent 발화 끝
