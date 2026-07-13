# v3_rag_28_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_28",
#     "name": "지호",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-04-06",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-03-11",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-19",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-01-26",
#       "category": "trip",
#       "text": "User is planning a trip to Switzerland in October."
#     },
#     {
#       "date": "2026-01-05",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Mexican."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-05-30",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 아라미 씨, 안녕하세요. 서울에 새로 이사 왔는데, 혹시 이 근처에 괜찮은 헬스장 아세요?
     6.44s  agent 발화 시작: 안녕하세요! 서울에 오신 걸 환영해요. 어떤 스타일의 헬스장을 찾으세요?
     6.44s  user  발화 끝
    10.90s  user  발화 시작: 음… 너무 비싸지 않고, 시설이 깨끗한 곳이요. 사람들 많이 다니는 곳이면 더 좋고요.
    10.90s  agent 발화 끝
    16.95s  <ret> 발화 (turn3 첫 프레임)
    17.34s  agent 발화 시작: <ret> 강남구 강남대로 백이십삼에 있는 피트니스 퍼스트는 다양한 피트니스 수업과 현대적인 장비를 갖춘 곳
    17.34s  user  발화 끝
    18.21s  ⚡SPAN 주입 [d'=1.26s / d_lead=8.42s]: The gym, Fitness First, is located at 123 Gangnam-daero, Seocho-gu, Se
    25.77s  agent 발화 끝
