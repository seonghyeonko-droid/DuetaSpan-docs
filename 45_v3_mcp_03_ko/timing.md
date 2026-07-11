# v3_mcp_03_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_03",
#     "name": "세형",
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
#       "date": "2026-06-19",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     },
#     {
#       "date": "2026-04-20",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-02-16",
#       "category": "pet",
#       "text": "User has a Poodle named Coco."
#     },
#     {
#       "date": "2025-07-07",
#       "category": "diet",
#       "text": "User is pescatarian."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-01-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 리버벤드 레지던스 팔월 십이일에 방문 예약하고 싶어요.
     3.43s  <ret> 발화 (turn1 첫 프레임)
     3.75s  agent 발화 시작: <ret> 리버벤드 레지던스 팔월 십이일 오후 두시에 방문 예약이 완료되었습니다. 확인 번호는 알 에이치 칠
     3.75s  ⚡SPAN 주입 [d'=2.00s / d_lead=8.20s]: (tool result) Visit scheduled for Riverbend Residences on August 12, 2
     3.93s  user  발화 끝
    11.88s  user  발화 시작: 방이 몇 개 있어요?
    11.95s  agent 발화 끝
    13.33s  agent 발화 시작: 리버벤드 레지던스에는 다양한 크기의 방들이 있습니다—
    13.35s  user  발화 끝
    16.31s  user  발화 시작: … 거긴 반려동물 동반 가능한가요?
    16.89s  agent 발화 끝
    18.85s  user  발화 끝
    19.08s  agent 발화 시작: 네, 리버벤드 레지던스는 반려동물 동반이 가능합니다. 추가 요금이 발생할 수 있습니다.
    24.36s  agent 발화 끝
    24.39s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 저는 앞으로의 집 구하기 과정을 도와드릴 수 있습니다.
    29.86s  agent 발화 끝
