# v3_abs_22_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_22",
#     "name": "도찬",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-21",
#       "category": "home",
#       "text": "User's home address is 서울 마포구 성산동 45-6."
#     },
#     {
#       "date": "2026-04-25",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-04-19",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     },
#     {
#       "date": "2026-01-27",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-01-23",
#       "category": "hobby",
#       "text": "User is into birdwatching."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 그 문제에 대해 너무 중요해서 중립을 지킨 단체는 어디였지?
     3.86s  <ret> 발화 (turn1 첫 프레임)
     4.14s  agent 발화 시작: <ret> 그 부분에 대한 정보는 찾을 수 없었어요. 알려진 바가 없네요.
     4.14s  user  발화 끝
     4.95s  ⚡SPAN 주입 [d'=1.09s / d_lead=4.60s]: (no information found)
     8.74s  user  발화 시작: 어.
     8.74s  agent 발화 끝
     9.20s  user  발화 시작: 아니, 괜찮아. 그냥 궁금했어. 혹시 오늘 날씨 어때?
     9.20s  user  발화 끝
    12.87s  <ret> 발화 (turn5 첫 프레임)
    12.88s  agent 발화 시작: 네.
    12.88s  user  발화 끝
    13.34s  agent 발화 시작: <ret> 오늘 날씨는 이십육 점 오도이고, 하늘은 맑아요. 습도는 육십팔퍼센트, 바람은 시속 사 점 이킬로
    13.34s  agent 발화 끝
    14.13s  ⚡SPAN 주입 [d'=1.26s / d_lead=7.36s]: (tool result) {"temperature": "26.5°C", "humidity": "68%", "wind speed
    20.70s  agent 발화 끝
