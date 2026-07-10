# v3_mem_35_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_35",
#     "name": "Amelia",
#     "location": {
#       "city": "Berlin",
#       "country": "Germany",
#       "timezone": "Europe/Berlin (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "German",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "German"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-13",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-11-07",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-09-25",
#       "category": "diet",
#       "text": "User is pescatarian."
#     },
#     {
#       "date": "2025-09-08",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-14",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-17",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2026-03-01",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: Hi Amelia, I'm Huen. It's lovely to connect with you. I unde
     2.44s  user  발화 시작: Mm-hmm.
     2.94s  user  발화 끝
     6.90s  agent 발화 끝
     7.25s  user  발화 시작: Um, yes, I am. I was hoping you could suggest a restaurant f
    12.37s  <ret> 발화 (turn3 첫 프레임)
    12.77s  agent 발화 시작: <ret> Finding the perfect spot is important. I see you menti
    12.85s  user  발화 끝
    12.87s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.84s]: [2026-06-17] Past chat — Planning a birthday dinner: party of six; loo
    20.14s  agent 발화 끝
    20.17s  user  발화 시작: Yes, that's right! Something with a nice atmosphere would be
    23.99s  <ret> 발화 (turn5 첫 프레임)
    24.31s  agent 발화 시작: <ret> There are two options that stand out: Korean Garden an
    24.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.14s]: (tool result) Korean Garden - 4.5 stars, outdoor seating, party size u
    24.48s  user  발화 끝
    31.45s  agent 발화 끝
