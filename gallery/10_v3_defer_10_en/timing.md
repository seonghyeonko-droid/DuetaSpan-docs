# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Lukas",
#     "location": {
#       "city": "Toronto",
#       "country": "Canada",
#       "timezone": "America/Toronto (EST, UTC-5)",
#       "currency": "CAD ($)"
#     },
#     "nationality": "Canadian",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-14",
#       "category": "home",
#       "text": "User's home address is 260 Maple Drive."
#     },
#     {
#       "date": "2026-02-18",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-11-09",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in August."
#     },
#     {
#       "date": "2025-09-16",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-07-29",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-09-26",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-09-02",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Find pictures related to my holiday in France last year, but
     5.18s  <ret> 발화 (turn1 첫 프레임)
     5.26s  agent 발화 시작: <ret> I found seventeen pictures from your France holiday in
     5.26s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.49s]: (tool result) Found 17 image files matching 'France holiday' from 2025
     5.27s  user  발화 끝
     7.98s  user  발화 시작: Uh-huh.
     8.43s  user  발화 끝
    11.61s  user  발화 시작: Uhhh, can you show me the largest one?
    11.75s  agent 발화 끝
    13.18s  <ret> 발화 (turn4 첫 프레임)
    13.32s  agent 발화 시작: <ret> The largest file is 'Eiffel_Tower_Sunset_2025_07_15.jp
    13.34s  ⚡SPAN 주입 [d'=1.12s / d_lead=7.55s]: The largest file is 'Eiffel_Tower_Sunset_2025_07_15.jpg' at 6.2 MB.
    13.50s  user  발화 끝
    16.52s  user  발화 시작: Yeah.
    16.73s  user  발화 끝
    20.87s  agent 발화 끝
    21.51s  user  발화 시작: But… can you open it for me?
    23.32s  <ret> 발화 (turn7 첫 프레임)
    23.48s  agent 발화 시작: <ret> Give me a moment while I check if I can open that file
    23.48s  ⚡SPAN 주입 [d'=1.52s / d_lead=3.14s]: (tool result)
    23.63s  user  발화 끝
    25.65s  ⚡지연 SPAN 주입(선제발표 직전): The file 'Eiffel_Tower_Sunset_2025_07_15.jpg' is a JPEG image and is n
    26.58s  agent 발화 시작: <ret> I apologize for the slight delay. I've opened 'Eiffel_
    26.62s  agent 발화 끝
    39.34s  agent 발화 끝
