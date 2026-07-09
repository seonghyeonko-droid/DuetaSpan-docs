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


     0.00s  user  발화 시작: 오션뷰 호텔에서 2월 10일부터 7박 동안 방 세 개 예약해 줘.
     4.80s  <ret> 발화 (turn1 첫 프레임)
     4.95s  agent 발화 시작: <ret> 물론입니다. 잠시만 기다려 주세요.
     5.05s  user  발화 끝
     5.76s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.16s]: (tool result) The reservation is confirmed for three rooms at Ocean Vi
     6.97s  agent 발화 시작: 오션뷰 호텔, 2월 10일부터 7박, 방 세 개 예약 완료되었습니다.
     7.11s  agent 발화 끝
    11.69s  agent 발화 끝
    11.89s  user  발화 시작: 혹시 취소 정책은 어떻게 돼?
    13.87s  user  발화 끝
    14.19s  agent 발화 시작: 아, 네, 취소 정책에 대해 말씀드리려고 했는데요—
    15.94s  user  발화 시작: 응.
    16.29s  user  발화 끝
    17.41s  <ret> 발화 (turn6 첫 프레임)
    17.47s  agent 발화 끝
    17.49s  agent 발화 시작: <ret> 예약 취소는 2월 3일까지 가능합니다. 2월 3일까지 취소하시면 전액 환불됩니다.
    18.37s  ⚡SPAN 주입 [d'=0.96s / d_lead=2.59s]: (tool result) Cancellations are permitted before February third, two t
    22.67s  agent 발화 끝
    23.98s  user  발화 시작: 음, 좋네. 그럼 조식 포함으로 변경 가능해?
    26.96s  <ret> 발화 (turn8 첫 프레임)
    27.19s  agent 발화 시작: <ret> 잠시만요, 확인해 볼게요.
    27.35s  user  발화 끝
    27.46s  ⚡SPAN 주입 [d'=0.50s / d_lead=1.80s]: (tool result) Breakfast has been added to your reservation for an addi
    28.89s  agent 발화 시작: 조식 추가되었고, 1박당 20달러가 추가됩니다.
    28.99s  agent 발화 끝
    32.31s  agent 발화 끝
