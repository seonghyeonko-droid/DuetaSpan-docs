# v3_defer_09_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_defer_09",
#     "name": "보아",
#     "location": {
#       "city": "Busan",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "female",
#     "age_range": "late 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-07-13",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-06-22",
#       "category": "home",
#       "text": "User's home address is 530 Elm Street."
#     },
#     {
#       "date": "2026-05-15",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Korean BBQ."
#     },
#     {
#       "date": "2026-04-11",
#       "category": "diet",
#       "text": "User is vegetarian."
#     },
#     {
#       "date": "2026-03-03",
#       "category": "allergy",
#       "text": "User is allergic to pollen."
#     },
#     {
#       "date": "2026-02-06",
#       "category": "hobby",
#       "text": "User is into marathon training."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-07-17",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2026-05-13",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     }
#   ]
# }


     0.00s  user  발화 시작: 오션뷰 호텔, 샌디에이고에 이월 십일부터 칠박 세개 방 예약 좀 부탁해.
     5.25s  <ret> 발화 (turn1 첫 프레임)
     5.40s  agent 발화 시작: <ret> 네, 샌디에이고 오션뷰 호텔 예약 도와드릴게요. 오션뷰 호텔 이월 십일부터 칠박 세개 방 예약이 
     5.55s  user  발화 끝
     6.29s  ⚡SPAN 주입 [d'=1.04s / d_lead=2.90s]: (tool result) The reservation is confirmed for three rooms at Ocean Vi
    14.39s  user  발화 시작: 킹베드 룸으로 할 수 있어?
    14.58s  agent 발화 끝
    16.07s  agent 발화 시작: 물론입니다. 예약 변경을 확인해 볼게요—
    16.09s  user  발화 끝
    17.83s  user  발화 시작: 혹시 조식 포함된 패키지는 없어?
    18.66s  agent 발화 끝
    20.23s  user  발화 끝
    20.58s  agent 발화 시작: 아, 네. 조식 포함 여부를 확인해 드리겠습니다. 잠시만 기다려 주세요.
    23.08s  user  발화 시작: 응.
    23.48s  user  발화 끝
    24.18s  ⚡지연 SPAN 주입(선제발표 직전): (tool result) The breakfast-included package adds seventy-five dollars
    25.04s  agent 발화 시작: <ret> 확인 결과, 오션뷰 호텔에서 조식 포함 패키지를 제공하고 있습니다. 조식 포함 패키지는 일박당 칠
    25.20s  agent 발화 끝
    35.19s  agent 발화 끝
