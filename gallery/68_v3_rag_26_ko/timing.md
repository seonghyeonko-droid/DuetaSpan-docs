# v3_rag_26_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_26",
#     "name": "하재",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-06-27",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2026-06-03",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in December."
#     },
#     {
#       "date": "2026-04-17",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2025-06-11",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-10-09",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 혹시 스네이프 교수 역할을 맡은 배우가 누구인지 아세요?
     0.07s  <ret> 발화 (turn1 첫 프레임)
     0.15s  agent 발화 시작: <ret> 안녕하세요. 스네이프 교수 역할을 맡은 배우에 대해 알아볼게요.
     0.15s  ⚡SPAN 주입 [d'=0.13s / d_lead=0.13s]: Alan Sidney Patrick Rickman was an English actor and director known fo
     0.15s  user  발화 끝
     0.27s  agent 발화 시작: 스네이프 교수 역할을 맡은 배우는 앨런 시드니 패트릭 리크먼입니다. 그는 해리 포터 영화 시리즈에서 세베루스
     0.27s  agent 발화 끝
     0.55s  <ret> 발화 (turn5 첫 프레임)
     0.61s  user  발화 시작: 네.
     0.61s  agent 발화 끝
     0.63s  user  발화 시작: 아, 그렇군요. 오늘 날씨가 어때요?
     0.63s  user  발화 끝
     0.71s  agent 발화 시작: <ret> 지금 기온은 이십육 점 일도이고, 습도는 육십팔퍼센트, 바람은 시속 삼 점 이킬로미터입니다. 오늘
     0.71s  ⚡SPAN 주입 [d'=0.29s / d_lead=0.29s]: (tool result) Current conditions: 26.1°C, humidity 68%, wind 3.2 km/h.
     0.71s  user  발화 끝
     1.00s  agent 발화 끝
