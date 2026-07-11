# v3_rags_31_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rags_31",
#     "name": "민훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-24",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-26",
#       "category": "home",
#       "text": "User's home address is 부산 수영구 광안동 210-3."
#     },
#     {
#       "date": "2025-11-30",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2025-05-31",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-04",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이천십칠년 슬로베니아 대통령 선거에서 누가 이겼는지 알려주시겠어요?
     3.66s  <ret> 발화 (turn1 첫 프레임)
     3.89s  agent 발화 시작: <ret> 이천십칠년 슬로베니아 대통령 선거에서는 보루트 파호르 님이 마르얀 샤레츠 님을 이겨서 당선되셨습니
     3.90s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.67s]: Borut Pahor won the 2017 Slovenian presidential election, defeating Ma
     4.02s  user  발화 끝
    11.56s  agent 발화 끝
