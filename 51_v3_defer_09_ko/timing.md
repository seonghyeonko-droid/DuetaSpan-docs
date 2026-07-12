# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "서경",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "40s",
#     "language": "Korean"
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
#       "text": "User's home address is 서울 마포구 성산동 45-6."
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

# EXAMINER(FDB-v2) 단계: S1 덕덕고로 이동해서 십초 정도 로딩 시간을 줘. | S2 지금 날씨 어때? | S3 이번 주 토요일에 비 올 가능성 있어? | S4 …혹시 일요일은 어때?

     0.00s  user  발화 시작: 덕덕고로 이동해서 십초 정도 로딩 시간을 줘.
     3.11s  <ret> 발화 (turn1 첫 프레임)
     3.27s  agent 발화 시작: <ret> 네, 덕덕고로 이동했고, 페이지는 팔 점 이초 만에 완전히 로딩되었습니다. 아주 빠르네요.
     3.27s  ⚡SPAN 주입 [d'=1.44s / d_lead=5.61s]: (tool result) Navigation to https://duckduckgo.com successful. Page lo
     3.27s  user  발화 끝
     8.88s  user  발화 시작: 정말요?
     8.88s  agent 발화 끝
     9.35s  user  발화 시작: 지금 날씨 어때?
     9.35s  user  발화 끝
    10.43s  <ret> 발화 (turn4 첫 프레임)
    10.75s  agent 발화 시작: <ret> 현재 기온은 이십육 점 칠도이고, 습도는 육십팔퍼센트, 바람은 시속 사 점 일킬로미터로 맑은 하늘
    10.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.42s]: (tool result) Current conditions: 26.7°C, humidity 68%, wind 4.1 km/h,
    10.75s  user  발화 끝
    19.17s  user  발화 시작: 이번 주 토요일에 비 올 가능성 있어?
    19.17s  agent 발화 끝
    22.04s  <ret> 발화 (turn6 첫 프레임)
    22.44s  agent 발화 시작: <ret> 토요일, 칠월 십일일은 십팔 점 삼도이고 습도는 팔십오퍼센트, 바람은 시속 십일 점 이킬로미터로 
    22.44s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.55s]: (tool result) Saturday, July 11, 2026: Forecast is 18.3°C, 85% humidit
    22.44s  user  발화 끝
    28.99s  user  발화 시작: …혹시 일요일은 어때?
    28.99s  agent 발화 끝
    30.39s  agent 발화 시작: 일요일은 이십 점 일도, 습도는 칠십퍼센트, 바람은 시속 칠 점 팔킬로미터로 대체로 맑을 것으로 예상됩니다.
    30.39s  user  발화 끝
    37.40s  agent 발화 시작: 주말 계획 세우시는 데 도움이 되었으면 좋겠네요. 저는 건강한 습관을 만드는 것도 도와드릴 수 있어요.
    37.40s  agent 발화 끝
    44.42s  agent 발화 끝
