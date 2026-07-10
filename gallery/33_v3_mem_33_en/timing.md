# v3_mem_33_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "Liam",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-23",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in May."
#     },
#     {
#       "date": "2025-11-16",
#       "category": "home",
#       "text": "User's home address is 593 Oak Avenue."
#     },
#     {
#       "date": "2025-11-04",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-22",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-13",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-16",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-10-01",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Meas, good to meet you too. Wha | S2 That sounds great. I was thinking  | S3 …actually, before we get into hiki | S4 Okay, perfect. I’m leaning towards

     0.00s  agent 발화 시작: Hi Liam, I'm Meas! It’s lovely to meet you.
     4.31s  agent 발화 끝
     4.49s  user  발화 시작: Hi Meas, good to meet you too. What time is it in Paris righ
     8.85s  <ret> 발화 (turn2 첫 프레임)
     9.01s  agent 발화 시작: <ret> It’s currently 3:17 PM in Paris. A perfect time to sta
     9.01s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.34s]: (tool result) It is Friday, July 10, 2026 at 3:17 PM in Europe/Paris r
     9.12s  user  발화 끝
    15.26s  user  발화 시작: That's right. I was hoping we could talk about my New Zealan
    15.35s  agent 발화 끝
    19.13s  <ret> 발화 (turn4 첫 프레임)
    19.36s  agent 발화 시작: <ret> Ah, yes! Your New Zealand trip in May. I have a note t
    19.37s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.53s]: [2026-02-23] User is planning a trip to New Zealand in May.
    19.47s  user  발화 끝
    22.68s  user  발화 시작: Yeah, totally.
    23.84s  agent 발화 시작: It's a wonderful time to visit, the weather is lovely then —
    23.89s  agent 발화 끝
    23.97s  user  발화 끝
    29.54s  user  발화 시작: Uh-huh.
    30.18s  user  발화 끝
    35.76s  agent 발화 끝
    36.22s  user  발화 시작: That sounds great. I was thinking about what to do there, ma
    40.81s  agent 발화 시작: Hiking in New Zealand is spectacular! There are trails for e
    40.98s  user  발화 끝
    49.09s  user  발화 시작: …actually, before we get into hiking, do you remember if I m
    49.71s  agent 발화 끝
    56.10s  agent 발화 시작: That’s a good point to clarify. Let’s focus on regions first
    56.13s  user  발화 끝
    58.19s  user  발화 시작: Yeah.
    58.63s  user  발화 끝
    61.23s  agent 발화 끝
    61.34s  user  발화 시작: Okay, perfect. I’m leaning towards the South Island.
    64.86s  user  발화 끝
    64.98s  agent 발화 시작: The South Island is breathtaking! It offers stunning scenery
    76.44s  agent 발화 끝
