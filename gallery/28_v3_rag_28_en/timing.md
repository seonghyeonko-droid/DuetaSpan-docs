# v3_rag_28_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "Remy",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-17",
#       "category": "home",
#       "text": "User's home address is 365 Cedar Lane."
#     },
#     {
#       "date": "2026-03-01",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-01",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-10-16",
#       "category": "work",
#       "text": "User works as a architect."
#     },
#     {
#       "date": "2025-09-01",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi, how many members of parliament | S2 543? That seems like a lot. How ma | S3 Two… interesting. What about the N | S4 314, okay. That’s good to know. Th

     0.00s  user  발화 시작: Hi, how many members of parliament are there in the Lok Sabh
     0.00s  <ret> 발화 (turn1 첫 프레임)
     0.10s  agent 발화 시작: <ret> Well, the Lok Sabha has a total of 543 members of parl
     0.10s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: The Lok Sabha (House of the People) has a total of 543 members of parl
     0.10s  user  발화 끝
     0.14s  <ret> 발화 (turn3 첫 프레임)
     0.26s  <ret> 발화 (turn6 첫 프레임)
     0.27s  user  발화 시작: 543? That seems like a lot. How many are nominated, not dire
     0.27s  agent 발화 끝
     0.38s  agent 발화 시작: <ret> Actually, of those 543 members, 2 are nominated by the
     0.38s  ⚡SPAN 주입 [d'=0.17s / d_lead=0.17s]: Of the 543 members in the Lok Sabha, 2 are nominated by the President 
     0.38s  user  발화 끝
     0.55s  user  발화 시작: Nice.
     0.55s  agent 발화 끝
     0.55s  user  발화 시작: Two… interesting. What about the NDA? How many MPs do *they*
     0.55s  user  발화 끝
     0.66s  agent 발화 시작: <ret> the National Democratic Alliance currently holds 314 s
     0.66s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: As of March 18, 2024, the National Democratic Alliance (NDA) has 314 m
     0.66s  user  발화 끝
     0.79s  user  발화 시작: Wow.
     0.79s  agent 발화 끝
     0.80s  user  발화 시작: 314, okay. That’s good to know. Thanks!
     0.80s  user  발화 끝
     0.86s  agent 발화 시작: You’re very welcome! Knowing those numbers can help you foll
     0.86s  user  발화 끝
     1.00s  agent 발화 끝
