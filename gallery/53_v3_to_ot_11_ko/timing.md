# v3_to_ot_11_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_to_ot_11",
#     "name": "라람",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-04-13",
#       "category": "pet",
#       "text": "User has a Beagle named Rusty."
#     },
#     {
#       "date": "2026-04-05",
#       "category": "seat",
#       "text": "User prefers a window seat when traveling."
#     },
#     {
#       "date": "2026-04-04",
#       "category": "work",
#       "text": "User works as a physical therapist."
#     },
#     {
#       "date": "2026-02-21",
#       "category": "trip",
#       "text": "User is planning a trip to Kyoto in October."
#     },
#     {
#       "date": "2026-02-01",
#       "category": "allergy",
#       "text": "User is allergic to peanuts."
#     },
#     {
#       "date": "2025-12-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-12-22",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 혹시 태양계에서 일곱 번째 행성이 뭔지 알아요? | S2 조지 왕성이라고 불렀다고요? 좀 이상하네요. | S3 …근데 천왕성은 색깔이 왜 파란색이에요? | S4 화성은 붉은색이군요. 그럼 금성은요?

     0.00s  user  발화 시작: 혹시 태양계에서 일곱 번째 행성이 뭔지 알아요?
     3.53s  <ret> 발화 (turn1 첫 프레임)
     3.76s  agent 발화 시작: <ret> 태양에서 일곱 번째 행성은 천왕성이에요.
     3.76s  user  발화 끝
     4.73s  ⚡SPAN 주입 [d'=1.20s / d_lead=2.68s]: Uranus is the seventh planet from the Sun.
     6.44s  user  발화 시작: 음, 천왕성은 어떻게 발견됐어요?
     6.44s  agent 발화 끝
     8.30s  <ret> 발화 (turn3 첫 프레임)
     8.59s  agent 발화 시작: <ret> 윌리엄 허셜이 천칠백팔십일년 삼월 십삼일 그리니치 왕립 천문대에서 천왕성을 발견했어요.
     8.59s  user  발화 끝
     8.60s  ⚡SPAN 주입 [d'=0.30s / d_lead=5.37s]: William Herschel discovered Uranus on March 13, 1781, at the Royal Obs
    13.96s  user  발화 시작: 응.
    13.96s  agent 발화 끝
    14.50s  agent 발화 시작: 처음에는 Herschel이 그것을 ‘조지 왕성’이라고 불렀지만, 나중에는 천왕성으로 이름이 바뀌었답니다.
    14.50s  user  발화 끝
    19.86s  user  발화 시작: 응.
    19.86s  agent 발화 끝
    20.40s  user  발화 시작: 조지 왕성이라고 불렀다고요? 좀 이상하네요.
    20.40s  user  발화 끝
    23.09s  agent 발화 시작: 네, 그렇죠. 천왕성은 다른 행성들과 달리 자전축이 거의 누워있어서 독특한 특징을 가지고 있어요.
    23.09s  user  발화 끝
    30.07s  user  발화 시작: 자전축이 누워있다는 게 무슨 뜻이에요?
    30.07s  agent 발화 끝
    32.71s  <ret> 발화 (turn10 첫 프레임)
    32.75s  agent 발화 시작: <ret> 천왕성은 자전축이 구십팔도 기울어져 있어서 옆으로 누워서 공전한다고 생각하시면 돼요. —
    32.75s  user  발화 끝
    33.38s  ⚡SPAN 주입 [d'=0.66s / d_lead=5.91s]: Uranus rotates on its side with an axial tilt of 98 degrees.
    38.66s  user  발화 시작: …근데 천왕성은 색깔이 왜 파란색이에요?
    38.66s  agent 발화 끝
    41.34s  agent 발화 시작: 아, 좋은 질문이에요. 천왕성의 파란색은 대기 중에 있는 메탄 때문이에요. 메탄이 붉은색 빛을 흡수해서 파란
    41.34s  user  발화 끝
    50.47s  user  발화 시작: 메탄 때문에 파란색이군요. 신기하네요. 다른 행성들도 비슷한 이유로 색깔이 다른 건가요?
    50.47s  agent 발화 끝
    56.37s  agent 발화 시작: 네, 맞아요. 행성의 대기 성분에 따라 색깔이 달라져요. 예를 들어, 화성은 산화철 때문에 붉은색을 띠고요.
    56.37s  user  발화 끝
    64.43s  user  발화 시작: 아.
    64.43s  agent 발화 끝
    64.96s  user  발화 시작: 화성은 붉은색이군요. 그럼 금성은요?
    64.96s  user  발화 끝
    66.69s  <ret> 발화 (turn17 첫 프레임)
    67.11s  agent 발화 시작: <ret> 금성은 이산화탄소로 가득 찬 두꺼운 대기를 가지고 있어서, 샛노란 흰색을 띠는 것 같아요.
    67.11s  user  발화 끝
    67.37s  ⚡SPAN 주입 [d'=0.68s / d_lead=6.98s]: Venus has a thick, toxic atmosphere filled with carbon dioxide, creati
    74.09s  agent 발화 끝
