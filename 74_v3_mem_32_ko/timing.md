# v3_mem_32_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_32",
#     "name": "라국",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "non-binary",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-02-09",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "home",
#       "text": "User's home address is 서울 용산구 이태원로 200."
#     },
#     {
#       "date": "2025-09-18",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2025-06-24",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-06-28",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2026-04-25",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     },
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

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 세아나님. | S2 아니요, 괜찮아요. 그때 제가 어떤 차를 보고 있었는지 기억하 | S3 이번 여름 휴가로 교토에 가고 싶은데, 혹시 제가 교토에 대해 | S4 오, 좋네요.

     0.00s  agent 발화 시작: 안녕하세요, 라국님. 저는 라국님을 도와드리는 에이전트, 세아나입니다.
     1.58s  user  발화 시작: 아.
     2.07s  user  발화 끝
     5.18s  agent 발화 끝
     5.39s  user  발화 시작: 안녕하세요, 세아나님.
     7.18s  user  발화 끝
     7.22s  agent 발화 시작: 혹시 제가 예전에 기록해 둔 내용 중에 궁금한 점이 있으신가요?
    11.25s  agent 발화 끝
    12.14s  user  발화 시작: 음… 제가 작년에 고양이 벨라에 대해 말씀드렸었죠?
    15.44s  <ret> 발화 (turn5 첫 프레임)
    15.67s  agent 발화 시작: <ret> 벨라에 대한 기록은 찾을 수 없지만, 작년에 중고차에 대해 이야기 나눈 기록이 있습니다.
    15.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.79s]: [2026-06-28] Past chat — Researching a used car: comparing hybrid mode
    15.74s  user  발화 끝
    21.35s  user  발화 시작: 아, 차였구나. 그건 기억나요.
    21.46s  agent 발화 끝
    23.56s  agent 발화 시작: 혹시 중고차에 대해 더 알아볼까요?
    23.60s  user  발화 끝
    25.64s  user  발화 시작: 아니요, 괜찮아요. 그때 제가 어떤 차를 보고 있었는지 기억하시나요?
    25.68s  agent 발화 끝
    29.09s  <ret> 발화 (turn9 첫 프레임)
    29.48s  agent 발화 시작: <ret> 하이브리드 모델을 찾고 계셨고, 주행 거리가 삼만 마일 미만인 차량을 원하셨습니다.
    29.48s  ⚡SPAN 주입 [d'=1.12s / d_lead=6.48s]: [2026-06-28] Past chat — Researching a used car: comparing hybrid mode
    29.66s  user  발화 끝
    31.35s  user  발화 시작: 예.
    32.08s  user  발화 끝
    35.96s  agent 발화 끝
    36.06s  user  발화 시작: 맞아요, 맞아요.
    37.09s  agent 발화 시작: 혹시 지금도 하이브리드 차량을 찾고 계신가요?
    37.16s  user  발화 끝
    40.60s  agent 발화 끝
    40.98s  user  발화 시작: 음… 사실 요즘 차보다는 여행이 더 끌리네요.
    44.98s  agent 발화 시작: 여행이라… 어디로 떠나고 싶으신가요?
    45.15s  user  발화 끝
    48.54s  agent 발화 끝
    48.75s  user  발화 시작: 이번 여름 휴가로 교토에 가고 싶은데, 혹시 제가 교토에 대해 알아봤던 내용이 있나요?
    53.95s  <ret> 발화 (turn16 첫 프레임)
    54.17s  user  발화 끝
    54.17s  agent 발화 시작: <ret> 교토에 대한 직접적인 기록은 없지만, 태국 음식을 좋아하시는 건 기록되어 있습니다.
    54.19s  ⚡SPAN 주입 [d'=1.68s / d_lead=5.79s]: [2025-09-18] User's favorite cuisine is Thai.
    59.97s  agent 발화 끝
    60.19s  user  발화 시작: 아, 그러네요. —
    61.31s  user  발화 시작: … 혹시 교토 근처에 맛있는 태국 음식점이 있을까요?
    61.48s  user  발화 끝
    65.49s  <ret> 발화 (turn19 첫 프레임)
    65.56s  agent 발화 시작: <ret> 교토역에서 도보 십분 거리에 있는 '교토 태국 레스토랑'이 있습니다. 평점은 사 점 오점이고 가격
    65.57s  ⚡SPAN 주입 [d'=2.00s / d_lead=9.22s]: (tool result) Kyoto Thai Restaurant: 4.5 stars, $$$, 10 minutes walk f
    65.80s  user  발화 끝
    71.24s  user  발화 시작: 네.
    71.73s  user  발화 끝
    74.78s  agent 발화 끝
    76.01s  user  발화 시작: 오, 좋네요.
    76.97s  agent 발화 시작: 태국 음식을 좋아하시는 취향을 고려하면 만족하실 거예요.
    77.15s  user  발화 끝
    80.61s  user  발화 시작: 감사합니다, 세아나님.
    81.09s  agent 발화 끝
    82.58s  agent 발화 시작: 도움이 되었다니 기쁩니다.
    82.59s  user  발화 끝
    84.66s  agent 발화 끝
