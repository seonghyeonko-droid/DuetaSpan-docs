# v3_mcp_01_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mcp_01",
#     "name": "서람",
#     "location": {
#       "city": "Busan",
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
#       "date": "2026-05-23",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2026-03-20",
#       "category": "work",
#       "text": "User works as a marketing manager."
#     },
#     {
#       "date": "2026-01-17",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     },
#     {
#       "date": "2025-09-24",
#       "category": "diet",
#       "text": "User is vegan."
#     },
#     {
#       "date": "2025-07-12",
#       "category": "home",
#       "text": "User's home address is 인천 연수구 송도동 12-5."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-02-23",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-06",
#       "title": "Planning a birthday dinner",
#       "bullets": [
#         "party of six",
#         "looking for outdoor seating"
#       ]
#     },
#     {
#       "date": "2025-06-20",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 이번 주 토요일에 서울에서 부산 가는 기차표 좀 알아봐 줘.
     3.63s  <ret> 발화 (turn1 첫 프레임)
     3.86s  agent 발화 시작: <ret> 이천이십육년 칠월 십일일 서울에서 부산 가는 기차편은 KTX가 오전 열시에 출발해서 열두시 삼십분
     3.87s  ⚡SPAN 주입 [d'=2.00s / d_lead=18.09s]: (tool result) Trains from Seoul to Busan on July 11, 2026: KTX 10:00-1
     3.89s  user  발화 끝
    16.48s  user  발화 시작: 예.
    17.02s  user  발화 끝
    21.37s  user  발화 시작: KTX로 예매해 줘.
    21.95s  agent 발화 끝
    22.90s  <ret> 발화 (turn4 첫 프레임)
    22.98s  user  발화 끝
    23.13s  agent 발화 시작: <ret> KTX로 예매 완료되었어요. 이천이십육년 칠월 십일일 오전 열시에 출발하는 KTX, 삼호차 십오번
    23.14s  ⚡SPAN 주입 [d'=2.00s / d_lead=12.43s]: (tool result) KTX Seoul to Busan, July 11, 2026, 10:00 departure, car 
    35.56s  agent 발화 끝
    36.10s  user  발화 시작: 혹시, 그 기차에 와이파이 있어요?
    39.00s  agent 발화 시작: 기차 내 와이파이 정보는 제가 지금 바로 확인해 드릴 수는 없어요. 제가 알 수 있는 정보는 기차 시간과 좌
    39.06s  user  발화 끝
    41.73s  user  발화 시작: 그렇죠.
    42.55s  user  발화 끝
    46.43s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 아니면, 여행 준비를 더 도와드릴까요?
    46.46s  agent 발화 끝
    50.96s  agent 발화 끝
