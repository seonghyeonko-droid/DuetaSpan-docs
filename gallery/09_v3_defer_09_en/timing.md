# v3_defer_09_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "Emma",
#     "location": {
#       "city": "New York",
#       "country": "United States",
#       "timezone": "America/New_York (EST, UTC-5)",
#       "currency": "USD ($)"
#     },
#     "nationality": "American",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-03",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-09-12",
#       "category": "hobby",
#       "text": "User is into vintage synth collecting."
#     },
#     {
#       "date": "2025-08-27",
#       "category": "home",
#       "text": "User's home address is 998 Maple Drive."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-05",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 Please navigate to DuckDuckGo and  | S2 Anya Sharma? — | S3 …What’s the address for Zenith Yog | S4 …the address was perfect.

     0.00s  user  발화 시작: Please navigate to DuckDuckGo and give it ten seconds to loa
     4.81s  <ret> 발화 (turn1 첫 프레임)
     5.05s  agent 발화 시작: <ret> Alright, I’ve navigated to DuckDuckGo and waited ten s
     5.05s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.64s]: (tool result) Navigation to https://duckduckgo.com successful. Page lo
     5.05s  user  발화 끝
    14.69s  user  발화 시작: That's good. Can you search for local yoga studios?
    14.69s  agent 발화 끝
    18.67s  <ret> 발화 (turn3 첫 프레임)
    18.83s  agent 발화 시작: <ret> I found twelve yoga studios within five kilometers of 
    18.83s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.10s]: Found 12 yoga studios within 5km of your current location: "Zenith Yog
    18.83s  user  발화 끝
    28.93s  user  발화 시작: Yeah.
    28.93s  agent 발화 끝
    29.39s  agent 발화 시작: Zenith Yoga seems to have particularly good reviews—lots of 
    29.39s  user  발화 끝
    36.28s  user  발화 시작: Anya Sharma? —
    36.28s  agent 발화 끝
    37.65s  user  발화 시작: …What’s the address for Zenith Yoga?
    37.65s  user  발화 끝
    40.09s  <ret> 발화 (turn8 첫 프레임)
    40.41s  agent 발화 시작: <ret> Zenith Yoga is located at 14 Oak Street, Unit 201. The
    40.41s  ⚡SPAN 주입 [d'=2.00s / d_lead=13.32s]: Zenith Yoga is located at 14 Oak Street, Unit 201. Their phone number 
    40.41s  user  발화 끝
    53.73s  user  발화 시작: No, thank you. Just…
    53.73s  agent 발화 끝
    55.56s  user  발화 시작: …the address was perfect.
    55.56s  user  발화 끝
    57.40s  user  발화 끝
