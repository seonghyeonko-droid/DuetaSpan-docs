# v3_defer_10_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_10",
#     "name": "Adam",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-23",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-03-06",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-13",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-10",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2025-06-27",
#       "category": "diet",
#       "text": "User is vegan."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-25",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     },
#     {
#       "date": "2025-11-08",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-08-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 What are the hours for that Italia | S2 That sounds perfect. Can you reser | S3 Great! Um, what’s the weather goin | S4 I'm trying to remember…did I write

     0.00s  user  발화 시작: What are the hours for that Italian place we found yesterday
     3.77s  <ret> 발화 (turn1 첫 프레임)
     3.85s  agent 발화 시작: <ret> Trattoria Romana is open from eleven thirty AM to ten 
     3.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.90s]: (tool result) Name: Trattoria Romana, Rating: 4.4 (1,234 reviews), Hou
     3.85s  user  발화 끝
     8.76s  agent 발화 시작: And on Sundays, they’re open from noon to nine PM.
     8.76s  agent 발화 끝
    12.26s  user  발화 시작: That sounds perfect. Can you reserve a table for two this Sa
    12.26s  agent 발화 끝
    17.09s  <ret> 발화 (turn4 첫 프레임)
    17.17s  agent 발화 시작: <ret> I’ve reserved a table for two at Trattoria Romana this
    17.17s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.26s]: (tool result) Confirmation: Restaurant: Trattoria Romana, Date: 2026-0
    17.17s  user  발화 끝
    22.42s  agent 발화 시작: Your confirmation ID is TR729XQ.
    22.42s  agent 발화 끝
    24.17s  user  발화 시작: Great! Um, what’s the weather going to be like then?
    24.17s  agent 발화 끝
    27.60s  <ret> 발화 (turn7 첫 프레임)
    27.68s  agent 발화 시작: <ret> This Saturday in Seoul, it’ll be partly cloudy with a 
    27.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.26s]: (tool result) Date: 2026-07-11, Location: Seoul, Weather: 26.5°C, humi
    27.68s  user  발화 끝
    32.93s  agent 발화 시작: Humidity will be around sixty-eight percent, with a light br
    32.93s  agent 발화 끝
    38.19s  user  발화 시작: Yeah.
    38.19s  agent 발화 끝
    38.54s  user  발화 시작: I'm trying to remember…did I write down my friend’s number?
    38.54s  user  발화 끝
    42.04s  agent 발화 시작: Give me a moment to check your notes.
    42.04s  user  발화 끝
    44.32s  ⚡지연 SPAN 주입(선제발표 직전): (no information found)
    44.84s  agent 발화 시작: <ret> I'm still looking through your notes for that number… 
    44.84s  agent 발화 끝
    58.16s  agent 발화 끝
