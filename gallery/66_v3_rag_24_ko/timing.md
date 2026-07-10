# v3_rag_24_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_rag_24",
#     "name": "현현",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "50s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-06-08",
#       "category": "allergy",
#       "text": "User is allergic to cat dander."
#     },
#     {
#       "date": "2026-05-28",
#       "category": "seat",
#       "text": "User prefers an aisle seat when traveling."
#     },
#     {
#       "date": "2026-02-08",
#       "category": "home",
#       "text": "User's home address is 부산 해운대구 해운대로 570."
#     },
#     {
#       "date": "2025-12-13",
#       "category": "trip",
#       "text": "User is planning a trip to Lisbon in October."
#     },
#     {
#       "date": "2025-10-19",
#       "category": "work",
#       "text": "User works as a chef."
#     },
#     {
#       "date": "2025-09-19",
#       "category": "hobby",
#       "text": "User is into rock climbing."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-03-14",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 안녕하세요, 프라이아 씨. 미국에서 올림픽이 언제 열릴까요?
     4.52s  <ret> 발화 (turn1 첫 프레임)
     4.84s  agent 발화 시작: <ret> 이천이십팔년 하계 올림픽은 미국 캘리포니아주 로스앤젤레스에서 열릴 예정이에요. 로스앤젤레스는 정말
     4.84s  ⚡SPAN 주입 [d'=1.76s / d_lead=7.69s]: The 2028 Summer Olympics are scheduled to be held in Los Angeles, Cali
     5.05s  user  발화 끝
    12.53s  agent 발화 끝
    14.06s  user  발화 시작: 로스앤젤레스에 가려면 지금 비행기표를 예매할 수 있을까요?
    17.38s  <ret> 발화 (turn3 첫 프레임)
    17.77s  agent 발화 시작: <ret> 이천이십육년 칠월 십칠일 서울에서 로스앤젤레스행 편도 항공권은 팔백오십달러부터 시작해요. 미리 예
    17.78s  ⚡SPAN 주입 [d'=2.00s / d_lead=10.11s]: (tool result) One-way flights from Seoul to Los Angeles on July 17, 20
    17.99s  user  발화 끝
    23.19s  user  발화 시작: 네.
    23.77s  user  발화 끝
    27.88s  agent 발화 끝
    28.35s  user  발화 시작: 팔백오십달러면 괜찮은 가격이네요.
    31.14s  agent 발화 시작: 다행이에요. 로스앤젤레스는 볼거리가 정말 많은 곳이에요. 혹시 특별히 관심 있는 곳이 있으신가요?
    31.26s  user  발화 끝
    37.58s  agent 발화 끝
