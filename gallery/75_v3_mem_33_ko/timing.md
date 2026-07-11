# v3_mem_33_ko — 전 이벤트 시간순 타임라인 (L=agent/R=user)
# <ret>=agent 턴 첫 프레임(lead 첫 토큰 대체) · SPAN=lead 안 d' 지점(문장 중간 가능, Eq.3 sample_rag_delay)
# CONTEXT DB (moshi가 이 유저에 대해 내부 보유하는 저장 데이터 — 원본 JSON):
# {
#   "profile": {
#     "user_id": "v3_mem_33",
#     "name": "연훈",
#     "location": {
#       "city": "Seoul",
#       "country": "South Korea",
#       "timezone": "Asia/Seoul (KST, UTC+9)",
#       "currency": "KRW (₩)"
#     },
#     "nationality": "Korean",
#     "gender": "male",
#     "age_range": "late 20s",
#     "language": "Korean"
#   },
#   "saved_memories": [
#     {
#       "date": "2026-01-08",
#       "category": "allergy",
#       "text": "User is allergic to shellfish."
#     },
#     {
#       "date": "2025-12-27",
#       "category": "trip",
#       "text": "User is planning a trip to Iceland in December."
#     },
#     {
#       "date": "2025-11-20",
#       "category": "work",
#       "text": "User works as a graphic designer."
#     },
#     {
#       "date": "2025-11-05",
#       "category": "hobby",
#       "text": "User is into home fermentation."
#     },
#     {
#       "date": "2025-06-05",
#       "category": "home",
#       "text": "User's home address is 서울 강남구 역삼동 678-9."
#     }
#   ],
#   "conversation_summaries": [
#     {
#       "date": "2025-11-01",
#       "title": "Researching a used car",
#       "bullets": [
#         "comparing hybrid models",
#         "wants under 30k miles"
#       ]
#     },
#     {
#       "date": "2025-09-20",
#       "title": "Apartment hunting downtown",
#       "bullets": [
#         "wanted a pet-friendly building",
#         "budget for 2 bedrooms"
#       ]
#     },
#     {
#       "date": "2025-07-12",
#       "title": "Comparing gym memberships",
#       "bullets": [
#         "wants a pool",
#         "close to the office"
#       ]
#     }
#   ]
# }

# EXAMINER(FDB-v2) 단계: S1 안녕하세요, 트히르님. 잘 부탁드립니다. | S2 앗, 벌써 시간이 이렇게 됐어요? | S3 여행요? 아이슬란드 여행 말씀하시는 건가요? | S4 …혹시 아이슬란드 여행 전에 필요한 준비물 같은 거 알려주실 

     0.00s  agent 발화 시작: 안녕하세요, 연훈님! 저는 여러분의 건강과 생산성을 돕는 트히르예요.
     0.00s  <ret> 발화 (turn5 첫 프레임)
     0.06s  user  발화 시작: 음.
     0.06s  agent 발화 끝
     0.07s  user  발화 시작: 안녕하세요, 트히르님. 잘 부탁드립니다.
     0.07s  user  발화 끝
     0.10s  agent 발화 시작: 오늘 하루 어떻게 지내셨어요? 혹시 특별한 계획이 있으신가요?
     0.10s  user  발화 끝
     0.16s  user  발화 시작: 그냥 그래요. 근데 지금 몇 시예요?
     0.16s  agent 발화 끝
     0.21s  agent 발화 시작: <ret> 지금은 서울 시간으로 이천이십육년 칠월 십일 오후 두시 삼십칠분이에요.
     0.21s  ⚡SPAN 주입 [d'=0.07s / d_lead=0.07s]: (tool result) It is Friday, July 10, 2026 at 2:37 PM in Asia/Seoul rig
     0.21s  user  발화 끝
     0.28s  user  발화 시작: 예.
     0.28s  agent 발화 끝
     0.28s  user  발화 시작: 앗, 벌써 시간이 이렇게 됐어요?
     0.28s  user  발화 끝
     0.32s  agent 발화 시작: 시간이 참 빠르죠. 혹시 오늘 하루의 목표를 세우셨나요?
     0.32s  user  발화 끝
     0.38s  user  발화 시작: 네.
     0.38s  agent 발화 끝
     0.39s  user  발화 시작: 목표는… 음, 아직 잘 모르겠어요.
     0.39s  <ret> 발화 (turn16 첫 프레임)
     0.39s  user  발화 끝
     0.40s  <ret> 발화 (turn13 첫 프레임)
     0.43s  agent 발화 시작: 목표를 정하는 데 어려움을 느끼시는군요. 혹시 최근에 계획했던 여행에 대해 이야기해 볼까요?
     0.43s  user  발화 끝
     0.52s  user  발화 시작: 여행요? 아이슬란드 여행 말씀하시는 건가요?
     0.52s  agent 발화 끝
     0.56s  agent 발화 시작: <ret> 네, 맞아요. 이천이십오년 십이월 이십칠일에 아이슬란드 여행을 계획하고 있다고 말씀하셨어요.
     0.56s  ⚡SPAN 주입 [d'=0.08s / d_lead=0.08s]: [2025-12-27] User is planning a trip to Iceland in December.
     0.56s  user  발화 끝
     0.64s  user  발화 시작: 아, 맞아요! 근데 여행 준비는 아직 하나도 안 했어요—
     0.64s  agent 발화 끝
     0.71s  user  발화 시작: …혹시 아이슬란드 여행 전에 필요한 준비물 같은 거 알려주실 수 있나요?
     0.71s  user  발화 끝
     0.79s  agent 발화 시작: <ret> 이천이십오년 십이월에 아이슬란드 여행을 가신다고 하셨으니, 따뜻한 옷과 방수 기능이 있는 외투가 
     0.79s  ⚡SPAN 주입 [d'=0.10s / d_lead=0.10s]: [2025-12-27] User is planning a trip to Iceland in December.
     0.79s  user  발화 끝
     0.89s  user  발화 시작: 진짜요?
     0.89s  agent 발화 끝
     0.90s  agent 발화 시작: 혹시 다른 궁금한 점이 있으신가요? 아니면, 오늘 하루를 좀 더 구체적으로 계획해 볼까요?
     0.90s  user  발화 끝
     1.00s  agent 발화 끝
