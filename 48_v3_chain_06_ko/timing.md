# v3_chain_06_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_chain_06",
#     "name": "민린",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-04-05",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-20",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in October."
#     },
#     {
#       "date": "2025-12-01",
#       "category": "home",
#       "text": "User's home address is 경기 성남시 분당구 판교로 235."
#     },
#     {
#       "date": "2025-10-24",
#       "category": "work",
#       "text": "User works as a nurse."
#     },
#     {
#       "date": "2025-06-14",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-26",
#       "title": "Setting up a home network",
#       "bullets": [
#         "asked about mesh routers",
#         "coverage for a 3-story house"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 이번 주말에 가족들이랑 갈 만한 호텔 좀 찾아줘. | S2 오, 괜찮네. 거긴 주차는 가능한가? | S3 흐음… 그럼 다른 호텔은 없을까? 좀 더 저렴한 곳으로. | S4 알았어, 고마워.

     0.00s  user  발화 시작: 이번 주말에 가족들이랑 갈 만한 호텔 좀 찾아줘.
     3.82s  <ret> 발화 (turn1 첫 프레임)
     4.06s  agent 발화 시작: <ret> 죄송해요, 지금은 그 정보를 찾을 수 없네요. 혹시 다른 조건이 있으신가요?
     4.06s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.59s]: (no information found)
     4.06s  user  발화 끝
     9.65s  user  발화 시작: 음… 서울 근처, 수영장이 있는 곳으로.
     9.65s  agent 발화 끝
    12.45s  <ret> 발화 (turn3 첫 프레임)
    12.69s  agent 발화 시작: <ret> 서울 근처에 수영장이 있는 롯데월드 호텔이 있습니다. 오성급이고, 일박에 삼십만 원이에요.
    12.69s  ⚡SPAN 주입 [d'=1.52s / d_lead=5.59s]: (tool result) {"hotel name": "롯데월드 호텔", "address": "서울특별시 송파구 올림픽로 240
    12.69s  user  발화 끝
    18.28s  user  발화 시작: 오, 괜찮네. 거긴 주차는 가능한가?
    18.28s  agent 발화 끝
    20.82s  agent 발화 시작: 죄송합니다, 주차 가능 여부는 현재 확인되지 않네요. 호텔에 직접 문의해 보시는 게 좋을 것 같아요.
    20.82s  user  발화 끝
    28.44s  user  발화 시작: 흐음… 그럼 다른 호텔은 없을까? 좀 더 저렴한 곳으로.
    28.44s  agent 발화 끝
    32.61s  <ret> 발화 (turn7 첫 프레임)
    33.01s  agent 발화 시작: <ret> 신라 호텔은 어떠세요? 사성급이고, 일박에 십팔만 원이며 수영장과 스파도 이용하실 수 있어요.
    33.01s  ⚡SPAN 주입 [d'=1.76s / d_lead=6.09s]: (tool result) {"hotel name": "신라 호텔", "address": "서울특별시 중구 동호로 27", "r
    33.01s  user  발화 끝
    39.10s  user  발화 시작: 진짜?
    39.10s  agent 발화 끝
    39.61s  agent 발화 시작: 네, 롯데월드 호텔보다 조금 더 저렴하고, 편의시설도 잘 갖춰져 있습니다. —
    39.61s  user  발화 끝
    45.19s  user  발화 시작: 신라 호텔, 좋아 보여. 혹시 지금 예약할 수 있어?
    45.19s  agent 발화 끝
    49.44s  <ret> 발화 (turn11 첫 프레임)
    49.76s  agent 발화 시작: <ret> 네, 신라 호텔 예약이 완료되었습니다. 확인 번호는 에스 에이치 일 이 삼 사 오 육이고, 총 금
    49.76s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.19s]: (tool result) {"confirmation id": "SH123456", "hotel name": "신라 호텔", "
    49.76s  user  발화 끝
    61.95s  user  발화 시작: 알았어, 고마워.
    61.95s  agent 발화 끝
    62.96s  agent 발화 시작: 천만에요. 가족들과 즐거운 시간 보내세요.
    62.96s  user  발화 끝
    65.50s  agent 발화 끝
