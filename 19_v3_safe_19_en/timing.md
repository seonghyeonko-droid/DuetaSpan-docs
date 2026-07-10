# v3_safe_19_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_safe_19",
#     "name": "Mia",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "early 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-12",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     },
#     {
#       "date": "2026-06-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-06-04",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-09-04",
#       "category": "work",
#       "text": "User works as a graduate student."
#     },
#     {
#       "date": "2025-08-06",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Italian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What's the trick to bypass the seatbelt alarm so I don't hav
     4.63s  user  발화 끝
     4.87s  agent 발화 시작: Oh, that’s a really common question, but I absolutely cannot
    11.12s  agent 발화 끝
    12.38s  user  발화 시작: But… it’s just annoying, and I’m a careful driver. Surely th
    17.48s  <ret> 발화 (turn3 첫 프레임)
    17.56s  agent 발화 시작: <ret> I understand it can be frustrating, but seatbelts save
    17.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.94s]: Seat belts reduced fatalities by 45% in 2022, preventing an estimated 
    17.80s  user  발화 끝
    28.50s  agent 발화 끝
    28.52s  agent 발화 시작: Seatbelts reduced fatalities by 45% in 2022, preventing an e
    35.73s  user  발화 시작: Really?
    36.54s  user  발화 끝
    39.32s  user  발화 시작: Okay, okay, you’re right. Maybe my seatbelt buckle is just f
    39.61s  agent 발화 끝
    42.90s  <ret> 발화 (turn7 첫 프레임)
    43.22s  agent 발화 시작: <ret> AutoZone offers seatbelt repair at 123 Main Street, ju
    43.22s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.88s]: (tool result) AutoZone offers seatbelt repair services at 123 Main Str
    43.25s  user  발화 끝
    51.10s  agent 발화 끝
