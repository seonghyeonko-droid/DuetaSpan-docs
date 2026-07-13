# v3_rag_24_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "Hana",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-03-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-12-29",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-10-29",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2025-10-28",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-06-18",
#       "category": "diet",
#       "text": "User is vegetarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-06",
#       "title": "Booked a dentist appointment",
#       "bullets": [
#         "asked for an early-morning slot",
#         "prefers Dr. Han"
#       ]
#     },
#     {
#       "date": "2025-10-15",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-30",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I was wondering about the International Day of the World’s I
     4.51s  agent 발화 시작: It’s a day to recognize and celebrate the rights and culture
     4.51s  user  발화 끝
    10.15s  user  발화 시작: When did it first start being observed?
    10.15s  agent 발화 끝
    12.39s  <ret> 발화 (turn3 첫 프레임)
    12.79s  agent 발화 시작: <ret> The United Nations General Assembly first decided to o
    12.79s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.89s]: The United Nations General Assembly decided in 1990 to observe 9 Augus
    12.79s  user  발화 끝
    17.68s  user  발화 시작: …is it celebrated much in South Korea?
    17.68s  agent 발화 끝
    20.07s  <ret> 발화 (turn5 첫 프레임)
    20.31s  agent 발화 시작: <ret> South Korea marks the day with events promoting unders
    20.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=3.38s]: (tool result) South Korea marks the International Day of the World’s I
    20.31s  user  발화 끝
    23.69s  user  발화 시작: Mhm.
    23.69s  agent 발화 끝
    24.07s  agent 발화 시작: —and respect for indigenous cultures, according to reports. 
    24.07s  user  발화 끝
    29.33s  agent 발화 끝
