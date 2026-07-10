# v3_pers_37_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_pers_37",
#     "name": "Henri",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-19",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     },
#     {
#       "date": "2026-02-26",
#       "category": "trip",
#       "text": "User is planning a trip to Vietnam in December."
#     },
#     {
#       "date": "2026-02-12",
#       "category": "home",
#       "text": "User's home address is 517 Cedar Lane."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "work",
#       "text": "User works as a software engineer."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-02",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
#     {
#       "date": "2025-11-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Laen… that’s a pretty unusual name | S2 Welll… work’s been really intense, | S3 It’s just… everything. Deadlines,  | S4 Maybe. I don’t know if anything wi

     0.00s  agent 발화 시작: Hello Henri, it’s lovely to meet you. My name is Laen, and I
     5.47s  user  발화 시작: Okay.
     6.06s  user  발화 끝
     7.14s  agent 발화 끝
     8.06s  user  발화 시작: Laen… that’s a pretty unusual name. What exactly do you *do*
    12.69s  user  발화 끝
    13.06s  agent 발화 시작: I’m a counselor, Henri. I help people find ways to manage st
    16.40s  user  발화 시작: Uh-huh.
    16.94s  user  발화 끝
    22.70s  agent 발화 시작: Sometimes, just acknowledging what’s weighing on you is a go
    22.90s  agent 발화 끝
    31.14s  agent 발화 끝
    31.35s  user  발화 시작: Welll… work’s been really intense, and I feel like I’m const
    35.59s  agent 발화 시작: That sounds incredibly draining, Henri. Feeling constantly b
    35.70s  user  발화 끝
    41.55s  user  발화 시작: Yeah.
    42.19s  user  발화 끝
    44.77s  agent 발화 끝
    46.03s  user  발화 시작: It’s just… everything. Deadlines, meetings, emails… it never
    54.23s  user  발화 끝
    54.61s  agent 발화 시작: It’s completely understandable to feel overwhelmed when face
    62.35s  user  발화 시작: Yeah.
    62.99s  user  발화 끝
    64.67s  agent 발화 끝
    65.57s  user  발화 시작: Maybe. I don’t know if anything will actually help, though.
    68.89s  user  발화 끝
