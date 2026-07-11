# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "연완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "pet",
#       "text": "User has a Siamese cat named Bella."
#     },
#     {
#       "date": "2026-05-16",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2026-03-02",
#       "category": "trip",
#       "text": "User is planning a trip to New Zealand in March."
#     },
#     {
#       "date": "2025-12-11",
#       "category": "diet",
#       "text": "User is gluten-free."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-07-29",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 연완님. 저는 셀라라예요. 오늘 하루 어떠신가요?
     3.46s  agent 발화 끝
     3.99s  user  발화 시작: 안녕하세요, 셀라라님. 지금 몇 시예요?
     6.99s  <ret> 발화 (turn2 첫 프레임)
     7.07s  agent 발화 시작: <ret> 지금은 서울 시간으로 이천이십육년 칠월 십일 오후 두시 삼십칠분이에요. 편안한 오후 보내세요.
     7.07s  ⚡SPAN 주입 [d'=2.00s / d_lead=6.85s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
     7.12s  user  발화 끝
    11.19s  user  발화 시작: 그렇죠.
    11.87s  user  발화 끝
    13.92s  agent 발화 끝
    14.85s  user  발화 시작: 고맙습니다. 저, 혹시 고양이 이름이 뭐였죠? 기억이 잘 안 나네요.
    19.50s  <ret> 발화 (turn5 첫 프레임)
    19.71s  user  발화 끝
    19.73s  agent 발화 시작: <ret> 연완님은 샴 고양이 벨라를 키우고 계세요. 이천이십육년 유월 팔일에 말씀해주셨어요.
    19.74s  ⚡SPAN 주입 [d'=2.00s / d_lead=5.33s]: [2026-06-08] User has a Siamese cat named Bella.
    22.15s  user  발화 시작: 예.
    22.79s  user  발화 끝
    25.04s  agent 발화 시작: 벨라가 연완님께 큰 즐거움을 주길 바라요.
    25.06s  agent 발화 끝
    27.40s  agent 발화 끝
