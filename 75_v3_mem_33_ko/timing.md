# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "보완",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "early 30s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-05-22",
#       "category": "diet",
#       "text": "User is gluten-free."
#     },
#     {
#       "date": "2026-05-12",
#       "category": "allergy",
#       "text": "User is allergic to penicillin."
#     },
#     {
#       "date": "2026-04-28",
#       "category": "cuisine",
#       "text": "User's favorite cuisine is Thai."
#     },
#     {
#       "date": "2026-02-05",
#       "category": "pet",
#       "text": "User has a tabby cat named Luna."
#     },
#     {
#       "date": "2026-01-19",
#       "category": "work",
#       "text": "User works as a high-school teacher."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2026-04-27",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     }
#   ]
# }


     0.00s  agent 발화 시작: 안녕하세요, 보완님. 저는 드로랜이라고 해요. 만나 뵙게 되어 정말 기뻐요.
     4.48s  user  발화 시작: 안녕하세요, 드로랜 씨. 지금 몇 시예요?
     4.48s  agent 발화 끝
     6.67s  <ret> 발화 (turn2 첫 프레임)
     7.17s  agent 발화 시작: <ret> 지금 서울 시간으로 이천이십육년 칠월 십일 오후 두시 삼십오분이에요. 편안한 오후 보내세요.
     7.17s  user  발화 끝
     8.17s  ⚡SPAN 주입 [d'=1.50s / d_lead=5.38s]: (tool result) It is Friday, July 10, 2026 at 2:35 PM in Asia/Seoul rig
    12.54s  user  발화 시작: 네.
    12.54s  agent 발화 끝
    12.99s  user  발화 시작: 아, 그러고 보니 제가 글루텐 알레르기가 있잖아요. 혹시 근처에 글루텐 프리 식당 아세요?
    12.99s  user  발화 끝
    18.42s  <ret> 발화 (turn5 첫 프레임)
    18.81s  agent 발화 시작: <ret> 네, 보완님. 글루텐 프리 식당을 찾으시는군요. 서울에 글루텐 프리 식당 두 곳을 찾았어요. '더
    18.81s  user  발화 끝
    19.83s  ⚡SPAN 주입 [d'=1.41s / d_lead=10.75s]: [2026-05-22] User is gluten-free.
    29.56s  user  발화 시작: 네네.
    29.56s  agent 발화 끝
    30.01s  user  발화 시작: 더 그린 테이블이 더 가까운 것 같네요. 예약해 주실 수 있나요?
    30.01s  user  발화 끝
    34.43s  <ret> 발화 (turn8 첫 프레임)
    34.73s  ⚡SPAN 주입 [d'=0.30s / d_lead=1.34s]: (tool result) Restaurants found: 'The Green Table' (Gluten-Free, Vegan
    34.94s  agent 발화 시작: <ret> 보완님. 예약해 드릴게요.
    34.94s  user  발화 끝
    35.76s  <ret> 발화 (turn9 첫 프레임)
    36.28s  agent 발화 시작: <ret> '더 그린 테이블'에 칠월 십일 저녁 일곱시에 두명으로 예약 완료되었습니다. 확인 번호는 지 티 
    36.28s  agent 발화 끝
    37.09s  ⚡SPAN 주입 [d'=1.33s / d_lead=10.30s]: (tool result) Reservation confirmed at The Green Table for 2 people on
    46.59s  agent 발화 끝
