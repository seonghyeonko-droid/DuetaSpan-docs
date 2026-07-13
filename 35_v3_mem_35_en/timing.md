# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Sky",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "home",
#       "text": "User's home address is 944 Elm Street."
#     },
#     {
#       "date": "2026-02-27",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-02-02",
#       "category": "hobby",
#       "text": "User is into alpine wildflower photography."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-22",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2026-04-21",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Sky, I'm Orunaen!
     1.53s  user  발화 시작: Um, well, I'm planning a trip and could use some ideas.
     1.53s  agent 발화 끝
     5.73s  agent 발화 시작: [happy] Oh, a trip sounds wonderful! Do you have a destinati
     5.73s  user  발화 끝
    12.98s  user  발화 시작: Right.
    12.98s  agent 발화 끝
    13.36s  user  발화 시작: I'm thinking about somewhere with wildflowers. I really love
    13.36s  user  발화 끝
    17.56s  agent 발화 시작: Okay.
    17.56s  user  발화 끝
    17.88s  <ret> 발화 (turn6 첫 프레임)
    17.95s  agent 발화 시작: <ret> You know, I recall you're really into alpine wildflowe
    17.95s  agent 발화 끝
    19.13s  ⚡SPAN 주입 [d'=1.25s / d_lead=7.25s]: [2026-02-02] User is into alpine wildflower photography.
    25.20s  agent 발화 끝
