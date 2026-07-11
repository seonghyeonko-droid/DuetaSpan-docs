# v3_abs_21_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_abs_21",
#     "name": "연별",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-28",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2026-04-21",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-03",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2025-11-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is sushi."
#     },
#     {
#       "date": "2025-07-11",
#       "category": "work",
#       "text": "User works as a graduate student."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-26",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 미술관이 언제 지어졌는지 알 수 있을까?
     2.10s  <ret> 발화 (turn1 첫 프레임)
     2.33s  agent 발화 시작: <ret> 아, 죄송해요. 미술관이 언제 지어졌는지에 대한 정보는 찾을 수가 없네요.
     2.34s  ⚡SPAN 주입 [d'=0.50s / d_lead=3.84s]: (no information found)
     2.35s  user  발화 끝
     6.17s  agent 발화 끝
     6.79s  user  발화 시작: 음… 다른 건 없는데, 혹시 오늘 날씨 어때?
    10.38s  <ret> 발화 (turn3 첫 프레임)
    10.62s  agent 발화 시작: <ret> 오늘 날씨는 기온이 이십육도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터로 불고 있어
    10.62s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.42s]: (tool result) {"temperature": "26.0°C", "humidity": "68%", "wind speed
    10.86s  user  발화 끝
    18.03s  agent 발화 끝
