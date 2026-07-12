# v3_noinfo_23_cs — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_noinfo_23",
#     "name": "Riley",
#     "location": {
#       "city": "Paris",
#       "country": "France",
#       "timezone": "Europe/Paris (CET, UTC+1)",
#       "currency": "EUR (€)"
#     },
#     "nationality": "French",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "French"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-26",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2026-06-24",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2026-06-21",
#       "category": "home",
#       "text": "User's home address is 65 Elm Street."
#     },
#     {
#       "date": "2025-09-02",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in October."
#     },
#     {
#       "date": "2025-07-10",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-06-15",
#       "category": "pet",
#       "text": "User has a Golden Retriever named Max."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-13",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오리올 씨, 혹시 사라 밀러 씨 전화번호를 아시나요?
     3.54s  <ret> 발화 (turn1 첫 프레임)
     3.70s  agent 발화 시작: <ret> 확인해 봤는데, 아쉽게도 사라 밀러 씨의 전화번호는 제가 공개적으로 찾을 수 없네요.
     3.70s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.55s]: (no information found)
     3.70s  user  발화 끝
     9.25s  user  발화 시작: 아, 네, 그렇군요. 좀 아쉽네요.
     9.25s  agent 발화 끝
    11.56s  agent 발화 시작: 연락하고 싶어 하시는 마음은 이해가 되지만, 개인 정보는 비공개로 해두는 분들도 계시니까요.
    11.56s  user  발화 끝
    17.11s  user  발화 시작: 네.
    17.11s  agent 발화 끝
    17.57s  agent 발화 시작: 혹시 소셜 미디어나 공통의 친구를 통해 연락해 보시는 건 어떠세요?
    17.57s  user  발화 끝
    22.20s  user  발화 시작: 네.
    22.20s  agent 발화 끝
    22.66s  user  발화 시작: 음, 그럴까요. 지금 서울 날씨는 어떤가요?
    22.66s  user  발화 끝
    25.20s  <ret> 발화 (turn8 첫 프레임)
    25.44s  agent 발화 시작: <ret> 서울 날씨는 현재 이십삼 점 영도, 습도는 칠십사 퍼센트, 그리고 풍속은 시속 오 점 오 킬로미터
    25.44s  ⚡SPAN 주입 [d'=1.04s / d_lead=9.71s]: (tool result) 23.0°C, humidity 74%, wind 5.5 km/h
    25.44s  user  발화 끝
    35.15s  agent 발화 끝
