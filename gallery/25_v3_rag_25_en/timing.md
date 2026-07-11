# v3_rag_25_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_25",
#     "name": "Charlie",
#     "location": {
#       "city": "London",
#       "country": "United Kingdom",
#       "timezone": "Europe/London (GMT, UTC+0)",
#       "currency": "GBP (£)"
#     },
#     "nationality": "British",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-28",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-26",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-09-07",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2025-07-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-27",
#       "category": "home",
#       "text": "User's home address is 513 Oak Avenue."
#     },
#     {
#       "date": "2025-07-17",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-10-16",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-09-14",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Hi Fiaia, I'm trying to settle in  | S2 Welterweight, okay. What’s the dif | S3 So, a good ten to fourteen pound d | S4 Oh, okay. Good to know. Thanks, Fi

     0.00s  user  발화 시작: Hi Fiaia, I'm trying to settle in here.
     3.05s  user  발화 끝
     3.19s  agent 발화 시작: Welcome to the city!
     4.61s  agent 발화 끝
     4.72s  user  발화 시작: I was reading about Trevor Prangley, the fighter?
     7.26s  <ret> 발화 (turn3 첫 프레임)
     7.31s  user  발화 끝
     7.33s  agent 발화 시작: <ret> He actually fought in two different weight classes—Lig
     7.34s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.42s]: Trevor Prangley competed in Lightweight and Welterweight divisions dur
    10.47s  user  발화 시작: Yeah.
    10.92s  user  발화 끝
    12.74s  agent 발화 끝
    13.07s  user  발화 시작: Welterweight, okay. What’s the difference between those two?
    15.79s  <ret> 발화 (turn6 첫 프레임)
    16.11s  agent 발화 시작: <ret> Generally, Lightweight is for boxers weighing between 
    16.11s  ⚡SPAN 주입 [d'=2.00s / d_lead=11.64s]: Lightweight is generally for boxers weighing between 135 and 140 pound
    16.26s  user  발화 끝
    23.38s  user  발화 시작: Yeah.
    23.68s  user  발화 끝
    27.21s  user  발화 시작: So, a good ten to fourteen pound difference.
    27.74s  agent 발화 끝
    29.79s  agent 발화 시작: That's right, it can be quite a significant difference—
    29.80s  user  발화 끝
    31.75s  user  발화 시작: …do you know if he ever fought any famous opponents in Welte
    32.37s  agent 발화 끝
    35.06s  <ret> 발화 (turn11 첫 프레임)
    35.45s  agent 발화 시작: <ret> He did face Vernon Forrest in a Welterweight bout on D
    35.46s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.11s]: Trevor Prangley faced Vernon Forrest in a Welterweight bout on Decembe
    35.68s  user  발화 끝
    43.56s  agent 발화 끝
    43.61s  user  발화 시작: Oh, okay. Good to know. Thanks, Fiaia.
    45.59s  user  발화 끝
    45.64s  agent 발화 시작: You’re very welcome!
    47.02s  agent 발화 끝
