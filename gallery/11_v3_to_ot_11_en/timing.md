# v3_to_ot_11_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "Jamie",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-11-07",
#       "category": "home",
#       "text": "User's home address is 960 Oak Avenue."
#     },
#     {
#       "date": "2025-10-14",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-07-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-29",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-05",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Ana, I was wondering, what is t | S2 I've heard it's relatively easy to | S3 Twenty-four letters, that’s not ba | S4 …but is Hangul still used today, o

     0.00s  user  발화 시작: Hi Ana, I was wondering, what is the name of the Korean alph
     4.85s  agent 발화 시작: Mhm.
     4.85s  user  발화 끝
     4.98s  <ret> 발화 (turn2 첫 프레임)
     5.22s  agent 발화 시작: <ret> The native alphabet of the Korean language is called H
     5.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.44s]: Hangul is the native alphabet of the Korean language, and it was creat
     5.22s  agent 발화 끝
    15.66s  user  발화 시작: Okay.
    15.66s  agent 발화 끝
    16.03s  user  발화 시작: That's interesting! Is it a phonetic alphabet?
    16.03s  user  발화 끝
    18.64s  agent 발화 시작: Yes, it is! Hangul is remarkably phonetic, meaning the shape
    18.64s  user  발화 끝
    27.96s  user  발화 시작: I've heard it's relatively easy to learn compared to Chinese
    27.96s  agent 발화 끝
    32.06s  agent 발화 시작: Uh-huh.
    32.06s  user  발화 끝
    32.36s  <ret> 발화 (turn8 첫 프레임)
    32.44s  agent 발화 시작: <ret> You’ve heard correctly. Compared to the thousands of C
    32.44s  agent 발화 끝
    33.24s  ⚡SPAN 주입 [d'=0.88s / d_lead=1.12s]: Compared to the thousands of Chinese characters, Hangul consists of on
    43.99s  user  발화 시작: Twenty-four letters, that’s not bad at all. What are some of
    43.99s  agent 발화 끝
    49.59s  agent 발화 시작: Mhm.
    49.59s  user  발화 끝
    49.96s  agent 발화 시작: Well, the basic vowels are ɑ, ə, e, i, o, and u—
    49.96s  agent 발화 끝
    54.43s  user  발화 시작: …but is Hangul still used today, or is it mostly replaced by
    54.43s  agent 발화 끝
    59.33s  <ret> 발화 (turn13 첫 프레임)
    59.65s  agent 발화 시작: <ret> Hangul remains the official writing system in both Nor
    59.65s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.69s]: Hangul is the official writing system in both North and South Korea, a
    59.65s  user  발화 끝
    69.35s  agent 발화 끝
