# v3_fstart_15_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_fstart_15",
#     "name": "라완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2025-09-09",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "diet",
#       "text": "User is lactose-intolerant."
#     },
#     {
#       "date": "2025-06-19",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-05-30",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-06-08",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요? | S2 고마워. 근데, 혹시 시드니 오페라 하우스 주변에 주차장이 어 | S3 윌슨 파킹 시드니 오페라 하우스가 제일 가까운 것 같네. 거기 | S4 … 혹시 거기 근처에 괜찮은 레스토랑도 있어? 저녁 먹을 곳을

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼요?
     3.31s  <ret> 발화 (turn1 첫 프레임)
     3.38s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 -삼십삼 점 팔 오 육 팔, 경도는 백오십일 점 이 일 오 삼입니다
     3.61s  user  발화 끝
     5.31s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.60s]: (tool result) -33.8568, 151.2153
     7.03s  user  발화 시작: 와.
     7.75s  user  발화 끝
    12.88s  user  발화 시작: 음… 그럼, 저 거기 가는 길 좀 알려줄 수 있어? 지금 출발해서 차로 가려고 하는데.
    12.97s  agent 발화 끝
    17.82s  <ret> 발화 (turn4 첫 프레임)
    18.21s  agent 발화 시작: <ret> 지금 출발하시면 시드니 오페라 하우스까지 약 십이 점 오킬로미터, 이십삼분 정도 걸립니다. 실시간
    18.43s  user  발화 끝
    19.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.21s]: (tool result) 12.5 km, 23 minutes
    21.32s  user  발화 시작: 어.
    21.81s  user  발화 끝
    26.41s  agent 발화 끝
    26.72s  user  발화 시작: 고마워. 근데, 혹시 시드니 오페라 하우스 주변에 주차장이 어디 있는지 알아볼 수 있을까?
    32.03s  <ret> 발화 (turn7 첫 프레임)
    32.35s  agent 발화 시작: <ret> 시드니 오페라 하우스 근처에 윌슨 파킹 시드니 오페라 하우스(이백오십미터), 시큐어 파킹 오페라 
    32.61s  user  발화 끝
    34.03s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.85s]: (tool result) Wilson Parking Sydney Opera House (250 m), Secure Parkin
    42.78s  user  발화 시작: 윌슨 파킹 시드니 오페라 하우스가 제일 가까운 것 같네. 거기로 가는 길 좀 알려줘.
    43.19s  agent 발화 끝
    47.71s  <ret> 발화 (turn9 첫 프레임)
    47.95s  agent 발화 시작: <ret> 윌슨 파킹 시드니 오페라 하우스까지는 지금 출발하시면 약 일 점 팔킬로미터, 팔분 정도 소요됩니다
    48.11s  user  발화 끝
    49.71s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.48s]: (tool result) 1.8 km, 8 minutes
    54.43s  agent 발화 끝
    55.32s  user  발화 시작: 좋아, 알았어. 근데—
    57.63s  user  발화 시작: … 혹시 거기 근처에 괜찮은 레스토랑도 있어? 저녁 먹을 곳을 찾고 있거든.
    57.72s  user  발화 끝
    62.58s  user  발화 끝
