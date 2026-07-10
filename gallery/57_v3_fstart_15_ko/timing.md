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

# EXAMINER(FDB-v2) 단계: S1 시드니 오페라 하우스의 위도와 경도는 어떻게 돼? | S2 …레스토랑도 찾아줄 수 있어? | S3 …혹시 거기 근처에 주차장도 있니? | S4 고마워. 정말 도움이 됐어.

     0.00s  user  발화 시작: 시드니 오페라 하우스의 위도와 경도는 어떻게 돼?
     2.91s  <ret> 발화 (turn1 첫 프레임)
     2.98s  agent 발화 시작: <ret> 시드니 오페라 하우스의 위도는 마이너스 삼십삼 점 팔오육팔도, 경도는 백오십일 점 이일오삼도입니다
     2.99s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.22s]: (tool result) The Sydney Opera House is located at latitude -33.8568 a
     3.24s  user  발화 끝
     6.01s  user  발화 시작: 응.
     6.50s  user  발화 끝
    10.02s  user  발화 시작: 음… 그 근처에 괜찮은…
    10.20s  agent 발화 끝
    12.27s  user  발화 끝
    13.75s  user  발화 시작: …레스토랑도 찾아줄 수 있어?
    15.28s  <ret> 발화 (turn5 첫 프레임)
    15.67s  agent 발화 시작: <ret> 시드니 오페라 하우스 근처에는 아리아 레스토랑을 포함해 괜찮은 레스토랑이 여러 곳 있어요. 현대 
    15.68s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.81s]: (tool result) There are several restaurants near the Sydney Opera Hous
    15.82s  user  발화 끝
    19.27s  user  발화 시작: 응.
    19.82s  user  발화 끝
    24.48s  agent 발화 끝
    24.48s  agent 발화 시작: 아리아 레스토랑은 특히 런치 스페셜 메뉴가 인기가 많다고 하네요.
    28.08s  user  발화 시작: 아리아 레스토랑 예약 좀 해줘. 다음 주 토요일 저녁 일곱시에 두 명으로.
    28.23s  agent 발화 끝
    32.45s  <ret> 발화 (turn9 첫 프레임)
    32.85s  agent 발화 시작: <ret> 아리아 레스토랑에 다음 주 토요일 저녁 일곱시에 두 분 예약이 완료됐습니다. 확인 번호는 ARIA
    32.85s  ⚡SPAN 주입 [d'=2.00s / d_lead=7.55s]: (tool result) Your reservation at Aria Restaurant for two people on Ju
    33.08s  user  발화 끝
    40.40s  agent 발화 끝
    41.45s  user  발화 시작: …혹시 거기 근처에 주차장도 있니?
    43.42s  <ret> 발화 (turn11 첫 프레임)
    43.66s  user  발화 끝
    43.81s  agent 발화 시작: <ret> 죄송하지만, 아리아 레스토랑 근처 주차장 정보는 찾을 수 없었어요.
    43.82s  ⚡SPAN 주입 [d'=2.00s / d_lead=4.35s]: (no information found)
    46.72s  user  발화 시작: 아.
    47.22s  user  발화 끝
    48.16s  agent 발화 끝
    48.26s  user  발화 시작: 흐음… 그럼 대중교통으로 가는 방법 좀 알려줘.
    51.40s  <ret> 발화 (turn14 첫 프레임)
    51.49s  user  발화 끝
    51.55s  agent 발화 시작: <ret> 현재 위치에서 아리아 레스토랑까지 대중교통을 이용하려면 Circular Quay 역까지 기차를 타
    51.56s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.25s]: (tool result) To reach Aria Restaurant from your current location by p
    59.79s  agent 발화 끝
    60.93s  user  발화 시작: 고마워. 정말 도움이 됐어.
    63.29s  user  발화 끝
    63.41s  agent 발화 시작: 언제든 편하게 다시 찾아주세요. 좋은 시간 보내세요.
    66.92s  agent 발화 끝
