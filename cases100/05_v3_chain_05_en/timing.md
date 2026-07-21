# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Morgan",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-14",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-04-18",
#       "category": "medication",
#       "text": "User takes an inhaler for asthma."
#     },
#     {
#       "date": "2026-04-14",
#       "category": "gym",
#       "text": "User has a gym membership near the office."
#     },
#     {
#       "date": "2026-03-14",
#       "category": "work",
#       "text": "User works as a flight attendant."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "hobby",
#       "text": "User is into board-game design."
#     },
#     {
#       "date": "2026-02-04",
#       "category": "commute",
#       "text": "User takes the subway to work."
#     },
#     {
#       "date": "2026-01-15",
#       "category": "child",
#       "text": "User has a child named Ava, age 17."
#     },
#     {
#       "date": "2025-12-14",
#       "category": "floor",
#       "text": "User lives on the 2nd floor."
#     },
#     {
#       "date": "2025-12-05",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-13",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     },
#     {
#       "date": "2026-01-27",
#       "title": "Meal-prep planning",
#       "bullets": [
#         "wants high-protein lunches under 600 calories",
#         "avoiding dairy this month"
#       ]
#     },
#     {
#       "date": "2026-01-20",
#       "title": "Studying for the TOEIC",
#       "bullets": [
#         "target score is 850",
#         "exam is in about six weeks"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 I need to get train tickets from A | S2 Oh. | S3 Maybe a flight is better. Can you  | S4 …one-way flights from Atlanta to M

     0.00s  user  발화 시작: I need to get train tickets from Atlanta to Miami for three 
     4.46s  agent 발화 시작: Yeah.
     5.13s  agent 발화 끝
     7.60s  <ret> 발화 (turn2 첫 프레임)
     8.18s  agent 발화 시작: <ret> [sigh] Unfortunately, I'm not finding any direct train
     8.34s  user  발화 끝
     8.62s  ⚡SPAN 주입 [d'=1.03s / d_lead=4.81s]: (no information found)
    12.99s  agent 발화 끝
    13.41s  user  발화 시작: Oh.
    13.91s  user  발화 끝
    14.12s  agent 발화 시작: Amtrak doesn’t currently offer service directly between Atla
    19.95s  user  발화 시작: Yeah.
    20.40s  user  발화 끝
    26.22s  agent 발화 시작: It would involve a transfer and take approximately twenty-ei
    26.25s  agent 발화 끝
    32.46s  user  발화 시작: Yeah, totally.
    33.86s  user  발화 끝
    35.14s  user  발화 시작: Maybe a flight is better. Can you search for…
    35.23s  agent 발화 끝
    38.65s  user  발화 끝
    39.84s  user  발화 시작: …one-way flights from Atlanta to Miami on May fifteenth?
    43.16s  <ret> 발화 (turn10 첫 프레임)
    43.56s  agent 발화 시작: <ret> [happy] I found a few one-way flights from Atlanta to 
    43.72s  user  발화 끝
    44.77s  ⚡SPAN 주입 [d'=1.61s / d_lead=25.38s]: (tool result) {"flights": [{"airline": "Delta", "flight number": "DL12
    68.95s  agent 발화 끝
