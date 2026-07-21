# v3_selfc_08_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_selfc_08",
#     "name": "Paul",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-25",
#       "category": "emergency",
#       "text": "User's emergency contact is Minjun."
#     },
#     {
#       "date": "2026-04-13",
#       "category": "trip",
#       "text": "User is planning a trip to Georgia in May."
#     },
#     {
#       "date": "2026-03-24",
#       "category": "music",
#       "text": "User likes listening to 90s hip-hop."
#     },
#     {
#       "date": "2026-03-21",
#       "category": "home",
#       "text": "User's home address is 577 Alder Road."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "coffee",
#       "text": "User's usual coffee order is a cold brew."
#     },
#     {
#       "date": "2026-02-11",
#       "category": "commute",
#       "text": "User works from home."
#     },
#     {
#       "date": "2026-01-31",
#       "category": "phone",
#       "text": "User uses an iPhone SE."
#     },
#     {
#       "date": "2026-01-22",
#       "category": "temp",
#       "text": "User keeps the home thermostat around 20°C."
#     },
#     {
#       "date": "2026-01-09",
#       "category": "sibling",
#       "text": "User has a younger sibling named Hana."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Planning a camping trip",
#       "bullets": [
#         "a weekend at a lake site in September",
#         "asked about a 4-person tent and a cooler"
#       ]
#     },
#     {
#       "date": "2026-01-02",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers for a 3-story house",
#         "wanted coverage for the basement office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: I need a hotel in Tokyo, something really nice.
     1.04s  agent 발화 시작: Mhm.
     1.58s  agent 발화 끝
     2.95s  <ret> 발화 (turn2 첫 프레임)
     3.21s  agent 발화 시작: <ret> Oh, Tokyo! A fresh start can be amazing.
     3.33s  user  발화 끝
     3.61s  ⚡SPAN 주입 [d'=0.66s / d_lead=3.79s]: (tool result) (no information found)
     7.00s  agent 발화 끝
     7.05s  agent 발화 시작: Hmm, that's odd. Five-star hotels in Tokyo aren’t showing up
     9.17s  user  발화 시작: Yeah.
     9.57s  user  발화 끝
    11.16s  agent 발화 끝
    11.30s  user  발화 시작: Five star… oh, no, four star— that’s what I meant.
    12.90s  <ret> 발화 (turn6 첫 프레임)
    14.14s  user  발화 끝
    14.30s  agent 발화 시작: <ret> The Park Hyatt Tokyo has four and a half stars, and ro
    14.70s  ⚡SPAN 주입 [d'=1.80s / d_lead=17.45s]: (tool result) Park Hyatt Tokyo, 4.5 stars, $380/night, 3-7-1-2 Nishi-S
    31.75s  agent 발화 끝
