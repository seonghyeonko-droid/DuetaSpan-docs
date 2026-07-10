# v3_fake__13_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fake__13",
#     "name": "Sam",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "home",
#       "text": "User's home address is 962 Maple Drive."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in May."
#     },
#     {
#       "date": "2025-12-25",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-24",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-06-12",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2026-06-03",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 When did the first tv come out in  | S2 I wonder how many people even *had | S3 Oh, so black and white for a while | S4 Did everyone want one?

     0.00s  user  발화 시작: When did the first tv come out in the us?
     2.89s  <ret> 발화 (turn1 첫 프레임)
     2.95s  user  발화 끝
     3.13s  agent 발화 시작: <ret> It’s fascinating to think about beginnings, isn’t it? 
     3.13s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.04s]: The first public demonstration of television in the United States occu
     9.11s  user  발화 시작: Wow.
     9.88s  user  발화 끝
    12.12s  user  발화 시작: Wow, that's earlier than I thought.
    12.18s  agent 발화 끝
    14.62s  agent 발화 시작: It often surprises people! Technology evolves so quickly, it
    14.80s  user  발화 끝
    21.67s  agent 발화 끝
    21.80s  user  발화 시작: What was shown on that first broadcast?
    24.17s  <ret> 발화 (turn6 첫 프레임)
    24.46s  agent 발화 시작: <ret> That first broadcast was quite charming, actually. It 
    24.49s  ⚡SPAN 주입 [d'=0.56s / d_lead=7.14s]: The broadcast featured images of a Felix the Cat cartoon and a brief p
    24.66s  user  발화 끝
    31.60s  agent 발화 끝
    31.83s  user  발화 시작: Felix the Cat! That's fun.
    34.04s  agent 발화 시작: It really is a lovely piece of history. It shows how even ea
    34.09s  user  발화 끝
    37.98s  user  발화 시작: Yeah.
    38.57s  user  발화 끝
    40.53s  agent 발화 끝
    41.62s  user  발화 시작: I wonder how many people even *had* TVs then?
    44.90s  user  발화 끝
    45.01s  agent 발화 시작: Television was still incredibly expensive and rare in those 
    49.07s  agent 발화 끝
    49.77s  user  발화 시작: What kind of resolution did those TVs have?
    52.82s  <ret> 발화 (turn13 첫 프레임)
    53.06s  agent 발화 시작: <ret> Early televisions had quite a limited picture quality,
    53.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.63s]: Early televisions had very low resolution, typically around 30 scan li
    53.10s  user  발화 끝
    56.50s  user  발화 시작: Okay.
    57.13s  user  발화 끝
    59.58s  user  발화 시작: Thirty lines? That sounds…blurry.
    59.69s  agent 발화 끝
    62.81s  user  발화 끝
    62.92s  agent 발화 시작: It was a far cry from what we’re used to today! —
    64.88s  user  발화 시작: …did they broadcast in color right away?
    65.64s  agent 발화 끝
    67.14s  <ret> 발화 (turn18 첫 프레임)
    67.52s  agent 발화 시작: <ret> Commercial color broadcasts didn’t begin until January
    67.54s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.23s]: Commercial color broadcasting in the United States began on January 1,
    67.70s  user  발화 끝
    74.73s  user  발화 시작: Oh, so black and white for a while.
    74.75s  agent 발화 끝
    77.18s  user  발화 끝
    77.29s  agent 발화 시작: Exactly. Black and white television was the standard for man
    80.65s  user  발화 시작: Uh-huh.
    81.28s  user  발화 끝
    83.11s  user  발화 시작: What company made the first commercial TV?
    83.11s  agent 발화 끝
    85.76s  <ret> 발화 (turn23 첫 프레임)
    85.99s  agent 발화 시작: <ret> Philco is frequently recognized for producing one of t
    86.00s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.10s]: Philco is often credited with producing one of the first commercially 
    86.08s  user  발화 끝
    88.72s  user  발화 시작: Oh.
    89.17s  user  발화 끝
    92.92s  agent 발화 시작: It’s remarkable to trace these technological lineages, isn’t
    93.09s  agent 발화 끝
    99.03s  agent 발화 끝
    99.47s  user  발화 시작: Was it expensive to buy one?
   101.41s  <ret> 발화 (turn27 첫 프레임)
   101.46s  agent 발화 시작: <ret> These early televisions were quite a luxury item. They
   101.49s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.46s]: In the late 1930s, televisions cost around $200 to $600, equivalent to
   101.68s  user  발화 끝
   110.85s  user  발화 시작: That’s… a lot of money!
   110.92s  agent 발화 끝
   112.88s  user  발화 끝
   113.12s  agent 발화 시작: It truly was a significant investment. It really underscores
   115.56s  user  발화 시작: Yeah.
   116.24s  user  발화 끝
   118.67s  agent 발화 끝
   119.50s  user  발화 시작: Did everyone want one?
   120.93s  <ret> 발화 (turn32 첫 프레임)
   121.23s  agent 발화 시작: <ret> The appeal grew steadily, but it wasn't instant. Peopl
   121.25s  ⚡SPAN 주입(IRRELEVANT) [d'=2.00s / d_lead=7.05s]: The current temperature in Reykjavik, Iceland is 8.2°C, with partly cl
   121.29s  user  발화 끝
   128.15s  agent 발화 시작: It’s fascinating to consider how these innovations change ou
   128.28s  agent 발화 끝
   129.90s  user  발화 시작: Yeah.
   130.53s  user  발화 끝
   132.82s  agent 발화 끝
   133.03s  user  발화 시작: What did people watch on TV in the 50s?
   135.78s  <ret> 발화 (turn36 첫 프레임)
   136.01s  agent 발화 시작: <ret> The nineteen fifties saw a rise in popular programs li
   136.02s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: Popular programs in the 1950s included "I Love Lucy", "The Honeymooner
   136.07s  user  발화 끝
   143.91s  user  발화 시작: That sounds like a simpler time.
   144.12s  agent 발화 끝
   146.22s  user  발화 끝
   146.24s  agent 발화 시작: In some ways, it was. Television offered a new form of share
   154.44s  agent 발화 끝
