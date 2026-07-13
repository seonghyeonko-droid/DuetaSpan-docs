# v3_chain_05_en — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_05",
#     "name": "Hugo",
#     "location": {
#       "city": "Sydney",
#       "country": "Australia",
#       "timezone": "Australia/Sydney (AEDT, UTC+11)",
#       "currency": "AUD ($)"
#     },
#     "nationality": "Australian",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "English"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-09",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2026-05-03",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2025-12-07",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-10-03",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-10",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: Could you clear the session called test session b?
     3.59s  <ret> 발화 (turn1 첫 프레임)
     3.83s  agent 발화 시작: <ret> I checked, but I couldn’t find a session named “test s
     3.83s  ⚡SPAN 주입 [d'=1.52s / d_lead=8.09s]: (no information found)
     3.83s  user  발화 끝
    11.92s  user  발화 시작: Um, yes, I think so… maybe test session B?
    11.92s  agent 발화 끝
    15.51s  <ret> 발화 (turn3 첫 프레임)
    15.75s  agent 발화 시작: <ret> It’s perfectly alright to double-check—sometimes a sma
    15.75s  ⚡SPAN 주입 [d'=0.50s / d_lead=5.11s]: (no information found)
    15.75s  user  발화 끝
    20.86s  agent 발화 시작: Still no luck finding a session labeled “test session B”. Pe
    20.86s  agent 발화 끝
    29.80s  user  발화 시작: Oh, right. Could you search for “best art therapy techniques
    29.80s  agent 발화 끝
    34.67s  <ret> 발화 (turn6 첫 프레임)
    34.91s  agent 발화 시작: <ret> It appears art therapy can really help with anxiety, u
    34.91s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.52s]: Art therapy is a mental health profession that uses the creative proce
    34.91s  user  발화 끝
    43.43s  agent 발화 시작: It's wonderful you're exploring ways to manage anxiety; find
    43.43s  agent 발화 끝
    49.81s  agent 발화 끝
