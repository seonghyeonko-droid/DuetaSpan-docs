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


     0.00s  user  발화 시작: 오션뷰 호텔에서 이월 십일부터 칠박 동안 방 세 개 예약해 줘.
     4.52s  <ret> 발화 (turn1 첫 프레임)
     4.67s  agent 발화 시작: <ret> 물론입니다. 잠시만 기다려 주세요.
     4.77s  user  발화 끝
     5.48s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.08s]: (tool result) The reservation is confirmed for three rooms at Ocean Vi
     6.58s  agent 발화 시작: 오션뷰 호텔, 이월 십일부터 칠박, 방 세 개 예약 완료되었습니다.
     6.75s  agent 발화 끝
    11.30s  agent 발화 끝
    11.49s  user  발화 시작: 혹시 취소 정책은 어떻게 돼?
    13.47s  user  발화 끝
    13.79s  agent 발화 시작: 아, 네, 취소 정책에 대해 말씀드리려고 했는데요—
    15.22s  user  발화 시작: 응.
    15.52s  user  발화 끝
    16.46s  <ret> 발화 (turn6 첫 프레임)
    16.54s  agent 발화 시작: <ret> 예약 취소는 이월 삼일까지 가능합니다. 이월 삼일까지 취소하시면 전액 환불됩니다.
    16.55s  agent 발화 끝
    17.42s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.64s]: (tool result) Cancellations are permitted before February third, two t
    21.81s  agent 발화 끝
    23.12s  user  발화 시작: 음, 좋네. 그럼 조식 포함으로 변경 가능해?
    26.60s  <ret> 발화 (turn8 첫 프레임)
    26.83s  agent 발화 시작: <ret> 잠시만요, 확인해 볼게요.
    26.96s  user  발화 끝
    27.10s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.98s]: (tool result) Breakfast has been added to your reservation for an addi
    28.72s  agent 발화 시작: 조식 추가되었고, 일박당 이십달러가 추가됩니다.
    28.82s  agent 발화 끝
    32.42s  agent 발화 끝
