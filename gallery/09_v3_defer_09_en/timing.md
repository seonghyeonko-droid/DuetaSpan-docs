# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Chloe",
#     "location": {
#       "city": "San Francisco",
#       "country": "United States",
#       "timezone": "America/Los_Angeles (PST, UTC-8)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-24",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-05",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2025-12-23",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2025-10-20",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2025-08-12",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-07-04",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-24",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-06-27",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Book three rooms at Ocean View Hotel in San Diego for seven 
     5.03s  <ret> 발화 (turn1 첫 프레임)
     5.27s  agent 발화 시작: <ret> I’ve confirmed your reservation at the Ocean View Hote
     5.28s  user  발화 끝
     7.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.21s]: (tool result) Reservation confirmed: Ocean View Hotel, San Diego, 3 ro
     8.62s  user  발화 시작: …Does that include breakfast?
     9.48s  agent 발화 끝
    10.33s  <ret> 발화 (turn3 첫 프레임)
    10.49s  agent 발화 시작: <ret> The Ocean View Hotel does include a complimentary cont
    10.56s  user  발화 끝
    12.33s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.87s]: (tool result) Ocean View Hotel, San Diego: complimentary continental b
    13.79s  user  발화 시작: Mm-hmm.
    14.28s  user  발화 끝
    15.18s  user  발화 시작: Perfect. And can you set a reminder to check out on February
    15.35s  agent 발화 끝
    19.61s  <ret> 발화 (turn6 첫 프레임)
    19.85s  agent 발화 시작: <ret> I’ve set a reminder for February seventeenth to check 
    20.00s  user  발화 끝
    21.61s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.02s]: (tool result) Reminder set for February seventeenth: Check out of Ocea
    23.88s  agent 발화 끝
