# v3_abs_22_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "Felix",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-16",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-05-01",
#       "category": "home",
#       "text": "User's home address is 620 Elm Street."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-01-29",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-01-13",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: What group was neutral about this issue as they felt the sub
     4.80s  <ret> 발화 (turn1 첫 프레임)
     4.88s  agent 발화 시작: <ret> But unfortunately, I don’t have information about any 
     4.88s  user  발화 끝
     5.50s  ⚡SPAN 주입 [d'=0.70s / d_lead=4.53s]: (no information found)
     9.40s  user  발화 시작: Oh, okay. Well, could you tell me about the Pomodoro Techniq
     9.40s  agent 발화 끝
    13.24s  agent 발화 시작: Yeah.
    13.24s  user  발화 끝
    13.58s  agent 발화 시작: [happy] Absolutely! The Pomodoro Technique is a time managem
    13.58s  agent 발화 끝
    26.47s  user  발화 시작: Mm-hmm.
    26.47s  agent 발화 끝
    26.82s  agent 발화 시작: It's a great way to stay focused and avoid burnout, and you 
    26.82s  user  발화 끝
    38.32s  agent 발화 끝
