# v3_selfc_07_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_07",
#     "name": "Sophie",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "60s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-29",
#       "category": "diet",
#       "text": "User is keto."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "plant",
#       "text": "User is growing a few succulents at home."
#     },
#     {
#       "date": "2026-04-06",
#       "category": "coffee",
#       "text": "User's usual coffee order is black drip coffee."
#     },
#     {
#       "date": "2025-12-28",
#       "category": "bloodtype",
#       "text": "User's blood type is O-."
#     },
#     {
#       "date": "2025-12-10",
#       "category": "work",
#       "text": "User works as a web developer."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "floor",
#       "text": "User lives on the 8th floor."
#     },
#     {
#       "date": "2025-12-06",
#       "category": "child",
#       "text": "User has a child named Minjun, age 4."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-07",
#       "title": "Booking a moving company",
#       "bullets": [
#         "moving a 2-bedroom apartment across town on the 30th",
#         "needs help disassembling furniture"
#       ]
#     },
#     {
#       "date": "2026-03-09",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool and a sauna",
#         "prefers one within 10 minutes of the office"
#       ]
#     },
#     {
#       "date": "2025-12-19",
#       "title": "Choosing a preschool",
#       "bullets": [
#         "wants one within walking distance",
#         "asked about hours and monthly fees"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I want a hatchback in Tokyo, Japan from December first to De
     4.36s  <ret> 발화 (turn1 첫 프레임)
     4.48s  user  발화 끝
     4.56s  agent 발화 시작: <ret> Hmm, that's tricky. It looks like there aren't any hat
     5.64s  ⚡SPAN 주입 [d'=1.28s / d_lead=5.71s]: (tool result) (no information found)
     6.54s  user  발화 시작: Yeah.
     7.46s  user  발화 끝
    10.13s  user  발화 시작: Oh— wait, December eighth to December twelfth instead.
    10.27s  agent 발화 끝
    14.44s  <ret> 발화 (turn4 첫 프레임)
    14.71s  user  발화 끝
    14.90s  agent 발화 시작: <ret> Still nothing showing for a hatchback, I'm afraid. Per
    15.33s  ⚡SPAN 주입 [d'=0.89s / d_lead=4.32s]: (tool result) (no information found)
    19.22s  agent 발화 끝
    19.26s  user  발화 시작: Okay, a sedan then.
    20.45s  <ret> 발화 (turn6 첫 프레임)
    20.86s  agent 발화 시작: <ret> That's… unusual. All car types seem unavailable then. 
    20.86s  user  발화 끝
    21.95s  ⚡SPAN 주입 [d'=1.50s / d_lead=7.14s]: (tool result) (no information found)
    27.99s  agent 발화 끝
    28.02s  agent 발화 시작: I'm Drioia, by the way. I specialize in smoothing out travel
    31.99s  agent 발화 끝
